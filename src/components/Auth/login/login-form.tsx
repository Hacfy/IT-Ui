"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/store/User/userSlice";
import useAuthToken from "@/hooks/token/getToken";
import { useState } from "react";
import { toast } from "sonner";
import { userStore } from "@/types/redux/userStore";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const dispatch = useDispatch();
  const { decodedToken, tokenLoading } = useAuthToken();
  const [loading, setLoading] = useState<boolean>(false);
  const userType = useSelector((state: userStore) => state.user.user_type);

  tokenLoading ? setLoading(true) : null;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const email = formdata.get("email");
    const password = formdata.get("password");
    try {
      const response = {
        message: "success",
      };
      console.log(response.message);
      response.message === "success"
        ? dispatch(
            setUser({
              user_id: "123",
              user_email: "aniketh@example.com",
              user_type: "branch_head",
            })
          )
        : console.log("terney faliure");
    } catch (error: unknown) {
      toast.error("Some error while logging!");
      console.error(error);
    }
  }

  console.log(userType)

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">
          Login to your <span className="text-primary">account</span>
        </h1>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
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
            <Label htmlFor="password">Password</Label>
            <a
              href="/forgotpassword"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </div>
        <Button
          type="submit"
          className="w-full font-semibold text-md"
          disabled={loading}
        >
          {loading ? "Loading" : "Login"}
        </Button>
      </div>
    </form>
  );
}
