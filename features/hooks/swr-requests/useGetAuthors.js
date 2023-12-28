"use client";
import { getAuthors } from "@/app/api/requests/users";
import useSWR from "swr";

export default function useGetAuthors() {
  const fetcher = async () => {
    const { data } = await getAuthors();
    return data;
  };

  const { data, error, mutate, isLoading } = useSWR(`/users/authors`, fetcher);

  return {
    authors: data,
    authorsError: error,
    mutateAuthors: () => mutate(),
    authorsLoading: isLoading,
  };
}
