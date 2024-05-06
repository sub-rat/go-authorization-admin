import { useEffect, useMemo, useState } from "react"
import { uniqBy } from "lodash"

import Table from "../Table"
import { Column, Row, TableInstance } from "../table.types"
import { Button } from "../../button/Button"
import { Icon } from "../../icon"
import { Modal, useDisclosure } from "../../modal/modal"
import { cn } from "../../../utils/cn"

interface TableSelectionBarProps<T> {
  tableInstance: TableInstance<T>
  columns: Column<T>[]

  actions?: (rows: Row<T>[], table?: TableInstance<T>) => React.ReactNode
  outline?: boolean
}

export const TableSelectionBar = <T,>({
  tableInstance: table,
  columns,
  outline,
  actions,
}: TableSelectionBarProps<T>) => {
  const [selectedRows, setSelectedRows] = useState<Row<T>[]>([])
  const { open, onClose } = useDisclosure()
  const { rowSelection } = table.getState()
  const rowIds = useMemo(() => Object.keys(rowSelection), [rowSelection])
  useEffect(() => {
    const currentPageRowIds = Object.keys(table.getRowModel().rowsById)

    if (currentPageRowIds.some((id) => rowIds.includes(id))) {
      setSelectedRows((prev) =>
        uniqBy([...prev, ...table.getSelectedRowModel().rows], "id"),
      )
    } else {
      setSelectedRows((prev) => prev.filter((row) => rowIds.includes(row.id)))
    }
  }, [rowIds, table])

  return (
    <div
      className={cn(
        "bg-warning-background shrink-0 h-12 flex items-center justify-between px-4 py-4",
        {
          "border-x border-b": outline,
        },
      )}
    >
      <p>
        {table.getSelectedRowModel().rows.length}/
        {table.getRowModel().rows.length} vessels selected
      </p>

      <div className="flex items-center gap-3">
        {/* {actions?.(selectedRows)} */}
        <Button
          onClick={() => table.resetRowSelection()}
          variant="ghost"
          leadingIcon={
            <Icon className={"text-critical-primary "} icon="XCircle" />
          }
          className="p-0 text-critical-primary font-medium"
        >
          Clear Selection
        </Button>
        {actions && (
          <Button
            onClick={() => actions(selectedRows)}
            variant="solid"
            leadingIcon={<Icon className={"text-white ml-3"} icon="BarChart" />}
            trailIcon={<Icon className={"text-white mr-3"} icon="Share" />}
            className="p-0 font-medium text-white"
          >
            Compare in Detail
          </Button>
        )}
      </div>
      <Modal
        contentLayout="default"
        onClose={onClose}
        open={open}
        title="Selected Items"
        width="5xl"
        side="right"
      >
        <div
          className={cn(
            "bg-surface-muted h-12 flex items-center justify-between px-2 ",
            {
              "border-x border-b": outline,
            },
          )}
        >
          <p className="text-primary font-medium">
            {rowIds.length} items selected
          </p>

          <div className="flex items-center gap-3">
            {/* {actions?.(selectedRows, table)} */}
            <Button
              onClick={() => table.resetRowSelection()}
              variant="ghost"
              leadingIcon={<Icon className="text-brand-primary" icon="X" />}
            >
              Clear Selection
            </Button>
          </div>
        </div>
        <div className="h-[calc(100vh-9rem)] overflow-auto">
          <Table
            hasOutline={false}
            columns={columns}
            data={selectedRows.map((row) => row.original)}
            rowStyle="bordered"
            hideControls
            hidePagination
            manualPagination
            config={{ pagination: { total: selectedRows.length } }}
            pageSizes={[selectedRows.length]}
            hideSelectionBar
          />
        </div>
      </Modal>
    </div>
  )
}

export default TableSelectionBar
