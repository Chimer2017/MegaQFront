import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    } else {
      if (!["/login", "/signup"].includes(window.location.pathname)) {
        window.location.href = "/login";
      }
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log({ error });
    if (401 === error.response.status) {
      if (window.location.pathname === "/login") {
        return error.response;
      }
      window.location.href = "/login";
    }
    return { data: error.response.data, status: error.response.status };
  }
);
