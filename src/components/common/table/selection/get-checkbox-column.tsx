import { ColumnDef, Row } from "@tanstack/table-core"

import Checkbox from "../../checkbox/checkbox"

import { TableCheckbox } from "./table-checkbox"

export const getCheckBoxColumn = <T,>(
  checkboxStyle: (selectedRow: Row<T>[]) => {
    backGroundColor: string | undefined
    id: string
  }[],
  maxSelect?: number,
  samePoolOnly?: boolean,
): ColumnDef<T> => ({
  id: "_selector",
  header: ({ table }) => (
    <div className="p-2">
      {!maxSelect && (
        <Checkbox
          checked={table.getIsAllRowsSelected()}
          isIndeterminate={table.getIsSomeRowsSelected()}
          disabled={!!maxSelect}
          onCheckedChange={(e) => {
            table.getToggleAllRowsSelectedHandler?.()({
              target: { checked: e },
            })
          }}
        />
      )}
    </div>
  ),
  cell: ({ row, table }) => (
    <div className="p-2" onClick={(e) => e.stopPropagation()}>
      {(row.getCanExpand() || !row.parentId) && !row.getIsGrouped() && (
        <TableCheckbox
          {...{
            checked: row.getIsSelected(),
            disabled:
              (maxSelect &&
                maxSelect > 0 &&
                table.getSelectedRowModel().rows.length > maxSelect - 1 &&
                !row.getIsSelected()) ||
              (samePoolOnly &&
                table.getSelectedRowModel().rows.length > 0 &&
                // @ts-expect-error the pool point is not avilable for all the datas
                table.getSelectedRowModel().rows[0]?.original?.pool !==
                  // @ts-expect-error the pool point is not avilable for all the datas
                  row?.original?.pool),
            indeterminate: row.getIsSomeSelected(),
            onClick: row.getToggleSelectedHandler(),
            onCheckedChange: () =>
              row.getIsSelected() &&
              checkboxStyle(table.getSelectedRowModel().rows),

            ...(checkboxStyle &&
              row.getIsSelected() &&
              checkboxStyle(table.getSelectedRowModel().rows).filter(
                (x) => x.id === row.id,
              )[0]),
          }}
        />
      )}
    </div>
  ),
  meta: {
    width: "47px",
  },
})

export default getCheckBoxColumn
