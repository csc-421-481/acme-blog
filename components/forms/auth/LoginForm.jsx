"use client";
import InputField from "@/components/elements/form/InputField";
import { Input, Link } from "@nextui-org/react";

const LoginForm = () => {
  return (
    <>
      <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-6">
        <InputField
          type="email"
          label="Email Address"
          placeholder="ikoojo@example.com"
        />

        <InputField type="password" label="Password" placeholder="******" />
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            No account?
            <Link className="ml-2" href="/create-account">
              Create Account
            </Link>
          </p>
          <button
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
};
export default LoginForm;
