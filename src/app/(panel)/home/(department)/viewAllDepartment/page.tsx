import { ViewAllDepartmentsTable } from "@/components/Panel/Department/viewAllDepartments";

export default function ViewHeads() {
  return (
    <div className="flex w-full items-center justify-center p-6 md:p-10">
      <div className="w-[80%]">
        <ViewAllDepartmentsTable />
      </div>
    </div>
  );
}
