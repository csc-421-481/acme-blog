import Image from "next/image";
import moment from "moment";
import {
  Avatar,
  Card,
  CardHeader,
  CardBody,
  Link,
  Divider,
  Chip,
} from "@nextui-org/react";

const BlogPost = ({ post }) => {
  return (
    post && (
      <>
        <Card className="rounded-lg shadow transition hover:shadow-lg">
          <div className="overflow-hidden w-full h-56">
            <Link href={`/posts/${post.id}`} className="w-full h-full relative">
              <Image
                alt="cover image"
                src={
                  post.coverImage ??
                  "https://res.cloudinary.com/djgtp2qti/image/upload/v1/csc-421-blog/posts/cover-images/WhatsApp_Image_2023-10-24_at_12.26.08_869c2cc5_po8g5e"
                }
                className=" object-cover transform hover:scale-110 transition duration-100 w-full h-full"
                width={300}
                height={200}
              />
            </Link>
          </div>
          <div className="p-4">
            <CardHeader className="mt-0.5 text-foreground-500 flex flex-col items-start">
              <Link
                href={`/posts/${post?.id}`}
                color="foreground"
                className="text-lg font-bold"
              >
                <h3>{post?.title}</h3>
              </Link>
            </CardHeader>
            <CardBody
              className="mt-2 line-clamp-3 text-sm/relaxed min-h-[150px]"
              dangerouslySetInnerHTML={{
                __html: post.content.slice(0, 200) + "....",
              }}
            />

            <div className="px-3 gap-1 sm:gap-2 md:gap-3 flex justify-between flex-wrap md:flex-no-wrap">
              <Link
                href={`/authors/${post.user.id}`}
                className="flex gap-1 sm:gap-2 md:gap-3 items-center text-foreground-600 items-center "
              >
                <Avatar
                  src={post.user.profileImage}
                  size={"sm"}
                  className="w-5 h-5"
                />
                <p className="text-xs font-light">
                  {post.user.firstName} {post.user.lastName}
                </p>
                <Divider className="h-5" orientation="vertical" />
                <time dateTime="2022-10-10" className="text-xs text-start">
                  {" "}
                  {moment(post.createdAt).format("DD MMMM, YYYY")}{" "}
                </time>
              </Link>
            </div>
          </div>
          <div className="flex justify-end px-4 pb-4">
            <Chip
              variant="flat"
              color={post.category.color}
              size="sm"
              className="capitalize"
            >
              {post.category.name}
            </Chip>
          </div>
        </Card>
      </>
    )
  );
};
export default BlogPost;
