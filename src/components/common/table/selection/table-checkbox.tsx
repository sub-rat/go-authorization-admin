import React from "react"

import Checkbox, { CheckboxProps } from "../../checkbox/checkbox"

export interface TableCheckboxProps extends CheckboxProps {
  indeterminate?: boolean
}

export const TableCheckbox = ({
  indeterminate,
  checked,
  backGroundColor,
  ...rest
}: TableCheckboxProps) => {
  const ref = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (typeof indeterminate === "boolean" && ref?.current?.indeterminate) {
      ref.current.indeterminate = !checked && indeterminate
    }
  }, [ref, indeterminate, checked])

  return (
    <Checkbox
      checked={checked}
      backGroundColor={backGroundColor}
      isIndeterminate={indeterminate}
      {...rest}
    />
  )
}

export default TableCheckbox
