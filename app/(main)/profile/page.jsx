import BlogPost from "@/components/cards/BlogPost";
import ProfileDetails from "@/components/sections/ProfileDetails";
import { Avatar, Button, Link } from "@nextui-org/react";

const page = () => {
  return (
    <div className="my-10">
      <ProfileDetails />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(6)
          .fill(true)
          .map((each, index) => (
            <BlogPost key={index} />
          ))}
      </div>
    </div>
  );
};

export default page;
