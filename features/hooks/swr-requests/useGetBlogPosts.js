"use client";
import { getPosts } from "@/app/api/requests/posts";
import { getUser } from "@/app/api/requests/users";
import useSWR from "swr";
import Cookies from "js-cookie";

export default function useGetBlogPosts() {
  const fetcher = async () => {
    const { data } = await getPosts();
    return data;
  };

  const { data, error, mutate, isLoading } = useSWR(`/posts/`, fetcher);

  return {
    posts: data,
    postsError: error,
    mutatePosts: () => mutate(),
    postsLoading: isLoading,
  };
}
