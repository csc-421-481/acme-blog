import Header from "@/scaffold/Header";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <>
      <main className="2xl:container mx-auto">
        <section className="relative flex flex-wrap lg:h-screen lg:items-center">
          <div className="hidden md:block relative w-full sm:h-96 lg:h-full lg:w-1/2">
            <Image
              alt="Welcome"
              src="/auth-banner.jpg"
              className="absolute inset-0 h-full w-full object-cover"
              width={2000}
              height={2000}
            />
          </div>
          <div className="w-full lg:w-1/2 h-full">
            <Header />
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16  lg:px-8 lg:py-24">
              {children}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Layout;
