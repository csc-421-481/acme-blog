import axiosInstance from "../request-adaptar";

// categories
export const getCategories = () => axiosInstance.get("/posts/categories");

// posts

export const getPosts = () => axiosInstance.get("/posts");
export const getUserPosts = (userId) =>
  axiosInstance.get(`/posts/user/${userId}`);

export const getPost = (postId) => axiosInstance.get(`/posts/${postId}`);

export const createPost = (data) =>
  axiosInstance.post(`/posts/create`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// comments
export const createComment = (postId, data) =>
  axiosInstance.psot(`/posts/comments/create/${postId}`, data);

export const getComments = (postId) =>
  axiosInstance.get(`/posts/comments/${postId}`);
