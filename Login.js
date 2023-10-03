const axios = require('axios'); // Import Axios
const jwt = require('jsonwebtoken'); // Import JWT library

// Create an Axios instance
const instance = axios.create({
  baseURL: 'https://hendrokuswantoro.maps.arcgis.com/apps/instant/attachmentviewer/index.html?appid=aae96e9527e54b74aa0ddb3cb85258de',
});

// Login with security
async function login(username, password) {
  try {
    const response = await instance.post('/api/login', {
      username,
      password,
    });

    // Generate a JWT token
    const token = generateJwtToken(response.data);

    // Store the token in the browser's local storage
    localStorage.setItem('token', token);

    return token;
  } catch (error) {
    // Handle login error here
    throw error;
  }
}

// Generate a JWT token
function generateJwtToken(data) {
  const payload = {
    ...data,
    exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour
  };

  const secretKey = 'backendengineer123'; 
  const token = jwt.sign(payload, secretKey);
  return token;
}

// Add the JWT token to all requests
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

module.exports = { login };
