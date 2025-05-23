"use client";

import { LoginForm } from "@/components/Auth/login/login-form";
import { SelectionModal } from "@/components/Auth/login/selectionModal";
import { useState } from "react";

export default function LoginPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
          <button className="btn" onClick={() => setModalOpen(true)}>
            Open Modal
          </button>
          <SelectionModal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
          />
        </div>
      </div>
      <div className="relative hidden bg-muted lg:flex flex-col text-center justify-center ">
        <img
          src="/login-page-image.jpeg"
          alt="Images"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
