import { Button } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Link, Chip } from "@nextui-org/react";
import BlogPost from "../cards/BlogPost";

const BlogPosts = () => {
  return (
    <>
      <section className="my-8">
        <div className="my-14">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Browse By Category</h2>
            <p>Select a category to see more related content</p>
          </div>
          <div className="flex flex-wrap gap-4 lg:w-4/5 mx-auto my-8">
            <Chip size="lg" color="primary" variant="solid">
              All (6)
            </Chip>
            <Chip size="lg" color="primary" variant="bordered">
              Health (03)
            </Chip>
            <Chip size="lg" color="primary" variant="bordered">
              Lifestyle (01)
            </Chip>
            <Chip size="lg" color="primary" variant="bordered">
              Travel (03)
            </Chip>
            <Chip size="lg" color="primary" variant="bordered">
              Technology (02)
            </Chip>
            <Chip size="lg" color="primary" variant="bordered">
              Food (02)
            </Chip>
            <Chip size="lg" color="primary" variant="bordered">
              Culture (01)
            </Chip>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6)
            .fill(true)
            .map((each, index) => (
              <BlogPost key={index} />
            ))}
        </div>
        <div className="text-center my-6">
          <Button variant="solid" color="primary" size="lg">
            Read More
          </Button>
        </div>
      </section>
    </>
  );
};
export default BlogPosts;
