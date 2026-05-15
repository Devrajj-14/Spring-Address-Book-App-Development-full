import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/employeepayrollservice';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Get all persons
export const getAllPersons = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    console.error('Error fetching persons:', error);
    throw error;
  }
};

// Get person by ID
export const getPersonById = async (id) => {
  try {
    const response = await api.get(`/get/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching person with ID ${id}:`, error);
    throw error;
  }
};

// Create new person
export const createPerson = async (personData) => {
  try {
    const response = await api.post('/create', personData);
    return response.data;
  } catch (error) {
    console.error('Error creating person:', error);
    throw error;
  }
};

// Update person
export const updatePerson = async (id, personData) => {
  try {
    const response = await api.put(`/update/${id}`, personData);
    return response.data;
  } catch (error) {
    console.error(`Error updating person with ID ${id}:`, error);
    throw error;
  }
};

// Delete person
export const deletePerson = async (id) => {
  try {
    const response = await api.delete(`/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting person with ID ${id}:`, error);
    throw error;
  }
};

export default api;
