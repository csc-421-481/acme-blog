"use client";

import useGetProfilePosts from "@/features/hooks/swr-requests/useGetProfilePosts";
import Cookies from "js-cookie";
import BlogPost from "../cards/BlogPost";
import BlogPostSkeleton from "../skeletons/BlogPostSkeleton";
import { XCircle } from "react-feather";

const UserPosts = () => {
  const { profilePosts, profilePostsLoading } = useGetProfilePosts(
    Cookies.get("userId")
  );

  return (
    <>
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
    </>
  );
};
export default UserPosts;
