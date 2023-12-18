"use client";
import InputField from "@/components/elements/form/InputFIeld";
import { Input, Link } from "@nextui-org/react";

const LoginForm = () => {
  return (
    <>
      <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div className="relative">
          <InputField
            type="email"
            label="Email Address"
            placeholder="ikoojo@example.com"
          />
        </div>

        <div>
          <InputField type="password" label="Password" placeholder="******" />
        </div>
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
