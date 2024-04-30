import { useRef } from "react"
import { ActionMeta, MultiValue, SingleValue } from "react-select"

import { SelectOption } from "../select.types"

interface IUseMultiProps {
  isMulti: boolean
  value: MultiValue<SelectOption> | undefined
  options: SelectOption[]
  onChange?: (
    newValue: MultiValue<SelectOption> | SingleValue<SelectOption>,
    actionMeta: ActionMeta<
      SingleValue<SelectOption> | MultiValue<SelectOption>
    >,
  ) => void
}

const selectAllOption = {
  value: "<SELECT_ALL>",
  label: "All",
}

export const useMulti = ({
  isMulti,
  value,
  options,
  onChange: propOnChange,
}: IUseMultiProps) => {
  const valueRef = useRef(value)

  valueRef.current = value

  if (!isMulti || !propOnChange) {
    return {
      isOptionSelected: undefined,
      getOptions: () => options,
      getValue: () => value,
      onChange: propOnChange,
    }
  }

  const valueRefCurrent = valueRef?.current

  const isSelectAllSelected = () => valueRefCurrent?.length === options?.length

  const isOptionSelected = (option: SelectOption) =>
    valueRef?.current?.some(
      ({ value: newValue }: SelectOption) => newValue === option.value,
    ) || isSelectAllSelected()

  const getOptions = () => [selectAllOption, ...options]

  const getValue = () => (isSelectAllSelected() ? [selectAllOption] : value)

  const onChange = (
    newValue: MultiValue<SelectOption> | SingleValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>,
  ) => {
    const { action, option, removedValue } = actionMeta

    if (action === "select-option" && option?.value === selectAllOption.value) {
      propOnChange(options, actionMeta)
    } else if (
      (action === "deselect-option" &&
        option?.value === selectAllOption.value) ||
      (action === "remove-value" &&
        removedValue.value === selectAllOption.value)
    ) {
      propOnChange([], actionMeta)
    } else if (
      actionMeta.action === "deselect-option" &&
      isSelectAllSelected()
    ) {
      propOnChange(
        options.filter(
          ({ value: optionValue }) => optionValue !== option?.value,
        ),
        actionMeta,
      )
    } else {
      propOnChange(newValue || [], actionMeta)
    }
  }

  return {
    isOptionSelected,
    getOptions,
    getValue,
    onChange,
  }
}

export default useMulti
