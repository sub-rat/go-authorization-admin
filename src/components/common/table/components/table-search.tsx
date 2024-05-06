import { debounce } from "lodash"

import { Icon } from "../../icon"
import { cn } from "../../../utils/cn"

interface TableSearchProps {
  isStatic: boolean
  outline: boolean

  searchValue?: string
  onSearchValueChange?: React.ChangeEventHandler<HTMLInputElement>

  //   tableOptions?: ActionMenuProps['options'];
}

export const TableSearch = ({
  isStatic,

  searchValue,
  onSearchValueChange,

  outline,
}: //   tableOptions,
TableSearchProps) => {
  if (isStatic) {
    return null
  }

  return (
    <div
      className={cn(
        "flex shrink-0 bg-white text-sm text-primary border-b border-layout h-[50px] divide-x divide-layout",
        {
          "border-t border-x rounded-t-md overflow-hidden border-layout":
            outline,
        },
      )}
    >
      <div className="flex-1 relative">
        <input
          placeholder="Search"
          defaultValue={searchValue}
          onChange={debounce((e) => onSearchValueChange?.(e), 800)}
          className="flex items-center w-full text-sm justify-center h-full px-10 focus:outline-none"
        />
        <div className="w-4 h-4 text-icon-primary absolute top-1/2 -translate-y-1/2 left-4">
          <Icon icon="FileSearch" />
        </div>
      </div>
    </div>
  )
}

export default TableSearch
