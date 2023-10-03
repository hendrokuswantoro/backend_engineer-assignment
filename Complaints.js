const axios = require('axios'); // Import Axios

// Create Complaint
async function createComplaint(title, description, location, photo) {
  try {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('location', JSON.stringify(location));
    formData.append('photo', photo);

    const response = await axios.post('/api/complaints', formData, {
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

// Get Complaint
async function getComplaint(id) {
  try {
    const response = await axios.get(`/api/complaints/${id}`);

    return response.data;
  } catch (error) {
    // Handle error here
    throw error;
  }
}

// Update Complaint
async function updateComplaint(id, title, description, location) {
  try {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('location', JSON.stringify(location));

    const response = await axios.put(`/api/complaints/${id}`, formData, {
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

// Delete Complaint
async function deleteComplaint(id) {
  try {
    const response = await axios.delete(`/api/complaints/${id}`);

    return response.data;
  } catch (error) {
    // Handle error here
    throw error;
  }
}

module.exports = {
  createComplaint,
  getComplaint,
  updateComplaint,
  deleteComplaint,
};
