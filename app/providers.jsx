"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export function Providers({ children }) {
  const router = useRouter();
  return (
    <>
      <NextUIProvider navigate={router.push}>
        <main className="w-5/6 lg:w-4/5 mx-auto">{children}</main>
      </NextUIProvider>
    </>
  );
}
