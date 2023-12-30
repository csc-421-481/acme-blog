"use client";

import useGetProfilePosts from "@/features/hooks/swr-requests/useGetProfilePosts";
import Cookies from "js-cookie";
import BlogPost from "../cards/BlogPost";
import BlogPostSkeleton from "../skeletons/BlogPostSkeleton";
import { XCircle } from "react-feather";

const UserPosts = ({ userId = Cookies.get("userId") }) => {
  const { profilePosts, profilePostsLoading } = useGetProfilePosts(userId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
  );
};
export default UserPosts;
