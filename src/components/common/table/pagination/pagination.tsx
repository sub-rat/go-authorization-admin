import { Table } from "@tanstack/table-core"


import { cn } from "../../../utils/cn"
import IconButton from "../../icon-button/icon-button"
import Select from "../../select/select"
import { TableState } from "../table.types"

interface PaginationProps<T> {
  table: Table<T>
  onTableStateChange?: (tableState: TableState) => unknown
  manual?: boolean
  tableState?: TableState
  hasOutline?: boolean

  totalData: number
  pageSizes: number[]
}

const handlePagination = <T,>(
  table: Table<T>,
  tableState?: TableState,
  onTableStateState?: (state: TableState) => unknown,
  manual?: boolean,
) => {
  if (manual) {
    const pagination = {
      page: tableState?.pagination?.page || 0,
      size: tableState?.pagination?.size || 5,
    }

    return {
      pageSize: pagination.size,
      page: pagination.page,
      onPageSizeChange: (size: number) =>
        onTableStateState?.({
          ...tableState,
          pagination: { page: pagination.page, size },
        }),
      onNextPage: () =>
        onTableStateState?.({
          ...tableState,
          pagination: { page: pagination.page + 1, size: pagination?.size },
        }),
      onPreviousPage: () =>
        onTableStateState?.({
          ...tableState,
          pagination: { page: pagination.page - 1, size: pagination?.size },
        }),
    }
  }

  const reactTableState = table.getState()
  return {
    pageSize: reactTableState.pagination.pageSize,
    page: reactTableState.pagination.pageIndex + 1,
    onPageSizeChange: (size: number) => table.setPageSize(size),
    onNextPage: () => table.nextPage(),
    onPreviousPage: () => table.previousPage(),
  }
}

export const Pagination = <T,>({
  totalData: total,
  pageSizes,
  table,
  tableState,
  manual,
  onTableStateChange,
  hasOutline,
}: PaginationProps<T>) => {
  const { page, pageSize, onNextPage, onPageSizeChange, onPreviousPage } =
    handlePagination<T>(table, tableState, onTableStateChange, manual)

  const lowerLimit = (Number(page) - 1) * pageSize + 1
  const upperLimit =
    page * pageSize - Number(total) >= 0 ? total : page * pageSize

  const options = pageSizes.map((p) => ({ label: p, value: p }))

  return (
    <div
      className={cn(
        "flex items-center justify-between gap-1 bg-white p-2 border rounded-b border-t-0 text-sm",
        {
          "border-0": !hasOutline,
        },
      )}
    >
      <div className="flex items-center gap-3 text-secondary">
        View
        <div>
          <Select
            size="sm"
            menuPlacement="top"
            options={options}
            defaultValue={{ value: pageSize, label: pageSize }}
            onChange={(val) => {
              const selectedVal: { value: number } = val as { value: number }
              if (typeof selectedVal.value === "number")
                onPageSizeChange?.(selectedVal.value)
            }}
          />
        </div>
        <span>items per page</span>
      </div>

      <div className="flex items-center gap-2">
        <IconButton
          disabled={page === 1}
          onClick={onPreviousPage}
          shade="neutral"
          variant="ghost"
          icon="ChevronLeft"
          aria-label="Left"
        />
        <span>
          {lowerLimit}-{upperLimit} / {total}
        </span>
        <IconButton
          disabled={page === Math.ceil(Number(total) / pageSize)}
          onClick={onNextPage}
          shade="neutral"
          variant="ghost"
          icon="ChevronRight"
          aria-label="Left"
        />
      </div>
    </div>
  )
}

export default Pagination
