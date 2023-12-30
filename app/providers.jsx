"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Providers({ children }) {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const themeHandler = (value) => {
    if (value) {
      document.documentElement.className = "dark";
      localStorage.setItem("theme", "dark");
      setCurrentTheme("dark");
    } else {
      document.documentElement.className = "light";
      localStorage.setItem("theme", "light");
      setCurrentTheme("light");
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
      <ToastContainer theme={currentTheme} />
      <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
    </>
  );
}
