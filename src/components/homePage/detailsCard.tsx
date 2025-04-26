import { Card, CardHeader, CardTitle } from "../ui/card";


export function DetailsCard({title,total}:{title:string,total:number}) {
  return (
    <Card className="shadow-sm border-2">
        <CardHeader>
          <CardTitle className="text-xl text-primary">{`${total}`}</CardTitle>
          <CardTitle className="text-sm font-normal text-gray-500 ">{title}</CardTitle>
        </CardHeader>
    </Card>
  )
}   