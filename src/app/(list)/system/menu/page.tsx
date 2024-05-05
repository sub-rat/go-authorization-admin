"use client"

import Table from "../../../../components/common/table/Table"
import { Column } from "../../../../components/common/table/table.types"
import { useMenuServiceGetApiV1Menus } from "../../../../services/generated/queries"
import { models_Menu } from "../../../../services/generated/requests"

const Menu = () => {
  const { data: roleList, isLoading: roleLoading } =
    useMenuServiceGetApiV1Menus({})

  const menusColumn: Column<models_Menu>[] = [
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Sequence",
      accessorKey: "sequence",
    },
    {
      header: "Actions",
      cell: ({ row }) => {
        if (row.original.actions != null && row.original.actions.length > 0) {
          return row.original.actions.map((action, index) => (
            <div key={index}>
              <div>
                {action.name}
                {",  "}
                {action.resources?.map((r) => r.method + "=" + r.path + ",")}
              </div>
            </div>
          ))
        } else {
          return null // or any default value you want to display when there are no roles
        }
      },
    },
    {
      header: "Icon",
      accessorKey: "icon",
    },
    {
      header: "Router",
      accessorKey: "router",
    },
    {
      header: "Component",
      accessorKey: "component",
    },
  ]
  return (
    <div>
      <Table
        columns={menusColumn}
        data={roleList?.data?.list ?? []}
        isLoading={roleLoading}
      />
    </div>
  )
}
export default Menu
