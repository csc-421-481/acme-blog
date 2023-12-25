"use client";
import { createAccount } from "@/app/api/requests/users";
import InputField from "@/components/elements/form/InputField";
import useHandleImageDraft from "@/features/hooks/useHandleImageDraft";
import { Avatar, Button, Link } from "@nextui-org/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CreateAccountForm = () => {
  const [profileImagePreviewUrl, setprofileImagePreviewUrl] = useState("");
  const handleImageDraft = useHandleImageDraft();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { profileImage: [null] } });

  const submitData = async (formData) => {
    const { confirmPassword, profileImage, ...desiredData } = formData;
    try {
      const res = await createAccount({
        ...desiredData,
        profileImage: profileImage[0],
      });
      console.log(res);
    } catch (error) {
      console.error(error);
      if (error.response.data) {
        let keys = Object.keys(error.response.data);
        let message = error.response.data[keys[0]];
        console.log(Object.keys(error.response.data));
        toast.error(message[0]);
      }
    }
  };
  return (
    <>
      <form
        className="mx-auto mb-0 mt-8 max-w-md space-y-6"
        onSubmit={handleSubmit(submitData)}
        noValidate
      >
        <div className="flex flex-col sm:grid grid-cols-2 gap-6">
          <div className="col-span-2 flex flex-col items-center gap-3">
            <label htmlFor="profileImage" className="cursor-pointer">
              <InputField
                className="hidden"
                id="profileImage"
                type="file"
                {...register("profileImage", {
                  onChange: (e) => {
                    handleImageDraft(e.target.files, setprofileImagePreviewUrl),
                      console.log(e.target.files);
                    e.target.files = e.target.files;
                    // setValue("profileImage", e.target.files);
                  },
                })}
                // onChange={(e) =>
                //   handleImageDraft(e.target.files, setprofileImagePreviewUrl)
                // }
                accept=".png, .svg, .jpg"
              />
              <Avatar src={profileImagePreviewUrl} className="w-20 h-20" />
            </label>
            <span className="text-foreground-500">Profile Image</span>
          </div>
          <InputField
            type="text"
            label="First Name"
            placeholder="Joshua"
            {...register("firstName", { required: "First name is required" })}
            isInvalid={!!errors.firstName}
            errorMessage={errors.firstName?.message}
          />
          <InputField
            type="text"
            label="Last Name"
            placeholder="Ajorgbor"
            {...register("lastName", { required: "Last name is required" })}
            isInvalid={!!errors.lastName}
            errorMessage={errors.lastName?.message}
          />
          <InputField
            type="email"
            label="Email Address"
            placeholder="joshuaajorgbor@example.com"
            className="col-span-2"
            {...register("email", { required: "Email address is required" })}
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
          />
          <InputField
            type="text"
            label="Matric Number"
            placeholder="VUG/CSC/20/4000"
            className="col-span-2"
            {...register("matricNumber", {
              required: "Matric number is required",
              validate: (value) =>
                value.length <= 20 ||
                "Matric number can not be more than 20 characters long",
            })}
            isInvalid={!!errors.matricNumber}
            errorMessage={errors.matricNumber?.message}
          />

          <InputField
            type="password"
            label="Password"
            placeholder="******"
            {...register("password", { required: "Password is required" })}
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message}
          />
          <InputField
            type="password"
            label="Confirm Password"
            placeholder="******"
            {...register("confirmPassword", {
              required: "Please confirm password",
              validate: (value) =>
                value == getValues("password") || "Passwords don't match",
            })}
            isInvalid={!!errors.confirmPassword}
            errorMessage={errors.confirmPassword?.message}
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Already have an account?
            <Link className="ml-2" href="/login">
              Login
            </Link>
          </p>
          <Button type="submit" isLoading={isSubmitting} color="primary">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};
export default CreateAccountForm;
