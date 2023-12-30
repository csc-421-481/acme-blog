import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, Link } from "@nextui-org/react";
import BlogPosts from "@/components/sections/BlogPosts";
import TopBlogPosts from "@/components/sections/TopBlogPosts";
import TopAuthors from "@/components/sections/TopAuthors";
import { getCategories } from "../api/requests/posts";

export default function Home() {
  return (
    <>
      {/* Start Hero Section */}
      <Card className="overflow-hidden  sm:grid sm:grid-cols-2 bg-background">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-foreground sm:text-foreground ltr:sm:text-foreground rtl:sm:text-foreground">
            <h2 className="text-2xl font-bold  text-foreground md:text-3xl">
              Welcome to Acme Blog.
            </h2>
            <p className="text-foreground md:mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed.
            </p>
            <div className="mt-4 md:mt-8">
              <Button
                href="/create-account"
                as={Link}
                variant="shadow"
                color="primary"
                size="lg"
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
        <Image
          alt="Student"
          src="/hero-image.jpg"
          height={4000}
          width={3000}
          className="h-56 w-full object-cover sm:h-full"
        />
      </Card>
      {/* End Hero Section */}

      {/* Start Top Blog Posts section */}
      <TopBlogPosts />
      {/* End Top Blog Posts section */}

      {/* Start Blog Posts section */}
      <BlogPosts />
      {/* End Blog Posts section */}

      {/* Start Top Authors section */}
      <TopAuthors />
      {/* End Top Authors section */}
    </>
  );
}
