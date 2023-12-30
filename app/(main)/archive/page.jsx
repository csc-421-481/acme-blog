import BlogPosts from "@/components/sections/BlogPosts";

const Page = () => {
  return (
    <>
      <div className="text-center my-10">
        <h1 className="text-3xl font-bold">Acme Blog Archive</h1>
      </div>

      <BlogPosts />
    </>
  );
};
export default Page;
