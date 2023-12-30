"use client";
import { getPost } from "@/app/api/requests/posts";
import useSWR from "swr";

export default function useGetPost(id) {
  const fetcher = async () => {
    const { data } = await getPost(id);
    return data;
  };

  const { data, error, mutate, isLoading } = useSWR(`/posts/${id}`, fetcher);

  return {
    post: data,
    postError: error,
    mutatePost: () => mutate(),
    postLoading: isLoading,
  };
}
