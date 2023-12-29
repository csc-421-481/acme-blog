"use client";
import useGetBlogPosts from "@/features/hooks/swr-requests/useGetBlogPosts";
import AltBlogPost from "../cards/AltBlogPost";

const TopBlogPosts = () => {
  const { posts } = useGetBlogPosts();
  return (
    <>
      <section className="my-8">
        <div className="flex flex-col md:flex-row gap-6">
          {posts &&
            posts
              .slice(0, 2)
              .map((each, index) => <AltBlogPost post={each} key={index} />)}
        </div>
      </section>
    </>
  );
};
export default TopBlogPosts;
