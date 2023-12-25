"use client";
import { login } from "@/app/api/requests/users";
import InputField from "@/components/elements/form/InputField";
import { Button, Input, Link } from "@nextui-org/react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const submitData = async (formData) => {
    try {
      const res = await login(formData);
      console.log(res);
    } catch (error) {
      console.error(error);
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
          placeholder="ikoojo@example.com"
          {...register("email", { required: "Email Address is required" })}
          isInvalid={!!errors.email}
          errorMessage={!!errors.email?.message}
        />

        <InputField
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
          <Button color="primary" isLoading={isSubmitting} type="submit">
            Login
          </Button>
        </div>
      </form>
    </>
  );
};
export default LoginForm;
