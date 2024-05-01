import React from "react"

interface RadioButtonProps {
  label: string
  name: string
  value: string
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  value,
  checked,
  onChange,
}) => (
  <label
    htmlFor={label}
    className="inline-flex items-center cursor-pointer p-1"
  >
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      // style={{ backgroundColor: checked ? '#154068' : '#fff' }}
      className="form-radio w-4 h-4 cursor-pointer border-black-700 focus-visible:outline-none"
    />
    <span className="ml-2 text-primary text-base">{label}</span>
  </label>
)
export default RadioButton
