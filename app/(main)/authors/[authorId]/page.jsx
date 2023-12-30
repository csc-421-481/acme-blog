import AuthorProfile from "@/components/sections/AuthorProfile";

const page = ({ params }) => {
  const { authorId } = params;

  return <AuthorProfile authorId={authorId} />;
};

export default page;
