import * as React from "react"

import { BaseInput } from "../base-input"
import { OtherKindInputProps } from "../../input.types"
import { cn } from "../../../../utils/cn"
import { Icon } from "../../../icon"

const showXButton = (value: unknown, defaultValue: unknown) => {
  if (value && value !== "") return true
  if (typeof value === "undefined" && defaultValue) return true
  return false
}

export const SearchInput = React.forwardRef<
  HTMLInputElement,
  OtherKindInputProps
>(
  (
    {
      type,
      leadingIcon,
      onClear,
      value,
      onChange,
      leadingIconClassName,
      defaultValue,
      ...props
    },
    ref,
  ) => (
    <BaseInput
      ref={ref}
      type={type}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      trailElement={
        showXButton(value, defaultValue) && (
          <Icon
            onClick={() => onClear?.()}
            className="text-icon-primary cursor-pointer mr-3"
            icon="X"
            testid="trail-icon"
          />
        )
      }
      leadingIconClassName={cn("text-icon-primary", leadingIconClassName)}
      leadingIcon={leadingIcon || "Search"}
      {...props}
    />
  ),
)

export default SearchInput

SearchInput.displayName = "SearchInput"
