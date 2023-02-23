// api/axiosClient.js
import axios from "axios";

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#requestconfig` for the full list of configs
const axiosAdmin = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "content-type": "application/json",
  },
});
axiosAdmin.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("token") || undefined;
    config.headers["Authorization"] = "Bearer " + token;
    return config;
  },
  function (error) {
    // Do something with request error
    console.log("error here");
    return Promise.reject(error);
  }
);
axiosAdmin.interceptors.response.use(
  function (response) {
    return response.data;
  },
  (Error) => {
    return Promise.reject(Error);
  }
);
export default axiosAdmin;
