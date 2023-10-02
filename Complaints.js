// **Create Complaint**
async function createComplaint(title, description, location, photo) {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('location', JSON.stringify(location));
  formData.append('photo', photo);

  const response = await axios.post('/api/complaints', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  return response.data;
}

// **Get Complaint**
async function getComplaint(id) {
  const response = await axios.get(`/api/complaints/${id}`);

  return response.data;
}

// **Update Complaint**
async function updateComplaint(id, title, description, location) {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('location', JSON.stringify(location));

  const response = await axios.put(`/api/complaints/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  return response.data;
}

// **Delete Complaint**
async function deleteComplaint(id) {
  const response = await axios.delete(`/api/complaints/${id}`);

  return response.data;
}
