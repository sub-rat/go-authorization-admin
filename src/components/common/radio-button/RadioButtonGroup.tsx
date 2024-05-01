import React from "react"

import RadioButton from "./RadioButton"

interface DataType {
  label: string
  value: string | unknown
}

interface RadioButtonGroupProps {
  label: string | React.JSX.Element
  data: DataType[]
  active: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  label,
  data,
  active,
  onChange,
}) => (
  <div className="flex flex-col">
    <span className="mb-1 text-secondary">{label}</span>
    {data.map((x: any) => (
      <RadioButton
        key={x.value}
        label={x.label}
        name={x.label}
        value={x.value}
        checked={active === x.value}
        onChange={onChange}
      />
    ))}
  </div>
)

export default RadioButtonGroup
