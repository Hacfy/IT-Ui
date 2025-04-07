"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/navbar";


export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/login") {
    return <>{children}</>;
  }

  if (pathname === "/forgotpassword") {
    return <>{children}</>;
  }

  if (pathname === "/forgotpassword/otp") {
    return <>{children}</>;
  }

  if (pathname === "/forgotpassword/newpassword") {
    return <>{children}</>;
  }
  
    return (
      <Navbar>{children}</Navbar>
    )
}
