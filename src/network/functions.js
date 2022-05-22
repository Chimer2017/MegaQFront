import { api } from "./instance";

export const signup = async (userDTO) => {
  const res = await api.post("/signup", userDTO);

  return { data: res.data, status: res.status };
};

export const login = async (loginDTO) => {
  const res = await api.post("/auth", loginDTO);

  return { data: res.data, status: res.status };
};

export const ask = async (body) => {
  const res = await api.get("/ask", body);

  return { data: res.data, status: res.status };
};
