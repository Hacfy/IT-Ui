"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "../../ui/button";
import { CreateCategoryForm } from "../Component/createComponentCategoryForm";
import { CreateUnitForm } from "../Component/createUnitForm";

type SelectionModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ComponentSelectionModal({
  isOpen,
  onClose,
}: SelectionModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [option, setOption] = useState<string>("");

  function handleClick(route?: string) {
    if (!dialogRef.current) return;

    if (route === "category") {
      setOption("category");
    } else if (route === "component") {
      setOption("component");
    }

    dialogRef.current.close();
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const preventClose = (e: Event) => {
      e.preventDefault();
    };

    const handleClose = () => {
      onClose();
    };

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }

    dialog.addEventListener("cancel", preventClose); // ESC key
    dialog.addEventListener("click", (e) => {
      const rect = dialog.getBoundingClientRect();
      const isOutside =
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom;

      if (isOutside) {
        e.stopPropagation();
        e.preventDefault();
      }
    });

    dialog.addEventListener("close", handleClose);

    return () => {
      dialog.removeEventListener("cancel", preventClose);
      dialog.removeEventListener("close", handleClose);
    };
  }, [isOpen, onClose]);

  if (option === "category") {
    return (
      <div className="flex  w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <CreateCategoryForm
            className="shadow-lg rounded-md border border-gray-300 p-6 mt-28"
            switchToUnitForm={() => setOption("component")}
          />
        </div>
      </div>
    );
  } else if (option === "component") {
    return (
      <div className="flex  w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <CreateUnitForm
            className="shadow-lg rounded-md border border-gray-300 p-6 mt-28"
            switchToCategoryForm={() => setOption("category")}
          />
        </div>
      </div>
    );
  }

  return (
    <dialog ref={dialogRef} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-white justify-center items-center flex flex-col p-8">
        <h3 className="text-lg">
          <span className="text-primary font-semibold">Hello!</span> Please
          select an option
        </h3>
        <div className="py-4 flex mt-4 gap-20">
          <Button onClick={() => handleClick("category")}>
            Create Category
          </Button>
          <Button onClick={() => handleClick("component")}>
            Create Component
          </Button>
        </div>
      </div>
    </dialog>
  );
}
