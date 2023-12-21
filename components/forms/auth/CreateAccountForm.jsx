"use client";
import InputField from "@/components/elements/form/InputField";
import { Link } from "@nextui-org/react";

const CreateAccountForm = () => {
  return (
    <>
      <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-6">
        <div className="flex flex-col sm:grid grid-cols-2 gap-6">
          <InputField type="text" label="First Name" placeholder="Joshua" />
          <InputField type="email" label="Last Name" placeholder="Ajorgbor" />
          <InputField
            type="email"
            label="Email Address"
            placeholder="joshuaajorgbor@example.com"
            className="col-span-2"
          />

          <InputField type="password" label="Password" placeholder="******" />
          <InputField
            type="password"
            label="Confirm Password"
            placeholder="******"
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Already have an account?
            <Link className="ml-2" href="/login">
              Login
            </Link>
          </p>
          <button
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
export default CreateAccountForm;
