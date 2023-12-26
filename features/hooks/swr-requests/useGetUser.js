"use client";
import { getUser } from "@/app/api/requests/users";
import useSWR from "swr";

export default function useGetUser(userId) {
  const fetcher = async () => {
    if (!userId) return;
    const { data } = await getUser(userId);
    return data;
  };

  const { data, error, mutate, isLoading } = useSWR(
    `/users/${userId}`,
    fetcher
  );

  return {
    userData: data,
    userError: error,
    mutateUser: () => mutate(),
    userLoading: isLoading,
  };
}
