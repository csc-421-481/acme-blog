"use client";
import { createAccount } from "@/app/api/requests/users";
import InputField from "@/components/elements/form/InputField";
import useHandleImageDraft from "@/features/hooks/useHandleImageDraft";
import { Avatar, Button, Link, Switch } from "@nextui-org/react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CreateAccountForm = () => {
  const [profileImagePreviewUrl, setprofileImagePreviewUrl] = useState("");
  const [keepLoading, setKeepLoading] = useState(false);
  const handleImageDraft = useHandleImageDraft();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const router = useRouter();

  const submitData = async (formData) => {
    const { confirmPassword, profileImage, ...desiredData } = formData;
    try {
      const { data } = await createAccount({
        ...desiredData,
        profileImage: profileImage[0],
      });
      console.log(data);
      Cookies.set("token", data.token, { expires: 30 });
      Cookies.set("userId", data.id, { expires: 30 });

      setKeepLoading(true);
      router.push("/profile");
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

  // useEffect(() => {
  //   const subscribe = watch((value) => {
  //     console.log(value);
  //   });
  //   return () => {
  //     subscribe.unsubscribe();
  //   };
  // }, []);

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
              <input
                className="hidden"
                id="profileImage"
                type="file"
                {...register("profileImage", {
                  onChange: (e) =>
                    handleImageDraft(e.target.files, setprofileImagePreviewUrl),
                })}
                accept=".png, .svg, .jpg"
              />
              <Avatar src={profileImagePreviewUrl} className="w-20 h-20" />
            </label>
            <span className="text-foreground-500">Profile Image</span>
          </div>
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
            type="password"
            label="Password"
            isRequired
            placeholder="******"
            {...register("password", { required: "Password is required" })}
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message}
          />
          <InputField
            type="password"
            label="Confirm Password"
            isRequired
            placeholder="******"
            {...register("confirmPassword", {
              required: "Please confirm password",
              validate: (value) =>
                value == getValues("password") || "Passwords don't match",
            })}
            isInvalid={!!errors.confirmPassword}
            errorMessage={errors.confirmPassword?.message}
          />
          <InputField
            type="textarea"
            label="Bio"
            {...register("bio")}
            placeholder="Describe who you are"
            className="col-span-2"
          />
          <div className="col-span-2">
            <Switch
              {...register("isTeamMember")}
              className="text-xs text-300"
              value={watch("isTeamMember")}
              size="sm"
              onValueChange={(value) => {
                console.log(value);
                setValue("isTeamMember", value);
              }}
            >
              Are you a team member?
            </Switch>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Already have an account?
            <Link className="ml-2" href="/login">
              Login
            </Link>
          </p>
          <Button
            type="submit"
            isLoading={isSubmitting || keepLoading}
            color="primary"
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};
export default CreateAccountForm;
