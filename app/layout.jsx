import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/scaffold/Header";
import Footer from "@/scaffold/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog",
  description: "CSC 421 Blog created by group 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} 2xl:container mx-auto`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
