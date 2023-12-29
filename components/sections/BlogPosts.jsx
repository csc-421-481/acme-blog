"use client";
import { Link, Button, Chip } from "@nextui-org/react";
import useGetCategories from "@/features/hooks/swr-requests/useGetCategories";
import BlogPost from "../cards/BlogPost";
import useGetBlogPosts from "@/features/hooks/swr-requests/useGetBlogPosts";
import BlogPostSkeleton from "../skeletons/BlogPostSkeleton";
import { XCircle } from "react-feather";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const BlogPosts = () => {
  const { categories } = useGetCategories();
  const { posts } = useGetBlogPosts();
  const pathname = usePathname();
  const allPosts = pathname == "/" ? posts?.slice(0, 6) : posts;
  const [currentCategory, setCurrentCategory] = useState(0);
  const [filteredPosts, setFilteredPosts] = useState(allPosts ?? null);
  useEffect(() => {
    setFilteredPosts(allPosts);
  }, [posts]);
  const handleFiltering = (categoryId) => {
    setCurrentCategory(categoryId);
    setFilteredPosts(allPosts.filter((each) => each.category.id == categoryId));
  };

  return (
    <>
      <section className="my-8">
        <div className="my-14">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Browse By Category</h2>
            <p>Filter posts by category</p>
          </div>
          {categories && (
            <div className="flex flex-wrap gap-4 justify-center  mx-auto my-8">
              <Button
                color="default"
                // size="sm"
                variant={currentCategory == 0 ? "shadow" : "ghost"}
                className={`rounded-full `}
                onClick={() => {
                  setCurrentCategory(0);
                  setFilteredPosts(allPosts);
                }}
              >
                All ({allPosts?.length})
              </Button>
              {categories?.map((each, index) => (
                <Button
                  color={each.color}
                  key={index}
                  // size="sm"
                  variant={currentCategory == each.id ? "shadow" : "ghost"}
                  className={`rounded-full `}
                  onClick={() => handleFiltering(each.id)}
                >
                  {each.name} (
                  {allPosts?.filter((post) => post.category.id == each.id)
                    ?.length || 0}
                  )
                </Button>
              ))}
            </div>
          )}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts ? (
            filteredPosts?.length > 0 ? (
              filteredPosts.map((post, index) => (
                <BlogPost key={index} post={post} />
              ))
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

        {posts && filteredPosts?.length > 0 && pathname == "/" && (
          <div className="text-center my-6 w-full">
            <Button
              variant="solid"
              color="primary"
              size="lg"
              as={Link}
              href="/archive"
            >
              View All Posts
            </Button>
          </div>
        )}
      </section>
    </>
  );
};
export default BlogPosts;
