import LoginForm from "@/components/forms/auth/LoginForm";

const LoginPage = () => {
  return (
    <>
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-2xl">Login To Acme Blog</h1>
        <p className="mt-4 text-gray-500">
          We&rsquo;re glad you&rsquo;r here 🤗
        </p>
      </div>
      <LoginForm />
    </>
  );
};
export default LoginPage;
