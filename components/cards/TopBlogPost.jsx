import Image from "next/image";
import { Button } from "@nextui-org/button";
import {
  Card,
  CardHeader,
  CardBody,
  Chip,
  Link,
  Divider,
} from "@nextui-org/react";

const TopBlogPost = () => {
  return (
    <>
      <Card className="flex flex-row transition hover:shadow-xl ">
        <div
          href="#"
          className="w-1/2 md:w-2/5 overflow-hidden p-0 group rounded-none"
        >
          <Image
            src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="article image"
            width={400}
            height={400}
            className="object-cover w-full h-full transition-transform group/hover:scale-110"
          />
        </div>

        <CardBody className="flex flex-col gap-1 w-1/2  lg:w-3/5 px-4">
          <Chip color="secondary" variant="flat">
            Health
          </Chip>
          <CardHeader className="px-0">
            <h3 className="font-bold uppercase text-md">
              Finding the right guitar for your style - 5 tips
            </h3>
          </CardHeader>
          <div className="flex gap-2 md:gap-6">
            <p className="text-xs font-light text-foreground-900 ">
              Joshua Drue
            </p>
            <Divider orientation="vertical" />
            <time dateTime="2022-10-10" className="text-xs text-start">
              {" "}
              10th Oct 2022{" "}
            </time>
          </div>
        </CardBody>
      </Card>
    </>
  );
};
export default TopBlogPost;
