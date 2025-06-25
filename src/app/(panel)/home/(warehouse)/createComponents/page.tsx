"use client";

import { CreateUnitForm } from "@/components/Panel/Component/createUnitForm";
import { ComponentSelectionModal } from "@/components/Panel/Warehouse/selectionModal";
import { useEffect, useState } from "react";

export default function CreateComponentsPage() {
  const [isModalOpen, setModalOpen] = useState(true);
  // const userRole : string | null = useSelector((state: RootState) => state.user.user_type);
  const userRole: string | null = "warehouse_head";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  if (userRole === "department_head") {
    return (
      <div className="flex  w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <CreateUnitForm className="shadow-lg rounded-md border border-gray-300 p-6 mt-28" />
        </div>
      </div>
    );
  }

  if (userRole === "warehouse_head") {
  return (
    <ComponentSelectionModal
      isOpen={isModalOpen}
      onClose={() => setModalOpen(false)}
    />
  );
}
}
