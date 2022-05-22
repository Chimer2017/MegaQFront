import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
  timeout: 2000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    } else {
      if (!["/login", "/registro"].includes(window.location.pathname)) {
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
    if (401 === error.response.status) {
      if (window.location.pathname === "/login") {
        //todo: If token fails, then is removed?
        // window.localStorage.removeItem("token");
        return error.response;
      }
      window.location.href = "/login";
    }
    // else if (403 == error.response.status) {
    //   window.location.href = "/";
    // }
    //Error will be always returned
    return { data: error.response.data, status: error.response.status };
  }
);
