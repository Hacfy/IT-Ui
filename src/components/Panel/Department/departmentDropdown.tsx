import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DropDownManagement } from "@/lib/RbacManagement/Department/dropDownManagement"
import { Ellipsis } from "lucide-react"

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="btn btn-ghost btn-xs text-black hover:text-white"><Ellipsis/></button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropDownManagement userType="admin"/>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
