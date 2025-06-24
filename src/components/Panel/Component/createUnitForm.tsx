"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CategorySelect } from "../Warehouse/selectCategory";

type CreateUnitFormProps = React.ComponentPropsWithoutRef<"form"> & {
  switchToCategoryForm?: () => void;
};

export function CreateUnitForm({
  className,
  switchToCategoryForm,
  ...props
}: CreateUnitFormProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formdata = new FormData(e.currentTarget);
    const email = formdata.get("email");
  }

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-semibold">
          Create <span className="text-primary">Unit</span>
        </h1>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="name">Select Category</Label>
          <CategorySelect />
        </div>
        <Button type="submit" className="w-full font-semibold text-md">
          Create
        </Button>
        <div
          className="text-sm  text-blue-600 hover:text-blue-700 text-center cursor-pointer"
          onClick={switchToCategoryForm}
        >
          Create Category
        </div>
      </div>
    </form>
  );
}
