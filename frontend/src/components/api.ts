import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // آدرس بک‌اند شما
});

export default api;
