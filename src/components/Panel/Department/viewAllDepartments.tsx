"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ellipsis } from "lucide-react";
import { use, useEffect, useState } from "react";
import { DropdownMenuDemo } from "./departmentDropdown";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const ITEMS_PER_PAGE = 10;

export function ViewAllDepartmentsTable() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [items, setItems] = useState<any>([]);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const totalPages = Math.ceil(invoices.length / ITEMS_PER_PAGE);

  useEffect(() => {
    setItems(invoices.slice(startIndex, startIndex + ITEMS_PER_PAGE));
  }, [currentPage]);

  return (
    <div className="overflow-x-auto">
      <table className="table ">
        <thead >
          <tr className="text-primary ">
            <th></th>
            <th>Head Name</th>
            <th>Deapartment Name </th>
            <th>Workspaces</th>
            <th>Issues</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item: any) => (
            <tr className="border-b-2 border-gray-200 hover:bg-gray-100">
              <th>
                <label>
                  <input type="checkbox" className="checkbox text-primary" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className=" ">Desktop Support Technician</span>
              </td>
              <td>Purple</td>
              <td>2</td>
              <th>
                <DropdownMenuDemo />
              </th>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-4 gap-2 items-center">
        <Button
          variant="outline"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        >
          Previous
        </Button>
        <span className="px-2 text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="outline"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
