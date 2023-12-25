import axiosInstance from "../request-adaptar";

export const createAccount = (data) =>
  axiosInstance.post("/users/create-account/", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const login = (data) => axiosInstance.post("/users/login/", data);
