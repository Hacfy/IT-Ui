import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AddBranchForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="flex p-0 ">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Add <span className="text-primary font-semibold">Branch</span></h1>
                <p className="text-balance text-muted-foreground">
                  Enter the details to create
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Name</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Location</Label>
                </div>
                <Input id="location" name="location" type="text" required placeholder="Location" />
              </div>
              <Button type="submit" className="w-full font-semibold text-lg ">
                Create
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
