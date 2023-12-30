'use client'
import Author from '@/components/cards/Author'
import AuthorSkeleton from '@/components/skeletons/AuthorSkeleton'
import useGetAuthors from '@/features/hooks/swr-requests/useGetAuthors'
import { XCircle } from 'react-feather'

const page = () => {
  const { authors } = useGetAuthors()
  return (
    <div>
      <div className="text-center my-10">
        <h1 className="text-3xl font-bold">Author page</h1>
        <p className="text-sm mt-1 ">{authors?.length} authors</p>
      </div>

      {/* Start Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-5">
        {authors ? (
          authors.length > 0 ? (
            authors
              .slice(0, 1000)
              .map((each, index) => <Author author={each} key={index} />)
          ) : (
            <div className="flex flex-col gap-3 items-center col-span-3 text-danger">
              <XCircle size={50} />
              <p>No authors available.</p>
            </div>
          )
        ) : (
          Array(3)
            .fill(true)
            .map((each, index) => <AuthorSkeleton key={index} />)
        )}
      </div>
    </div>
  )
}

export default page
