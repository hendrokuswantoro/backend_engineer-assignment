// Create an Axios instance
const axios = axios.create({
  baseURL: 'https://api.example.com'
});

// **Login with security**
async function login(username, password) {
  const response = await axios.post('/api/login', {
    username,
    password
  });

  // Generate a JWT token
  const token = generateJwtToken(response.data);

  // Store the token in the browser's local storage
  localStorage.setItem('token', token);

  return token;
}

// **Generate a JWT token**
function generateJwtToken(data) {
  const header = {
    typ: 'JWT',
    alg: 'HS256'
  };

  const payload = {
    ...data,
    exp: Math.floor(Date.now() / 1000) + 60 * 60 // 1 hour
  };

  const secretKey = 'my-secret-key'; // This should be kept secret
  const token = jwt.sign(payload, secretKey, { header });
  return token;
}

// **Add the JWT token to all requests**
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
