'use client'
import { getUser } from '@/app/api/requests/users'
import BlogPost from '@/components/cards/BlogPost'
import BlogPostSkeleton from '@/components/skeletons/BlogPostSkeleton'
import useGetProfilePosts from '@/features/hooks/swr-requests/useGetProfilePosts'
import { Avatar } from '@nextui-org/react'
import { useSearchParams } from 'next/navigation'
import { XCircle } from 'react-feather'
import useSWR from 'swr'

const page = () => {
  const searchParams = useSearchParams()
  // const data = router.query
  const id = searchParams.get('id')
  const fetcher = async () => {
    const { data } = await getUser(id)
    console.log(data)
    return data
  }
  const {
    data: authorData,
    error: authorError,
    isLoading: authorDataLoading,
  } = useSWR('api/users/author', fetcher)

  const { profilePosts, profilePostsLoading } = useGetProfilePosts(id)

  return (
    <div className="flex flex-col items-center  my-10">
      <div className="flex w-32 h-32 items-center justify-center rounded-full border">
        {' '}
        <Avatar src={authorData?.profileImage} className="w-24 h-24" />
      </div>
      <h1 className="text-2xl font-bold my-2">
        {authorData?.firstName} {authorData?.lastName}
      </h1>
      <p className="text-sm text-center mt-2 mb-10 md:4/5 lg:w-3/5">
        {authorData?.bio}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {!profilePostsLoading ? (
          profilePosts.length > 0 ? (
            profilePosts.map((each, index) => (
              <BlogPost key={index} post={each} />
            ))
          ) : (
            <div className="flex flex-col gap-3 items-center col-span-3 text-danger">
              <XCircle size={100} />
              <p>No Blog posts available.</p>
            </div>
          )
        ) : (
          Array(4)
            .fill(true)
            .map((each, index) => <BlogPostSkeleton key={index} />)
        )}
      </div>
    </div>
  )
}

export default page
