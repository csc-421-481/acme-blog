"use client";
import { getCategories } from "@/app/api/requests/posts";
import { getUser } from "@/app/api/requests/users";
import useSWR from "swr";

export default function useGetCategories() {
  const fetcher = async () => {
    const { data } = await getCategories();
    return data;
  };

  const { data, error, mutate, isLoading } = useSWR(
    `/posts/categories`,
    fetcher
  );

  return {
    categories: data,
    categoriesError: error,
    mutateCategories: () => mutate(),
    categoriesLoading: isLoading,
  };
}
