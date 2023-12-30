import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 50000,
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     console.log(error);
//     const cookieJar = Cookies.get(); // Get all existing cookies
//     for (const cookieName in cookieJar) {
//       // Remove each cookie one by one
//       Cookies.remove(cookieName);
//     }
//     // Redirect to login page here
//     window.location.href = "/";

//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
