const axios = require('axios'); // Import Axios

// Create User
async function createUser(name, email, password) {
  try {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);

    const response = await axios.post('/api/users', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    // Handle error here
    throw error;
  }
}

// Get User
async function getUser(id) {
  try {
    const response = await axios.get(`/api/users/${id}`);

    return response.data;
  } catch (error) {
    // Handle error here
    throw error;
  }
}

// Update User
async function updateUser(id, name, email) {
  try {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);

    const response = await axios.put(`/api/users/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    // Handle error here
    throw error;
  }
}

// Delete User
async function deleteUser(id) {
  try {
    const response = await axios.delete(`/api/users/${id}`);

    return response.data;
  } catch (error) {
    // Handle error here
    throw error;
  }
}

module.exports = { createUser, getUser, updateUser, deleteUser };
