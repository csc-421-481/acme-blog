import LoginForm from "@/components/forms/auth/LoginForm";

const Page = () => {
  return (
    <>
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-2xl">Login To Acme Blog</h1>
          <p className="mt-4 text-gray-500">
            We&rsquo;re glad you&rsquo;r here 🤗
          </p>
        </div>
        <LoginForm />
      </div>
    </>
  );
};
export default Page;
