import Image from "next/image";
import { Card, CardHeader, CardBody, Link, Divider } from "@nextui-org/react";

const BlogPost = () => {
  return (
    <>
      <Card className="rounded-lg shadow transition hover:shadow-lg">
        <div className="overflow-hidden w-full h-56">
          <Link href="#">
            <Image
              alt="Office"
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="h-full w-full object-cover transform hover:scale-110 transition duration-100"
              width={800}
              height={800}
            />
          </Link>
        </div>
        <div className=" p-4 sm:p-6">
          <CardHeader className="mt-0.5 text-foreground-500 flex flex-col items-start">
            <time dateTime="2022-10-10" className="text-xs text-start">
              {" "}
              10th Oct 2022{" "}
            </time>
            <Link href="#" color="foreground" className="text-lg font-bold">
              <h3>How to position your furniture for positivity</h3>
            </Link>
          </CardHeader>
          <CardBody className="mt-2 line-clamp-3 text-sm/relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta,
          </CardBody>
          <div className="flex gap-2 md:gap-6 text-foreground-800">
            <p className="text-xs font-light text-foreground-900 ">
              Joshua Drue
            </p>
            <Divider orientation="vertical" />
            <time dateTime="2022-10-10" className="text-xs text-start">
              {" "}
              10th Oct 2022{" "}
            </time>
          </div>
        </div>
      </Card>
    </>
  );
};
export default BlogPost;
