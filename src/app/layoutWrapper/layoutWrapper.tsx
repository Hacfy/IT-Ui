"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/navbar";

const excludedPaths = new Set([
  "/login",
  "/forgotpassword",
  "/forgotpassword/otp",
  "/forgotpassword/newpassword",
  "/selectBranch",
  "/createBranch",
]);

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (excludedPaths.has(pathname)) {
    return <>{children}</>;
  }

  return <Navbar>{children}</Navbar>;
}
