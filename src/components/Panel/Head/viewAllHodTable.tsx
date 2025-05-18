"use client"
import UseLoader from "@/components/Loader/UseAbleLoader"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { userL2 } from "@/types/user.type";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react"



const deatils = [
    { name: "Jayant Kumar", department_name: "CSD", issues: "0", workspaces: "2" },
    { name: "Dathatraya", department_name: "ECE", issues: "3", workspaces: "4" },
    { name: "Dathatraya", department_name: "ECE", issues: "3", workspaces: "4" },
    { name: "Dathatraya", department_name: "ECE", issues: "3", workspaces: "4" },
    { name: "Dathatraya", department_name: "ECE", issues: "3", workspaces: "4" },
    { name: "Dathatraya", department_name: "ECE", issues: "3", workspaces: "4" },
    { name: "Dathatraya", department_name: "ECE", issues: "3", workspaces: "4" },
    { name: "Dathatraya", department_name: "ECE", issues: "3", workspaces: "4" },
    { name: "Dathatraya", department_name: "ECE", issues: "3", workspaces: "4" },
    { name: "Dathatraya", department_name: "ECE", issues: "3", workspaces: "4" },
    { name: "Dathatraya", department_name: "ECE", issues: "3", workspaces: "4" },
    { name: "Dathatraya", department_name: "ECE", issues: "3", workspaces: "4" },

];


export function ViewAllHods() {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const router = useRouter();

    useEffect(() => {
        if (!deatils.length) {
          router.push('/home/createHead')
        }
      }, [deatils])

    const loading = false;

    if (loading) {
        return <UseLoader />
    }

    const filteredHods = deatils.filter(hod =>
        hod.department_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const currentHods = filteredHods.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
 

    const totalPages = Math.ceil(filteredHods.length / itemsPerPage);

    return (
        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by department..."
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                    }}
                />
            </div>

            <div className="rounded-md border ">
            <Table className="table-auto w-full">
  <TableHeader>
    <TableRow className="grid grid-cols-4 gap-0 w-full">
      <TableHead className="text-center p-3 border-b">Name</TableHead>
      <TableHead className="text-center p-3 border-b">Department</TableHead>
      <TableHead className="text-center p-3 border-b">Labs</TableHead>
      <TableHead className="text-center p-3 border-b text-red-500">Issues</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {currentHods.map((hod, index) => (
      <TableRow key={index} className="grid grid-cols-4 gap-0 w-full hover:bg-gray-50">
        <TableCell className="text-center p-3 border-b">{hod.name}</TableCell>
        <TableCell className="text-center p-3 border-b">{hod.department_name}</TableCell>
        <TableCell className="text-center p-3 border-b">{hod.workspaces}</TableCell>
        <TableCell className="text-center p-3 border-b">{hod.issues}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
            </div>

            <div className="mt-4 flex items-center justify-between">
                <button
                    className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed text-primary"
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className="text-gray-600">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    className="px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed text-primary"
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    )
}