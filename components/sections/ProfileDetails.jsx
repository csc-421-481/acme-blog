"use client";
import { Avatar, Button, Link, Skeleton } from "@nextui-org/react";
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
                  <Button
                    className="absolute -bottom-1 right-0 rounded-full p-1"
                    size="sm"
                    isIconOnly
                    onClick={() => setEditProfileImage(true)}
                  >
                    <Edit size={16} />
                  </Button>
                </div>
              </>
            )}
            <h1 className="text-2xl font-bold my-2">
              {!userData ? (
                <Skeleton className="w-40 h-4 rounded-lg my-2" />
              ) : (
                userData?.firstName + " " + userData?.lastName
              )}
            </h1>
            {!userData ? (
              <div className="flex flex-col gap-3 items-center">
                <Skeleton className="w-20 h-2 rounded-lg" />
                <Skeleton className="w-16 h-2 rounded-lg" />
                <Skeleton className="w-9 h-2 rounded-lg" />
              </div>
            ) : (
              <p className="text-sm text-center mt-2 md:4/5 lg:w-3/5">
                {userData?.bio ? (
                  userData?.bio
                ) : (
                  <p className="text-foreground-500">Bio not set</p>
                )}
              </p>
            )}
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
