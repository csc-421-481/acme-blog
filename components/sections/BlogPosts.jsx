"use client";
import { Button, Chip } from "@nextui-org/react";
import useGetCategories from "@/features/hooks/swr-requests/useGetCategories";
import BlogPost from "../cards/BlogPost";
import useGetBlogPosts from "@/features/hooks/swr-requests/useGetBlogPosts";
import BlogPostSkeleton from "../skeletons/BlogPostSkeleton";
import { XCircle } from "react-feather";

const BlogPosts = () => {
  const { categories } = useGetCategories();
  const { posts } = useGetBlogPosts();
  return (
    <>
      <section className="my-8">
        <div className="my-14">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Browse By Category</h2>
            <p>Select a category to see more related content</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center  mx-auto my-8">
            <Button
              color="default"
              // size="sm"
              variant="solid"
              className={`rounded-full `}
            >
              All
            </Button>
            {categories?.map((each, index) => (
              <Button
                color={each.color}
                key={index}
                // size="sm"
                variant="bordered"
                className={`rounded-full `}
              >
                {each.name}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts ? (
            posts.length > 0 ? (
              posts.map((post, index) => <BlogPost key={index} post={post} />)
            ) : (
              <div className="flex flex-col gap-3 items-center col-span-3 text-danger">
                <XCircle size={100} />
                <p>No Blog posts available.</p>
              </div>
            )
          ) : (
            Array(6)
              .fill(true)
              .map((each, index) => <BlogPostSkeleton key={index} />)
          )}
        </div>

        {posts.length > 0 && (
          <div className="text-center my-6 w-full">
            <Button variant="solid" color="primary" size="lg">
              Read More
            </Button>
          </div>
        )}
      </section>
    </>
  );
};
export default BlogPosts;
