import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Warehouse } from "@/types/general.type";

export function SelectWarehouseCard({ data }: { data: Warehouse[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-10 mt-20 place-items-center ">
      {data.map((item) => (
        <Card
          key={item.id}
          className="w-full max-w-xs min-h-[180px] flex flex-col justify-center hover:scale-102 transition-all duration-300 ease-in-out hover:border-primary "
        >
          <CardHeader className="text-center">
            <CardTitle className="text-xl md:text-2xl font-semibold text-primary">
              {item.name}
            </CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
