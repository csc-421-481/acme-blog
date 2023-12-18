import Footer from "@/scaffold/Footer";
import { Providers } from "../providers";
import Header from "@/scaffold/Header";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main className="xl:container w-5/6 lg:w-4/5 mx-auto">{children}</main>
      <Footer />
    </>
  );
}
