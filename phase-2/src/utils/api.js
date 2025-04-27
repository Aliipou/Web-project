// Placeholder for api.js
import axios from "axios";

// Create axios instance with base URL
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// API endpoints
const endpoints = {
  // Contact form submission
  contact: {
    submit: (data) => api.post("/contact", data),
  },

  // Could add more endpoints here as the project grows
  // For example:
  // projects: {
  //   getAll: () => api.get('/projects'),
  //   getById: (id) => api.get(`/projects/${id}`),
  // },
};

// Error handler
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      "Something went wrong. Please try again later.";

    console.error("API Error:", error);

    return Promise.reject({
      ...error,
      message,
    });
  }
);

export default endpoints;
