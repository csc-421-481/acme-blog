'use client'
import { getTeam } from '@/app/api/requests/users'
import useSWR from 'swr'

export default function useGetTeam() {
  const fetcher = async () => {
    const { data } = await getTeam()
    return data
  }

  const { data, error, mutate, isLoading } = useSWR(`/users/team`, fetcher)

  return {
    userData: data,
    userError: error,
    mutateUser: () => mutate(),
    userLoading: isLoading,
  }
}
