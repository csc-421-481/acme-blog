"use client";
import { login } from "@/app/api/requests/users";
import { useState } from "react";
import Cookies from "js-cookie";
import InputField from "@/components/elements/form/InputField";
import { Button, Input, Link } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [keepLoading, setKeepLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const router = useRouter();
  const submitData = async (formData) => {
    try {
      const { data } = await login(formData);
      console.log(data);
      Cookies.set("token", data.token);
      Cookies.set("userId", data.user);
      router.push("/profile");
      // setKeepLoading(true);
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
        action="#"
        className="mx-auto mb-0 mt-8 max-w-md space-y-6"
        noValidate
        onSubmit={handleSubmit(submitData)}
      >
        <InputField
          type="email"
          label="Email Address"
          isRequired
          placeholder="ikoojo@example.com"
          {...register("email", { required: "Email Address is required" })}
          isInvalid={!!errors.email}
          errorMessage={!!errors.email?.message}
        />

        <InputField
          isRequired
          type="password"
          label="Password"
          placeholder="******"
          {...register("password", { required: "Password is required" })}
          isInvalid={!!errors.password}
          errorMessage={!!errors.password?.message}
        />
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            No account?
            <Link className="ml-2" href="/create-account">
              Create Account
            </Link>
          </p>
          <Button
            color="primary"
            isLoading={isSubmitting || keepLoading}
            type="submit"
          >
            Login
          </Button>
        </div>
      </form>
    </>
  );
};
export default LoginForm;
