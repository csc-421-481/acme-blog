"use client";
import useGetBlogPosts from "@/features/hooks/swr-requests/useGetBlogPosts";
import AltBlogPost from "../cards/AltBlogPost";

const TopBlogPosts = () => {
  const { posts } = useGetBlogPosts();
  return (
    posts?.length >= 2 && (
      <>
        <section className="my-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {posts &&
              posts
                .slice(0, 2)
                .map((each, index) => <AltBlogPost post={each} key={index} />)}
          </div>
        </section>
      </>
    )
  );
};
export default TopBlogPosts;
