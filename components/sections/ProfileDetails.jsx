"use client";
import { Avatar, Button, Link } from "@nextui-org/react";
import EditProfileForm, {
  EditProfileImage,
} from "../forms/profile/EditProfileForm";
import useGetUser from "@/features/hooks/swr-requests/useGetUser";
import { useState } from "react";
import Cookies from "js-cookie";
import { Edit } from "react-feather";
import { FilePlus } from "react-feather";

const ProfileDetails = () => {
  const { userData, userError } = useGetUser(Cookies.get("userId"));
  const [editProfile, setEditProfile] = useState(false);
  const [editProfileImage, setEditProfileImage] = useState(false);
  return (
    <>
      {editProfile ? (
        <EditProfileForm handleClose={() => setEditProfile(false)} />
      ) : (
        <>
          <div className="flex flex-col items-center mb-4">
            {editProfileImage ? (
              <EditProfileImage
                handleClose={() => setEditProfileImage(false)}
              />
            ) : (
              <>
                <div className="w-32 h-32 items-center flex justify-center rounded-full border relative">
                  {" "}
                  <Avatar src={userData?.profileImage} className="w-24 h-24" />
                  <button
                    className="absolute -bottom-1 right-0 rounded-full p-2 bg-default"
                    onClick={() => setEditProfileImage(true)}
                  >
                    <Edit size={16} />
                  </button>
                </div>
              </>
            )}
            <h1 className="text-2xl font-bold my-2">
              {userData?.firstName} {userData?.lastName}
            </h1>
            <p className="text-sm text-center mt-2 md:4/5 lg:w-3/5">
              {userData?.bio}
            </p>
          </div>
        </>
      )}
      <div className="flex sm:justify-end my-6 gap-4">
        <Button
          color={!editProfile ? "default" : "danger"}
          endContent={!editProfile && <Edit size={16} />}
          onClick={() => setEditProfile(!editProfile)}
        >
          {!editProfile ? "Edit Profile" : "Cancel"}
        </Button>
        <Button
          color="primary"
          as={Link}
          href="/profile/create-post"
          endContent={<FilePlus size={16} />}
        >
          Create Blog Post
        </Button>
      </div>
    </>
  );
};
export default ProfileDetails;
