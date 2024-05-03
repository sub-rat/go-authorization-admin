import { ColumnDef } from "@tanstack/table-core"

import IconButton from "../../icon-button/icon-button"

export const getExpandColumn = <T,>(): ColumnDef<T> => ({
  id: "_expand",
  header: () => <> </>,
  cell: ({ row, getValue }) => (
    <div>
      {row.getCanExpand() && !row.getIsGrouped() ? (
        <IconButton
          aria-label={"checkbox"}
          variant="ghost"
          icon={row.getIsExpanded() ? "ChevronUp" : "ChevronDown"}
          {...{
            onClick: row.getToggleExpandedHandler(),
            style: { cursor: "pointer" },
          }}
          className="p-0"
        />
      ) : (
        getValue<boolean>()
      )}{" "}
    </div>
  ),
  meta: {
    width: "47px",
  },
})

export default getExpandColumn
