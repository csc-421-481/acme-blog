import Image from "next/image";
import {
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
                className=" object-cover transform hover:scale-110 transition duration-100"
                fill
                // width={800}
                // height={800}
              />
            </Link>
          </div>
          <div className=" p-4 sm:p-6">
            <CardHeader className="mt-0.5 text-foreground-500 flex flex-col items-start">
              <Link
                href={`/posts/${post?.id}`}
                color="foreground"
                className="text-lg font-bold"
              >
                <h3>{post?.title}</h3>
              </Link>
            </CardHeader>
            <CardBody className="mt-2 line-clamp-3 text-sm/relaxed min-h-[150px]">
              {post.content.slice(0, 200)}....
            </CardBody>

            <div className="px-3 flex justify-between">
              <div className="flex gap-3  items-center text-foreground-600 ">
                <p className="text-xs font-light">
                  {post.user.firstName} {post.user.lastName}
                </p>
                <Divider className="w-2.5" />
                <time dateTime="2022-10-10" className="text-xs text-start">
                  {" "}
                  10th Oct 2022{" "}
                </time>
              </div>
              <Chip
                variant="flat"
                color={post.category.color}
                size="sm"
                className="capitalize"
              >
                {post.category.name}
              </Chip>
            </div>
          </div>
        </Card>
      </>
    )
  );
};
export default BlogPost;
