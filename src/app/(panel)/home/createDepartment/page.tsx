import { CreateDepartmentForm } from "@/components/Panel/Department/createDepartmentForm";

export default function Page() {
  return (
    <div className="flex  w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <CreateDepartmentForm className="shadow-lg rounded-md border border-gray-300 p-6 mt-28" />
      </div>
    </div>
  );
}
