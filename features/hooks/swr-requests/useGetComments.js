"use client";
import { getComments } from "@/app/api/requests/posts";
import useSWR from "swr";

export default function useGetComments(postId) {
  const fetcher = async () => {
    const { data } = await getComments(postId);
    return data;
  };

  const { data, error, mutate, isLoading } = useSWR(
    `/posts/comments/${postId}`,
    fetcher
  );

  return {
    comments: data,
    commentsError: error,
    mutateComments: () => mutate(),
    commentsLoading: isLoading,
  };
}
