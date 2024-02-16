import axios from 'axios';

const axiosInstance = axios.create({
  // Local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-23786/us-central1/api",
  // deployed version of amazon server on render.com
  baseURL: "https://amazon-api-backend-deploye.onrender.com",
});
export {axiosInstance};
