"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function Providers({ children }) {
  const themeHandler = (value) => {
    if (value) {
      document.documentElement.className = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.className = "light";
      localStorage.setItem("theme", "light");
    }
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme == "light") {
      themeHandler(false); // set theme to light mode
    } else {
      themeHandler(true); // set theme to dark mode
    }
  }, []);
  const router = useRouter();
  return (
    <>
      <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
    </>
  );
}
