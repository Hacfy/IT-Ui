import { CreateCollegeForm } from "@/components/Panel/Branch/createCollegForm";
import { DetailsCard } from "@/components/Panel/homePage/detailsCard";
import { DeviceStatus } from "@/components/Panel/homePage/deviceStatusChart";
import { IssuesChart } from "@/components/Panel/homePage/issuesChart";

const data = {
  card1: {
    title: "Total Workspaces",
    total: 5,
  },
  card2: {
    title: "Available Computers",
    total: 100,
  },
  card3: {
    title: "Computers in Use",
    total: 80,
  },

  card5: {
    title: "In Repair",
    total: 10,
  },
  card6: {
    title: "Not Working",
    total: 10,
  },
  card7: {
    title: "Not Working",
    total: 10,
  },
  card8: {
    title: "Not Working",
    total: 10,
  },
};

export default function Home() {
  // const createCollege = true;

  // if (createCollege) {
  //   return (
  //     <div className="flex w-full items-center justify-center p-6 md:p-10">
  //       <div className="w-full max-w-sm">
  //         <CreateCollegeForm className="shadow-lg rounded-md border border-gray-300 p-6 mt-28" />
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="mx-5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {Object.values(data).map((item, index) => (
          <DetailsCard key={index} title={item.title} total={item.total} />
        ))}
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2  mt-6 gap-x-10">
        <DeviceStatus />
        <IssuesChart />
      </div>
    </div>
  );
}
