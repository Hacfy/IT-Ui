"use client";

import { SelectCard } from "@/components/Branch/selectCard";
import { Button } from "@/components/ui/button";
import { branch } from "@/types/general.type";
import { useRouter } from "next/navigation";

export default function SelectBranch() {
  const route = useRouter();
  const data: branch[] = [
    {
      id: "1",
      name: "Alvas institute of enginnering and technology",
      location: "Bangalore",
      org_id: 1,
      c_by: 1,
    },
  ];

  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen px-4">
        <div className="text-xl md:text-2xl mb-6 text-center">
          No Branch Found!
        </div>
        <Button
          className="font-semibold"
          onClick={() => route.push("/addBranch")}
        ></Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-6">
        <h1 className="text-lg md:text-2xl">
          Please Select{" "}
          <span className="text-primary font-semibold">Branch</span>
        </h1>
        <Button className="font-semibold" onClick={() => route.push("/addBranch")}>
          Add Branch
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <SelectCard data={data} />
      </div>
    </div>
  );
}
