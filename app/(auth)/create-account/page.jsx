import CreateAccountForm from "@/components/forms/auth/CreateAccountForm";

const CreateAccountPage = () => {
  return (
    <>
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-2xl">Create Account</h1>
        <p className="mt-4 text-gray-500">
          We&rsquo;re glad you&rsquo;r here 🤗
        </p>
      </div>
      <CreateAccountForm />
    </>
  );
};
export default CreateAccountPage;
