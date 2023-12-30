import BlogPost from "@/components/cards/BlogPost";
import ProfileDetails from "@/components/sections/ProfileDetails";
import UserPosts from "@/components/sections/UserPosts";
import { Avatar, Button, Link } from "@nextui-org/react";

const page = () => {
  return (
    <div className="my-10">
      <ProfileDetails />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <UserPosts />
      </div>
    </div>
  );
};

export default page;
