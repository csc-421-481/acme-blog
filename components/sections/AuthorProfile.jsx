"use client";
import { getUser } from "@/app/api/requests/users";
import BlogPost from "@/components/cards/BlogPost";
import BlogPostSkeleton from "@/components/skeletons/BlogPostSkeleton";
import useGetProfilePosts from "@/features/hooks/swr-requests/useGetProfilePosts";
import useGetUser from "@/features/hooks/swr-requests/useGetUser";
import { useEffect } from "react";
import { Avatar, Skeleton } from "@nextui-org/react";
import { useSearchParams, notFound } from "next/navigation";
import { XCircle } from "react-feather";
import useSWR from "swr";
import UserPosts from "./UserPosts";

const AuthorProfile = ({ authorId }) => {
  const { userData: authorData, userLoading: authorLoading } =
    useGetUser(authorId);
  useEffect(() => {
    if (!authorLoading && !authorData) {
      // if author data is done loading and there is no author data
      notFound();
    }
  }, [authorData, authorLoading]);
  return (
    <>
      <div className="flex flex-col items-center  my-10">
        <div className="flex w-32 h-32 items-center justify-center rounded-full border">
          {" "}
          <Avatar src={authorData?.profileImage} className="w-24 h-24" />
        </div>
        <h1 className="text-2xl font-bold my-2">
          {!authorData ? (
            <Skeleton className="w-40 h-4 rounded-lg my-2" />
          ) : (
            authorData?.firstName + " " + authorData?.lastName
          )}
        </h1>
        <p className="text-foreground-500">{authorData?.matricNumber}</p>
        <p className="text-foreground-500 text-xs">{authorData?.email}</p>
        {!authorData ? (
          <div className="flex flex-col gap-3 items-center">
            <Skeleton className="w-20 h-2 rounded-lg" />
            <Skeleton className="w-16 h-2 rounded-lg" />
            <Skeleton className="w-9 h-2 rounded-lg" />
          </div>
        ) : (
          <p className="text-sm text-center mt-2 md:4/5 lg:w-3/5">
            {authorData?.bio ? (
              authorData?.bio
            ) : (
              <p className="text-foreground-500">Bio not set</p>
            )}
          </p>
        )}
      </div>
      <UserPosts userId={authorData?.id} />
    </>
  );
};
export default AuthorProfile;
