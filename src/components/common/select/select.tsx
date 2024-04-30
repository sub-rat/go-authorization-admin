import * as React from "react"
import { ForwardedRef, Ref, useMemo } from "react"
import ReactSelect, { GroupBase, SelectInstance } from "react-select"

import { useMulti } from "./hooks/useMulti"
import { SelectOption, SelectProps } from "./select.types"
import { getComponents } from "./styles/components"
import { getClassName } from "./styles/styles"
import { cn } from "../../utils/cn"

export const Select = React.forwardRef(function Select(
  {
    errorText,
    isMulti = false,
    label,
    options = [],
    value,
    hasRadioOption,
    placeholder,
    isRequired,
    onChange,
    addItemHandler,
    addItemLabel,
    testId,
    isDisabled,
    dropDownIcon,
    size,
    ...rest
  }: SelectProps,
  ref: ForwardedRef<HTMLSelectElement>,
) {
  const {
    isOptionSelected,
    getOptions,
    getValue,
    onChange: multiOnChange,
  } = useMulti({
    value: value as [],
    isMulti,
    onChange,
    options,
  })
  const components = useMemo(
    () =>
      getComponents(hasRadioOption, addItemHandler, addItemLabel, dropDownIcon),
    [hasRadioOption, addItemHandler, addItemLabel, dropDownIcon],
  )

  const className = useMemo(
    () => getClassName(!!errorText, !!isDisabled, addItemHandler, size),
    [errorText, isDisabled, addItemHandler, size],
  )

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <span className="text-primary text-sm font-medium">
          {isRequired ? `${label} *` : label}
        </span>
      )}

      <div className={cn("w-full", { "cursor-not-allowed ": !!isDisabled })}>
        <ReactSelect<SelectOption, boolean, GroupBase<SelectOption>>
          data-testId={testId}
          unstyled
          key={
            !isMulti
              ? `my_unique_select_key__${JSON.stringify(value)}`
              : "isMulti"
          }
          id="select"
          classNames={className}
          instanceId="select"
          isOptionSelected={isOptionSelected}
          placeholder={placeholder ?? "-- Select --"}
          options={getOptions()}
          value={getValue()}
          controlShouldRenderValue={!isMulti}
          closeMenuOnSelect={!isMulti}
          isMulti={isMulti}
          hideSelectedOptions={false}
          isOptionDisabled={(option: SelectOption) => !!option.disabled}
          isDisabled={isDisabled}
          onChange={multiOnChange}
          components={components}
          ref={
            ref as unknown as
              | Ref<
                  SelectInstance<SelectOption, boolean, GroupBase<SelectOption>>
                >
              | undefined
          }
          {...rest}
        />
      </div>

      {/* todo here we must have helper text */}
    </div>
  )
})

export default Select

export * from "./select.types"
