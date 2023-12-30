import BlogPost from "@/components/cards/BlogPost";
import ProfileDetails from "@/components/sections/ProfileDetails";
import UserPosts from "@/components/sections/UserPosts";
import { Avatar, Button, Link } from "@nextui-org/react";

const page = () => {
  return (
    <div className="my-10">
      <ProfileDetails />

      <UserPosts />
    </div>
  );
};

export default page;
