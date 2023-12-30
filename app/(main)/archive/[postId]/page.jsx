import BlogPostDetails from "@/components/sections/BlogPostDetails";

const page = ({ params }) => {
  const { postId } = params;
  return <BlogPostDetails postId={postId} />;
};

export default page;
