"use client";
import { getUserPosts } from "@/app/api/requests/posts";
import { getUser } from "@/app/api/requests/users";
import useSWR from "swr";
import Cookies from "js-cookie";

export default function useGetProfilePosts(userId) {
  const fetcher = async () => {
    const { data } = await getUserPosts(userId);
    return data;
  };

  const { data, error, mutate, isLoading } = useSWR(
    `/posts/user/${userId}`,
    fetcher
  );

  return {
    profilePosts: data,
    profilePostsError: error,
    mutateProfilePosts: () => mutate(),
    profilePostsLoading: isLoading,
  };
}
