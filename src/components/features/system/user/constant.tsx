import { IUserModalState } from "./types"
import { models_User } from "../../../../services/generated/requests"
import { Button } from "../../../common/button/Button"
import { Column } from "../../../common/table/table.types"

export const userColumns: (
  userModal: (e: IUserModalState) => void,
) => Column<models_User>[] = (userModal) => {
  return [
    {
      header: "Name",
      accessorKey: "full_name",
    },
    {
      header: "Roles",
      cell: ({ row }) => {
        if (
          row.original.user_roles != null &&
          row.original.user_roles.length > 0
        ) {
          return row.original.user_roles.map((role, index) => (
            <div key={index}>{role.role_id}</div>
          ))
        } else {
          return null // or any default value you want to display when there are no roles
        }
      },
    },
    {
      header: "UserName",
      accessorKey: "username",
    },
    {
      header: "Phone",
      accessorKey: "phone",
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
