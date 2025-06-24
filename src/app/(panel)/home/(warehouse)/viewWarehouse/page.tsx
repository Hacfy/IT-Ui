"use client";

import { SelectWarehouseCard } from "@/components/Panel/Warehouse/selectWarehouse";
import { Button } from "@/components/ui/button";
import { Warehouse } from "@/types/general.type";
import { useRouter } from "next/navigation";

export default function SelectWarehouse() {
  const route = useRouter();
  const data: Warehouse[] = [
    {
      id: "1",
      name: "Main Building ",
      b_id: 1,
    },
  ];

  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen px-4">
        <div className="text-xl md:text-2xl mb-6 text-center">
          No Warehouse Found!
        </div>
        <Button
          className="font-semibold"
          onClick={() => route.push("/createWarehouse")}
        >
          Add Warehouse
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-6">
        <h1 className="text-lg md:text-2xl">
          Please Select{" "}
          <span className="text-primary font-semibold">Warehouse</span>
        </h1>
        <Button
          className="font-semibold"
          onClick={() => route.push("/home/createWarehouse")}
        >
          Add Warehouse
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <SelectWarehouseCard data={data} />
      </div>
    </div>
  );
}
