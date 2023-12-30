import axiosInstance from '../request-adaptar'

export const createAccount = (data) =>
  axiosInstance.post('/users/create-account', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })

export const updateProfile = (userId, data) =>
  axiosInstance.put(`/users/update/${userId}`, data)

export const updateProfileImage = (userId, data) =>
  axiosInstance.put(`/users/update-profile-image/${userId}`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })

export const login = (data) => axiosInstance.post('/users/login', data)

export const getUser = (userId) => axiosInstance.get(`/users/${userId}`)

export const getAuthors = () => axiosInstance.get(`/users/`)

//get Team
export const getTeam = () => axiosInstance.get(`/users/team`)
