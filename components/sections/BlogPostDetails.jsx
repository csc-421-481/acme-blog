"use client";
import useGetPost from "@/features/hooks/swr-requests/useGetPost";
import { Avatar, Card, CardBody, Chip, Link, Spinner } from "@nextui-org/react";
import moment from "moment";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useEffect } from "react";
import "../../public/styles/BlogPostContent.css";
import CommentSection from "./CommentSection";

const BlogPostDetails = ({ postId }) => {
  const { post, postLoading, postError } = useGetPost(postId);
  useEffect(() => {
    if (!post && !postLoading) {
      notFound();
    }
  }, [postLoading, post]);
  return postLoading ? (
    <div className="w-full h-screen grid place-items-center">
      <Spinner
        label="Please wait..."
        color="primary"
        labelColor="default"
        size="lg"
      />
    </div>
  ) : (
    <>
      <div className="flex flex-col items-center my-6">
        <div className="flex flex-col items-center justify-center">
          <Chip variant="flat" size="sm" color={post?.category?.color}>
            {post?.category?.name}
          </Chip>
          <p className="text-5xl font-bold mt-2 text-center">{post?.title}</p>

          <div className=" rounded-lg mb-5">
            <div className=" height-auto p-5">
              <div className="flex justify-center items-center gap-4">
                <Link href={`/authors/${post?.user?.id}`}>
                  <Avatar src={post?.user.profileImage || ""} />
                </Link>
                <div className="text-foreground-500">
                  <Link
                    href={`/authors/${post?.user?.id}`}
                    className="text-custom-xl text-dark mb-1"
                  >
                    {post?.user.firstName} {post?.user.lastName}
                  </Link>
                  <p className="text-sm">
                    {moment(post?.createdAt).format("DD MMMM, YYYY")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[300px] md:h-[500px] lg:w-4/5 ">
          <Image
            className="w-full h-full object-cover rounded-xl"
            src={
              post?.coverImage ||
              "https://res.cloudinary.com/djgtp2qti/image/upload/v1/csc-421-blog/posts/cover-images/WhatsApp_Image_2023-10-24_at_12.26.08_869c2cc5_po8g5e"
            }
            alt="coverImage"
            width={500}
            height={500}
          />
        </div>
        <div
          className={`md:4/5 lg:w-3/5 my-6 blog-post-content`}
          dangerouslySetInnerHTML={{
            __html: post?.content,
          }}
        />

        {/* <Link href="/archive" className="block my-8">
          View all posts
        </Link> */}

        <Card className="w-full lg:w-3/5 mt-12">
          <CardBody className="md:flex-row gap-6">
            <Link href={`/authors/${post?.user?.id}`}>
              <Avatar src={post?.user?.profileImage} className="w-24 h-24" />
            </Link>
            <div className="space-y-4">
              <div className="space-3">
                <h3 className=" text-custom-xl text-dark">
                  Published By{" "}
                  <Link
                    href={`/authors/${post?.user?.id}`}
                    className="font-semibold"
                  >
                    {post?.user?.firstName} {post?.user?.lastName}
                  </Link>
                </h3>

                <p className="text-foreground-500 text-sm">
                  {post?.user?.matricNumber}
                </p>
              </div>
              <p className="text-sm">{post?.user?.bio || "No bio available"}</p>

              <Link href={`/authors/${post?.user?.id}`}>View Profile</Link>
            </div>
          </CardBody>
        </Card>
        <CommentSection postId={postId} />
      </div>
    </>
  );
};
export default BlogPostDetails;
