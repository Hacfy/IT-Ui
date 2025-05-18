"use client";
import { useEffect, useRef } from "react";
import { AddButton } from "../../ui/addButton";
import { Button } from "../../ui/button";
import { useRouter } from "next/navigation";

type SelectionModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function SelectionModal({ isOpen, onClose }: SelectionModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  function handleClick(route?: string) {
    if (route === "add") {
      router.push("/home/createBranch");
    } else if (route === "select") {
      router.push("/selectBranch");
    }

    () => dialogRef.current?.close();
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }

    const handleClose = () => onClose();
    const handleCancel = (e: Event) => e.preventDefault();

    dialog.addEventListener("close", handleClose);
    dialog.addEventListener("cancel", handleCancel);

    return () => {
      dialog.removeEventListener("close", handleClose);
      dialog.removeEventListener("cancel", handleCancel);
    };
  }, [isOpen, onClose]);

  return (
    <dialog ref={dialogRef} className="modal modal-bottom sm:modal-middle ">
      <div className="modal-box bg-white justify-center items-center flex flex-col p-8">
        <h3 className=" text-lg ">
          <span className="text-primary font-semibold">Hello!</span> Please
          select a option
        </h3>
        <div className="py-4 flex mt-4 gap-20">
          <Button onClick={() => handleClick("select")}>Select Branch</Button>
          <Button onClick={() => handleClick("add")}>Add Branch</Button>
        </div>
        {/* <div className="modal-action">
          <button className="btn bg-primary border-transparent" onClick={() => dialogRef.current?.close()}>
            Close
          </button>
        </div> */}
      </div>
    </dialog>
  );
}
