import { useCallback, useRef, useState } from "react"
import { Popover, PopoverTrigger } from "@radix-ui/react-popover"
import { GroupingState, Table } from "@tanstack/table-core"
import { debounce } from "lodash"

import { TableProps } from "../table.types"
import { Button } from "../../button/Button"
import { Chips } from "../../button/Chips"
import { Icon } from "../../icon"
import { PopoverContent } from "../../popover/PopOver"
import { cn } from "../../../utils/cn"

interface TableControlProps<TData> {
  search: string
  onSearchChange: (newSearch: string) => void
  searchPlaceholder?: string
  hideFromViewSelect?: string[]
  coloringState?: (state: string) => void
  hideView?: boolean
  hideFilter?: boolean
  hideSearch?: boolean
  cellColor?: string
  leadingCustomFilter?: React.JSX.Element
  trailingCustomFilter?: React.JSX.Element
  hasOutline?: boolean
  eventFilter?: boolean
  table: Table<TData>
  onChipChange?: (
    event: {
      id: number | string
      name: string
      isSelected: boolean
    }[],
  ) => void
  hideFromViewSettings: TableProps<TData>["hideFromViewSettings"]
  groupingState: GroupingState
  tableColoring?: boolean
}

const eventsDataChips = [
  { id: 1, name: "Hull Cleaning", isSelected: false },
  { id: 2, name: "Hull & Propeller Clearing", isSelected: false },
  { id: 3, name: "Propeller Clearing", isSelected: false },
  { id: 4, name: "Dry Dock", isSelected: false },
]
export const TableControl = <TData,>({
  table,
  search,
  hideFromViewSettings,
  searchPlaceholder,
  onSearchChange,
  hideFilter,
  hideSearch,
  hideView,
  hideFromViewSelect,
  hasOutline,
  groupingState,
  coloringState,
  eventFilter,
  cellColor,
  tableColoring,
  onChipChange,
  trailingCustomFilter,
  leadingCustomFilter,
}: TableControlProps<TData>) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleOnClickChip = useCallback(
    (
      id: number,
      data: {
        id: number | string
        name: string
        isSelected: boolean
      }[],
      setData: React.Dispatch<React.SetStateAction<any[]>>,
    ) => {
      const dataCpy = [...data]

      dataCpy.forEach((item) => {
        if (item.id === id) {
          item.isSelected = !item.isSelected
        }
      })

      setData(dataCpy)

      onChipChange && onChipChange(dataCpy)
    },
    [],
  )
  const [eventsChips, setEventsChips] = useState(eventsDataChips)

  return (
    <div
      className={cn("bg-white mb-2", {
        "": hasOutline,
      })}
    >
      <div className="bg-white flex items-center justify-between">
        <div className="flex gap-4 items-center">
          {(!hideSearch || !hideFilter) && (
            <div
              className={cn(
                "overflow-hidden w-[var(--table-search-input-width, 300px)] border rounded-md border-layout h-10 flex items-center",
                {
                  "w-auto border-r-0": hideSearch,
                  "w-[300px]": eventFilter,
                },
              )}
            >
              {!hideSearch && (
                <div className="relative h-full w-full">
                  <input
                    ref={inputRef}
                    defaultValue={search}
                    onChange={debounce((e) => {
                      onSearchChange(e.target.value)
                    }, 800)}
                    className="h-full w-full px-8 text-sm text-secondary focus:border-none focus:outline-none focus-visible:border-none disabled:cursor-not-allowed disabled:bg-surface-disabled"
                    placeholder={searchPlaceholder || "Search"}
                  />
                  <Icon
                    icon="Search"
                    size="sm"
                    className="absolute top-0 left-2 translate-y-2/3"
                  />
                  {search && (
                    <Icon
                      onClick={() => {
                        onSearchChange("")
                        if (inputRef.current) inputRef.current.value = ""
                      }}
                      icon="X"
                      size="sm"
                      className="absolute top-0 right-2 translate-y-2/3 cursor-pointer"
                    />
                  )}
                </div>
              )}
            </div>
          )}
          {eventFilter && (
            <Popover>
              <PopoverTrigger>
                <div className="bg-white flex flex-row py-[12px] px-[8px] gap-[8px]">
                  <span className="text-secondary text-base ">Events</span>
                  <span className="text-interactive-primary text-base">
                    All Events
                  </span>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-[360px] p-0" align="start">
                <div className="p-[16px] flex flex-col gap-[16px]">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-base">Events</span>
                    <div className="flex items-center gap-[8px]">
                      <small className="font-chivo cursor-pointer text-base text-interactive-primary font-medium size-1/6 w-auto">
                        Select All
                      </small>
                      <small className="cursor-pointer font-chivo text-base text-interactive-primary font-medium size-1/6 w-auto">
                        Deselect All
                      </small>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {eventsChips.map((item) => (
                      <Chips
                        key={item.id}
                        type="square"
                        text={item.name}
                        isSelected={item.isSelected}
                        onClickChip={() => {
                          handleOnClickChip(
                            item.id,
                            eventsChips,
                            setEventsChips,
                          )
                        }}
                      />
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
        <div></div>
        {leadingCustomFilter && leadingCustomFilter}
        <div className="flex items-center gap-4">
          {trailingCustomFilter && trailingCustomFilter}
          {!hideView && (
            <Popover>
              <PopoverTrigger>
                <Button
                  variant="ghost"
                  shade="primary"
                  leadingIcon={
                    <Icon
                      icon="Settings"
                      className={"text-interactive-primary"}
                      size="sm"
                    />
                  }
                  className="p-0 text-interactive-primary font-medium"
                >
                  Settings
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="end"
                className="p-4 flex flex-col divide-y gap-4 divide-layout w-96"
              >
                {!hideFromViewSettings?.includes("listOptions") && (
                  <div className="flex flex-col gap-4">
                    <p className="text-base font-semibold text-primary">
                      Show Columns
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {table
                        .getAllColumns()
                        .filter(
                          (f) =>
                            f.id !== "_selector" &&
                            f.id !== "_expand" &&
                            f.id !== "Message" &&
                            f.getCanHide() &&
                            !hideFromViewSelect?.includes(f.id),
                        )
                        .map((col) => ({
                          label:
                            typeof col.columnDef.header === "string"
                              ? col.columnDef.header
                              : col.id,
                          isSelected: col.getIsVisible(),
                          handler: col.getToggleVisibilityHandler(),
                        }))
                        .map((items) => (
                          <Chips
                            key={items.label}
                            type={"square"}
                            text={items.label}
                            isSelected={items.isSelected}
                            onClickChip={(e) => items.handler(e)}
                          />
                        ))}
                    </div>
                  </div>
                )}

                {table
                  .getAllColumns()
                  .filter(
                    (f) => f.id !== "_selector" && f.columnDef.enableGrouping,
                  ).length > 0 && (
                  <div className="flex flex-col gap-4">
                    <p className="text-base font-semibold text-primary mt-3">
                      Group by
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {table
                        .getAllColumns()
                        .filter(
                          (f) =>
                            f.id !== "_selector" && f.columnDef.enableGrouping,
                        )
                        .map((col) => ({
                          label:
                            typeof col.columnDef.header === "string"
                              ? col.columnDef.header
                              : col.id,
                          isSelected: col.getIsGrouped(),
                          handler: col.getToggleGroupingHandler(),
                          value: col.id,
                        }))
                        .map((items) => (
                          <Chips
                            key={items.label}
                            type={"square"}
                            text={items.label}
                            isSelected={items.isSelected}
                            onClickChip={() => {
                              if (items.isSelected) {
                                return table.setGrouping(
                                  groupingState.filter(
                                    (state) => state !== items.value,
                                  ),
                                )
                              }
                              table.resetGrouping()
                              items.handler()
                            }}
                          />
                        ))}
                    </div>
                  </div>
                )}
                {tableColoring && (
                  <div className="flex flex-col gap-4">
                    <p className="text-base font-semibold text-primary mt-3">
                      Table Coloring
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { label: "Extreme Values Only", value: "value" },
                        { label: "Full Cell Colored", value: "cell" },
                      ].map((items) => (
                        <Chips
                          key={items.label}
                          type={"round"}
                          text={items.label}
                          isSelected={cellColor === items.value}
                          onClickChip={() => {
                            if (cellColor === items.value) {
                              coloringState && coloringState("")
                            } else {
                              coloringState && coloringState(items.value)
                            }
                          }}
                          // onClickChip={() => {
                          //   if (items.isSelected) {
                          //     return table.setGrouping(
                          //       groupingState.filter(
                          //         (state) => state !== items.value,
                          //       ),
                          //     )
                          //   }
                          //   table.resetGrouping()
                          //   items.handler()
                          // }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  )
}
