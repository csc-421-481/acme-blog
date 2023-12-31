import { Inter, Train_One } from "next/font/google";
import "../public/styles/globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
const trainOne = Train_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-logo",
  weight: "400",
});

export const metadata = {
  title: "Blog",
  description: "CSC 421 Blog created by group 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${trainOne.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
