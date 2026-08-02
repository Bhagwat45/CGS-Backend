import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://your-render-backend.onrender.com/api';

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.detail || "Login failed";
  }
};

export const registerUser = async (fullName, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      full_name: fullName,
      email,
      password
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.detail || "Registration failed";
  }
};
