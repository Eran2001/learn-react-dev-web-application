import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

const instance = {
  apiClient,
};

export default instance;
