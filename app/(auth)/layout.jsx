import Image from "next/image";
import { Providers } from "../providers";

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
          {children}
        </section>
      </main>
    </>
  );
};
export default Layout;
