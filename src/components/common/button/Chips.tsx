import React, { CSSProperties } from "react"

interface ChipsProps {
  type: "round" | "square"
  text: React.ReactNode
  isSelected: boolean
  onClickChip?: React.MouseEventHandler<HTMLButtonElement>
  value?: string
}

export const Chips = ({ type, text, isSelected, onClickChip }: ChipsProps) => {
  const chipsstyle: CSSProperties = {
    backgroundColor: isSelected ? "rgba(213, 230, 246, 1)" : "",
    borderColor: isSelected ? "rgba(15, 47, 76, 1)" : "rgba(224, 230, 240, 1)",
    borderStyle: "solid",
    borderWidth: "1px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    fontSize: "14px",
    fontWeight: 500,
  }

  switch (type) {
    case "round":
      chipsstyle.borderRadius = "16px"
      chipsstyle.padding = "4px 16px"
      break
    case "square":
      chipsstyle.borderRadius = "4px"
      chipsstyle.padding = "8px 16px"
      break
    default:
      break
  }

  return (
    <div>
      <button style={chipsstyle} onClick={onClickChip} className="font-inter">
        {text}
      </button>
    </div>
  )
}
