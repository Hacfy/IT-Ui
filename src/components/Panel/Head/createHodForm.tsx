"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HeadSelector } from "./headSelector";

export function CreateHeadForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formdata = new FormData(e.currentTarget);
    const email = formdata.get("email");
    const password = formdata.get("password");
  }

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-semibold">
          Create  <span className="text-primary">Head</span>
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
          <Label htmlFor="name">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="address">Department</Label>
          </div>
          {/* <Input
            id="address"
            type="text"
            name="address"
            required
            placeholder="Address"
          /> */}
          <HeadSelector />
        </div>
        <Button type="submit" className="w-full">
          Create
        </Button>  
      </div>
    </form>
  );
}
