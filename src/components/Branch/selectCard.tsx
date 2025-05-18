import { branch } from "@/types/general.type";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";

export function SelectCard({ data }: { data: branch[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-10 mt-20 place-items-center ">
      {data.map((item) => (
        <Card
          key={item.id}
          className="w-full max-w-xs min-h-[180px] flex flex-col justify-center hover:scale-98 transition-all duration-300 ease-in-out hover:border-primary "
        >
          <CardHeader className="text-center">
            <CardTitle className="text-xl md:text-2xl font-medium text-primary">
              {item.location}
            </CardTitle>
            <CardDescription className="text-sm  md:text-base text-gray-500 mt-1 capitalize text-balance">
              {item.name}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
