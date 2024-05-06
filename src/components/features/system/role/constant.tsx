import { IRoleModalState } from "./types"
import { models_Role } from "../../../../services/generated/requests"
import { Button } from "../../../common/button/Button"
import { Column } from "../../../common/table/table.types"

export const rolesColumn: (
  userModal: (e: IRoleModalState) => void,
) => Column<models_Role>[] = (userModal) => {
  return [
    {
      header: "Roles",
      accessorKey: "name",
    },
    {
      header: "Sequence",
      accessorKey: "sequence",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: "",
      accessorKey: "status",
      cell: ({ row }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => userModal({ open: true, editData: row.original })}
          >
            Edit
          </Button>
        )
      },
    },
  ]
}
