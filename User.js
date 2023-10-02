// **Create User**
async function createUser(name, email, password) {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('password', password);

  const response = await axios.post('/api/users', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  return response.data;
}

// **Get User**
async function getUser(id) {
  const response = await axios.get(`/api/users/${id}`);

  return response.data;
}

// **Update User**
async function updateUser(id, name, email) {
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);

  const response = await axios.put(`/api/users/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  return response.data;
}

// **Delete User**
async function deleteUser(id) {
  const response = await axios.delete(`/api/users/${id}`);

  return response.data;
}
