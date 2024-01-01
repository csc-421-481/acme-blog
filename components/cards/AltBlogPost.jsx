import Image from "next/image";
import moment from "moment";
import {
  Card,
  Button,
  Avatar,
  CardHeader,
  CardBody,
  Chip,
  Link,
  Divider,
} from "@nextui-org/react";

const AltBlogPost = ({ post }) => {
  return (
    post && (
      <>
        <Card className="flex flex-col sm:flex-row transition hover:shadow-xl flex-1 h-auto">
          <Link
            href={`/archive/${post.id}`}
            className="sm:w-1/2 md:w-2/5 overflow-hidden p-0 group rounded-none h-[150px]"
          >
            <Image
              src={
                post.coverImage ??
                "https://res.cloudinary.com/djgtp2qti/image/upload/v1/csc-421-blog/posts/cover-images/WhatsApp_Image_2023-10-24_at_12.26.08_869c2cc5_po8g5e"
              }
              alt="article image"
              width={200}
              height={200}
              className="object-cover w-full h-full transition-transform group/hover:scale-110 "
            />
          </Link>

          <CardBody className="flex flex-col gap-1 sm:w-1/2 md:w-3/5 px-4">
            <Chip color={post.category.color} variant="flat" size="sm">
              {post.category.name}
            </Chip>
            <CardHeader className="px-0">
              <Link href={`/archive/${post.id}`} className="text-foreground">
                <h3 className="font-bold uppercase text-md">{post.title}</h3>
              </Link>
            </CardHeader>
            <Link
              href={`/authors/${post.user.id}`}
              className="flex gap-3 items-center text-foreground-900 text-xs"
            >
              <Avatar src={post.user.profileImage} className="w-5 h-5" />
              <p className="">
                {post.user.firstName} {post.user.lastName}
              </p>
              <Divider orientation="vertical" className="h-4" />
              <time dateTime="2022-10-10" className="text-start">
                {" "}
                {moment(post.createdAt).format("DD MMMM, YYYY")}{" "}
              </time>
            </Link>
          </CardBody>
        </Card>
      </>
    )
  );
};
export default AltBlogPost;
