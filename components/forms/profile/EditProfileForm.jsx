"use client";
import {
  createAccount,
  updateProfile,
  updateProfileImage,
} from "@/app/api/requests/users";
import InputField from "@/components/elements/form/InputField";
import useHandleImageDraft from "@/features/hooks/useHandleImageDraft";
import { Avatar, Button, Link, Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import useGetUser from "@/features/hooks/swr-requests/useGetUser";
import { Trash } from "react-feather";
import { Camera } from "react-feather";

const EditProfileForm = ({ handleClose }) => {
  const { userData, userError, mutateUser } = useGetUser(Cookies.get("userId"));

  const defaultValues = {
    firstName: userData?.firstName,
    lastName: userData?.lastName,
    bio: userData?.bio,
    email: userData?.email,
    isTeamMember: userData?.isTeamMember,
    matricNumber: userData?.matricNumber,
  };
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues });

  useEffect(() => {
    reset({ ...defaultValues });
  }, [userData, reset]);

  // useEffect(() => {
  //   const subscribe = watch((value) => {
  //     console.log(value);
  //   });
  //   return () => {
  //     subscribe.unsubscribe();
  //   };
  // }, [watch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const submitData = async (formData) => {
    const { ...desiredData } = formData;
    try {
      const { data } = await updateProfile(userData.id, {
        ...desiredData,
      });
      toast.success("Profile updated successfully");
      handleClose();
      mutateUser();
    } catch (error) {
      console.error(error);
      const errorResponse = error?.response?.data;
      if (errorResponse) {
        let message = "";
        for (const key in errorResponse) {
          message += Array.isArray(errorResponse[key])
            ? errorResponse[key][0] + "\n"
            : errorResponse[key] + "\n";
        }
        toast.error(message);
      } else {
        toast.error("Something went wrong. Please try again later");
      }
    }
  };
  return (
    <>
      <form
        className="mx-auto max-w-md space-y-6 my-8"
        onSubmit={handleSubmit(submitData)}
        noValidate
      >
        <div className="flex flex-col sm:grid grid-cols-2 gap-6">
          <InputField
            type="text"
            isRequired
            label="First Name"
            placeholder="Joshua"
            {...register("firstName", {
              required: "First name is required",
            })}
            isInvalid={!!errors.firstName}
            errorMessage={errors.firstName?.message}
            value={watch("firstName")}
            onValueChange={(value) => {
              setValue(
                "firstName",
                value.charAt(0).toUpperCase() + value.slice(1)
              );
            }}
          />
          <InputField
            type="text"
            label="Last Name"
            isRequired
            placeholder="Ajorgbor"
            {...register("lastName", { required: "Last name is required" })}
            isInvalid={!!errors.lastName}
            errorMessage={errors.lastName?.message}
            value={watch("lastName")}
            onValueChange={(value) => {
              setValue(
                "lastName",
                value.charAt(0).toUpperCase() + value.slice(1)
              );
            }}
          />
          <InputField
            type="email"
            label="Email Address"
            isRequired
            placeholder="joshuaajorgbor@example.com"
            className="col-span-2"
            {...register("email", { required: "Email address is required" })}
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
            value={watch("email")}
            onValueChange={(value) => {
              setValue("email", value.toLowerCase());
            }}
          />
          <InputField
            type="text"
            label="Matric Number"
            isRequired
            placeholder="VUG/CSC/20/4000"
            className="col-span-2 uppercase"
            {...register("matricNumber", {
              onChange: (e) => {
                setValue("matricNumber", e.target.value.toUpperCase());
              },
              required: "Matric number is required",
              validate: (value) =>
                value.length <= 20 ||
                "Matric number can not be more than 20 characters long",
            })}
            isInvalid={!!errors.matricNumber}
            errorMessage={errors.matricNumber?.message}
            value={watch("matricNumber")}
            onValueChange={(value) => {
              setValue(
                "matricNumber",
                value.charAt(0).toUpperCase() + value.slice(1)
              );
            }}
          />

          <InputField
            type="textarea"
            label="Bio"
            defaultValue={userData?.bio}
            {...register("bio")}
            placeholder="Describe who you are"
            className="col-span-2"
          />
          <div className="col-span-2">
            <Switch
              {...register("isTeamMember")}
              className="text-xs text-300"
              defaultSelected={userData?.isTeamMember}
              value={watch("isTeamMember")}
              onValueChange={(value) => {
                console.log(value);
                setValue("isTeamMember", value);
              }}
            >
              Are you a team member?
            </Switch>
          </div>
        </div>

        <div className="flex justify-center">
          <Button type="submit" isLoading={isSubmitting} color="primary">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};
export default EditProfileForm;

export const EditProfileImage = ({ handleClose }) => {
  const { userData, userError, mutateUser } = useGetUser(Cookies.get("userId"));
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    // defaultValues: {
    //   profileImage: null,
    // },
  });

  const [profileImagePreviewUrl, setprofileImagePreviewUrl] = useState(
    userData?.profileImage || ""
  );

  const handleImageDraft = useHandleImageDraft();

  const submitData = async (formData) => {
    try {
      const { data } = await updateProfileImage(userData.id, {
        profileImage: formData.profileImage[0],
      });
      toast.success("Profile Image updated successfully");
      handleClose();
      mutateUser();
    } catch (error) {
      console.error(error);
      const errorResponse = error?.response?.data;
      if (errorResponse) {
        let message = "";
        for (const key in errorResponse) {
          message += Array.isArray(errorResponse[key])
            ? errorResponse[key][0] + "\n"
            : errorResponse[key] + "\n";
        }
        toast.error(message);
      } else {
        toast.error("Something went wrong. Please try again later");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(submitData)} className="mb-6">
      <div className="col-span-2 flex flex-col items-center gap-3">
        <label htmlFor="profileImage" className="cursor-pointer">
          <input
            className="hidden"
            id="profileImage"
            type="file"
            {...register("profileImage", {
              onChange: (e) => {
                handleImageDraft(e.target.files, setprofileImagePreviewUrl);
              },
            })}
            accept=".png, .svg, .jpg"
          />
          <Avatar src={profileImagePreviewUrl} className="w-20 h-20" />
        </label>
        <p className="text-sm text-foreground-500">
          Change your profile image.
        </p>
        <div className="flex gap-6">
          <Button size="sm" color="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            size="sm"
            color="primary"
            type="submit"
            isLoading={isSubmitting}
            // disabled={getValues("profileImage") == null}
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};
