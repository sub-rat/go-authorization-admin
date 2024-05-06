import React, { useEffect, useMemo } from "react"
import { rankItem } from "@tanstack/match-sorter-utils"
import {
  ColumnFiltersState,
  ColumnOrderState,
  ColumnPinningState,
  ExpandedState,
  FilterFn,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getGroupedRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  GroupingState,
  PaginationState,
  Row,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table as TableRoot,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./base"
import { TableSelectionBar } from "./components"
import { TableControl } from "./components/table-control"
import Pagination from "./pagination/pagination"
import { getCheckBoxColumn } from "./selection/get-checkbox-column"
import getExpandColumn from "./selection/get-expand-column"
import { TableProps, TableRowStyle, TableSize } from "./table.types"
import { sumSizesBeforeId } from "./utils/sum-sizes-before-id"
import { Button } from "../button/Button"
import { Icon } from "../icon"
import { cn } from "../../utils/cn"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank,
  })

  // Return if the item should be filtered in/out
  return itemRank.passed
}

export const Table = <TData,>({
  columns,
  data,
  size = "default",
  rowStyle = "stripes",
  getSubRows,
  getRowId,
  allowSelection = false,
  hideControls = true,
  manualSorting = false,
  manualSearching = false,
  manualFiltering = false,
  manualPagination = false,
  eventFilter = false,
  samePoolOnly = false,
  maxSelect = 0,
  colors,
  tableColoring = false,
  onRowClick,
  onRowSelect,
  isLoading,
  hasOutline = true,
  selectionActions,
  showFooter = false,
  freezeColsFromLeft = 0,
  freezeColsFromRight = 0,
  onTableStateChange,
  tableState,
  searchPlaceholder,
  pageSizes,
  config,
  hideFilter,
  hideSearch,
  hideView,
  hidefromViewSelect,
  hidePagination = true,
  variant,
  headerClassName,
  cellClassName,
  // renderGridRow,
  tableView: defaultTableView,
  hideSelectionBar,
  tableContainerClassName,
  // gridContainerClassName,
  hideFromViewSettings = [],
  gridContainerClassName,
  renderGridRow,
  customController,
  leadingCustomFilter,
  trailingCustomFilter,
}: TableProps<TData>) => {
  const [globalFilter, setGlobalFilter] = React.useState("")
  const [tableSize] = React.useState<TableSize>(size)
  const [expanded, setExpanded] = React.useState<ExpandedState>({})
  const [tableRowStyle] = React.useState<TableRowStyle>(rowStyle)
  const [columnOrder, setColumnOrder] = React.useState<ColumnOrderState>([])
  const [columnPinning, setColumnPinning] = React.useState<ColumnPinningState>(
    {},
  )

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [filtering, setFiltering] = React.useState<ColumnFiltersState>([])
  const [grouping, setGrouping] = React.useState<GroupingState>([])
  const [tableView] = React.useState<"table" | "grid">(
    defaultTableView || "table",
  )

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageSize: pageSizes?.[0] || 5,
    pageIndex: 0,
  })

  const [rowSelection, setRowSelection] = React.useState({})

  const [coloring, setColoring] = React.useState("")

  const columnsWithExpandSection = React.useMemo(
    () => (getSubRows ? [getExpandColumn<TData>(), ...columns] : [...columns]),
    [columns],
  )
  const checkboxStyle = (selectedRow: Row<TData>[]) =>
    selectedRow.map((x, index) => ({
      backGroundColor: colors && colors[index],
      id: x.id,
    }))
  const columnsWithRowSelection = React.useMemo(
    () => [
      getCheckBoxColumn<TData>(checkboxStyle, maxSelect, samePoolOnly),
      ...columnsWithExpandSection,
    ],
    [columns],
  )

  const tableConfig = {
    rowStyle: tableRowStyle,
    size: tableSize,
    variant,
  }

  const table = useReactTable({
    groupedColumnMode: false,
    data,
    columns: allowSelection
      ? columnsWithRowSelection
      : columnsWithExpandSection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: manualPagination
      ? undefined
      : getPaginationRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnOrderChange: setColumnOrder,
    onColumnPinningChange: setColumnPinning,
    onPaginationChange: manualPagination ? undefined : setPagination,
    onGroupingChange: setGrouping,
    manualSorting,
    manualFiltering,
    onExpandedChange: setExpanded,
    onSortingChange: setSorting,
    onRowSelectionChange: (e) => {
      setRowSelection(e)
    },
    getGroupedRowModel: getGroupedRowModel(),
    onColumnFiltersChange: setFiltering,
    getSubRows,
    getRowId,
    globalFilterFn: fuzzyFilter,
    onGlobalFilterChange: setGlobalFilter,

    defaultColumn: {
      enableSorting: false,
      enableColumnFilter: false,
      enableGlobalFilter: true,

      maxSize: Number.MAX_SAFE_INTEGER,
    },
    state: {
      grouping,
      sorting,
      rowSelection,
      expanded,
      globalFilter,
      columnOrder,
      columnPinning,
      pagination: manualPagination ? undefined : pagination,
      columnFilters: filtering,
    },
    filterFns: {
      // TODO: client side filtering ??
      amount: () => true,
      list: () => true,
      // dateTime: () => true,
    },
  })

  useEffect(() => {
    if (rowSelection && onRowSelect) {
      onRowSelect(Object.keys(rowSelection).map((x) => table.getRow(x)))
    }
  }, [rowSelection])

  useEffect(() => {
    setRowSelection([])
  }, [data])

  const rightColumn = table
    .getRightHeaderGroups()?.[0]
    ?.headers.slice()
    .reverse()
  const leftColumn = table.getLeftHeaderGroups()?.[0]?.headers.slice()

  const leftSizes = useMemo(() => {
    const sizes: { [key: string]: number } = {}

    leftColumn?.forEach((header) => {
      sizes[header.id] = sumSizesBeforeId(leftColumn, header.id)
    })

    return sizes
  }, [leftColumn])

  const rightSizes = useMemo(() => {
    const sizes: { [key: string]: number } = {}

    rightColumn?.forEach((header) => {
      sizes[header.id] = sumSizesBeforeId(rightColumn, header.id)
    })

    return sizes
  }, [rightColumn])

  // to check if the visibility of any one fo the table changes
  const visibleColumnsStr = table
    .getAllColumns()
    .map((col) => col.getIsVisible())
    .join("")

  useEffect(() => {
    const cols = table.getAllColumns().filter((col) => col.getIsVisible())

    cols.forEach((col, j) => {
      if (j < freezeColsFromLeft) {
        col.pin("left")
      } else if (cols.length - j <= freezeColsFromRight) {
        col.pin("right")
      } else {
        col.pin(false)
      }
    })
  }, [freezeColsFromLeft, freezeColsFromRight, table, visibleColumnsStr])
  return (
    <div className="h-full flex flex-col">
      {!hideControls && (
        <TableControl
          coloringState={(state) => setColoring(state)}
          cellColor={coloring}
          tableColoring={tableColoring}
          groupingState={grouping}
          hideFromViewSelect={hidefromViewSelect}
          hideSearch={hideSearch}
          hideView={hideView}
          hasOutline={hasOutline}
          hideFilter={hideFilter}
          eventFilter={eventFilter}
          search={manualSearching ? tableState?.search || "" : globalFilter}
          onChipChange={(event) => {
            onTableStateChange?.({
              ...tableState,
              event: event,
            })
          }}
          onSearchChange={(newSearch) => {
            if (manualSearching) {
              onTableStateChange?.({
                ...tableState,
                search: newSearch,
              })
            } else {
              setGlobalFilter(newSearch)
            }
          }}
          table={table}
          searchPlaceholder={searchPlaceholder}
          hideFromViewSettings={hideFromViewSettings}
          trailingCustomFilter={trailingCustomFilter}
          leadingCustomFilter={leadingCustomFilter}
        />
      )}
      {Object.keys(rowSelection).length !== 0 && !hideSelectionBar && (
        <TableSelectionBar
          outline={hasOutline}
          columns={columns}
          tableInstance={table}
          actions={selectionActions}
        />
      )}
      {customController && customController}

      <TableContainer
        className={cn(tableContainerClassName, {
          "overflow-hidden": isLoading,
        })}
        hasPagination={!hidePagination}
        hasControls={!hideControls}
        outline={hasOutline}
      >
        {tableView === "table" && (
          <TableRoot>
            <TableHeader outline={hasOutline}>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      rowStyle={
                        header.column.getIsPinned() ? "bordered" : tableRowStyle
                      }
                      key={header.id}
                      id={header.id}
                      variant={variant}
                      isSelector={header.id === "_selector"}
                      size={tableSize}
                      className={headerClassName}
                      {...{
                        colSpan: header.colSpan,
                        style: {
                          textAlign: header.column.columnDef.meta?.isNumeric
                            ? "right"
                            : "left",
                          position: "sticky",
                          width: header.column.columnDef.meta?.width || "auto",
                          top: (header.depth - 1) * 36,
                          left: leftSizes[header.id],
                          right: rightSizes[header.id],
                          zIndex:
                            header.column.getIsPinned() === "left"
                              ? 21
                              : undefined,
                        },
                      }}
                    >
                      <div
                        className={cn("flex gap-1 items-center", {
                          "justify-center": header.id === "_selector",
                        })}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                        {header.column.columnDef.enableSorting &&
                          (header.column.getIsSorted() === "asc" ? (
                            <Icon
                              onClick={() => {
                                if (manualSorting) {
                                  onTableStateChange?.({
                                    ...tableState,
                                    sort: {
                                      type: "descending",
                                      column: tableState?.sort
                                        ?.column as string,
                                    },
                                  })
                                } else {
                                  header.column?.toggleSorting(true)
                                }
                              }}
                              icon="ArrowUp"
                              style={{
                                height: "16px",
                                cursor: "pointer",
                              }}
                            />
                          ) : (
                            <Icon
                              icon="ArrowDown"
                              onClick={() => {
                                if (manualSorting) {
                                  onTableStateChange?.({
                                    ...tableState,
                                    sort: {
                                      type: "ascending",
                                      column: tableState?.sort
                                        ?.column as string,
                                    },
                                  })
                                } else {
                                  header.column?.toggleSorting(false)
                                }
                              }}
                              style={{
                                height: "16px",
                                cursor: "pointer",
                              }}
                            />
                          ))}
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {isLoading && (
                <div className="absolute top-0 left-0 w-full h-full z-[10] bg-white flex items-center justify-center bg-opacity-70">
                  {/* add loader for table */}
                  Loading...
                </div>
              )}
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    id={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    onClick={() => onRowClick?.(row.original)}
                    className={onRowClick ? "cursor-pointer" : "cursor-default"}
                  >
                    {row.getVisibleCells().map((cell) => {
                      let backgroundColor = ""

                      if (
                        coloring === "cell" &&
                        cell.column.columnDef.fullColoringKey
                      ) {
                        const keys = (
                          cell.column.columnDef.fullColoringKey as string
                        ).split(".")
                        let value = cell.row.original as any
                        for (const key of keys) {
                          value = value[key]
                        }
                        // const originalValue = (cell.row.original as any)[
                        //   cell.column.columnDef.coloringKey
                        // ]

                        // const hexColor = fullCellColor(value) || ""
                        backgroundColor = value
                      }
                      let backgroundValueColor = ""

                      if (
                        coloring === "value" &&
                        cell.column.columnDef.valueColoringKey
                      ) {
                        const keys = (
                          cell.column.columnDef.valueColoringKey as string
                        ).split(".")

                        let value = cell.row.original as any
                        for (const key of keys) {
                          value = value[key]
                        }
                        // const originalValue = (cell.row.original as any)[
                        //   cell.column.columnDef.valueColoringKey
                        // ]
                        // const hexColor =
                        //   valueColor(Number(originalValue))?.hex || ""
                        backgroundValueColor = value
                      }

                      // Use backgroundColor for styling

                      return (
                        <TableCell
                          grouped={row.getIsGrouped()}
                          colSpan={
                            cell.row.parentId
                              ? cell.column.columnDef.colSpan
                              : 1
                          }
                          isExpandable={
                            row.getCanExpand() && cell.column.id === "_expand"
                          }
                          isSelector={cell.column.id === "_selector"}
                          variant={variant}
                          rowStyle={
                            cell.column.getIsPinned()
                              ? "bordered"
                              : tableRowStyle
                          }
                          size={tableSize}
                          key={cell.id}
                          className={cellClassName}
                          {...{
                            style: {
                              display:
                                cell.row.parentId &&
                                cell.column.columnDef.enableHiding
                                  ? "none"
                                  : "auto",
                              textAlign: cell.column.columnDef.meta?.isNumeric
                                ? "right"
                                : "left",
                              maxWidth:
                                cell.column.columnDef.meta?.width || "auto",
                              width: cell.column.getSize(),
                              position: cell.column.getIsPinned()
                                ? "sticky"
                                : undefined,
                              left: leftSizes[cell.column.id],
                              right: rightSizes[cell.column.id],
                              zIndex:
                                cell.column.getIsPinned() === "left"
                                  ? 20
                                  : undefined,
                              background:
                                (cell.row.original as { FullColorCode: string })
                                  .FullColorCode ?? backgroundColor,
                            },
                          }}
                        >
                          {/* {flexRender(cell.column.columnDef.cell, cell.getContext())} */}
                          {cell.getIsGrouped() ? (
                            // If it's a grouped cell, add an expander and row count

                            <Button
                              variant="ghost"
                              leadingIcon={
                                row.getIsExpanded() ? (
                                  <Icon icon="ChevronUp" />
                                ) : (
                                  <Icon icon="ChevronDown" />
                                )
                              }
                              {...{
                                onClick: row.getToggleExpandedHandler(),
                                style: {
                                  cursor: row.getCanExpand()
                                    ? "pointer"
                                    : "normal",
                                },
                              }}
                              className="absolute left-0 top-0 w-full bg-white justify-start h-[98%]"
                            >
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext(),
                              )}
                            </Button>
                          ) : (
                            <div
                              className={cn(" p-0 rounded-sm", {
                                "w-full": cell.column.id === "_selector",
                              })}
                              style={{
                                background:
                                  ((
                                    cell.row.original as {
                                      ExtremeColorCode: string
                                    }
                                  ).ExtremeColorCode as string) ??
                                  backgroundValueColor,
                              }}
                            >
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext(),
                              )}
                            </div>
                          )}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    rowStyle={tableRowStyle}
                    size={tableSize}
                    colSpan={columns.length + 2}
                    className="h-48 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
            {showFooter && (
              <TableFooter>
                {table.getFooterGroups().map((footerGroup, index) => {
                  if (index !== 0) return null

                  return (
                    <TableRow key={footerGroup.id}>
                      {footerGroup.headers.map((footer) =>
                        footer.column.columnDef.meta?.Footer?.display ===
                        "none" ? null : (
                          <TableHead
                            variant={variant}
                            rowStyle={tableRowStyle}
                            key={footer.id}
                            size={size}
                            colSpan={
                              footer.column.columnDef.meta?.Footer?.colspan
                            }
                            style={{
                              textAlign: footer.column.columnDef.meta?.isNumeric
                                ? "right"
                                : "left",
                              width: footer.column.columnDef.meta?.width,
                            }}
                          >
                            {footer.isPlaceholder
                              ? null
                              : flexRender(
                                  footer.column.columnDef.footer,
                                  footer.getContext(),
                                )}
                          </TableHead>
                        ),
                      )}
                    </TableRow>
                  )
                })}
              </TableFooter>
            )}
          </TableRoot>
        )}
      </TableContainer>

      <TableContainer
        className={cn(gridContainerClassName, {
          "overflow-hidden": isLoading,
        })}
        hasPagination={!hidePagination}
        hasControls={!hideControls}
        outline={hasOutline}
      >
        {tableView === "grid" && (
          <>
            {isLoading && (
              <div className="absolute top-0 left-0 w-full h-full z-[10] bg-white flex items-center justify-center bg-opacity-70">
                Loading...
              </div>
            )}

            {table.getRowModel().rows?.length > 0 ? (
              table
                .getRowModel()
                .rows.map((row) => renderGridRow?.(row, tableConfig))
            ) : (
              <div className="h-48 text-center items-center justify-center flex">
                No results.
              </div>
            )}
          </>
        )}
      </TableContainer>

      {!hidePagination && (
        <Pagination
          pageSizes={pageSizes || [5, 10, 20, 40]}
          totalData={config?.pagination?.total as number}
          table={table}
          manual={manualPagination}
          onTableStateChange={onTableStateChange}
          tableState={tableState}
          hasOutline={hasOutline}
        />
      )}
    </div>
  )
}

export default Table
