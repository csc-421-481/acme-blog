"use client";
import { Divider, Link } from "@nextui-org/react";
import Author from "../cards/Author";
import useGetAuthors from "@/features/hooks/swr-requests/useGetAuthors";
import AuthorSkeleton from "../skeletons/AuthorSkeleton";
import { XCircle } from "react-feather";

const TopAuthors = () => {
  const { authors } = useGetAuthors();
  return (
    <>
      <section className="my-8">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold my-6">Top Authors</h2>
          <Link
            href="/authors"
            color="foreground"
            underline="hover"
            className="text-sm hover:text-primary"
            showAnchorIcon
          >
            All Authors
          </Link>
        </div>
        <Divider className="my-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {authors ? (
            authors.length > 0 ? (
              authors
                .slice(0, 3)
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
      </section>
    </>
  );
};
export default TopAuthors;
