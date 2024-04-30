import * as React from "react"

import { BaseInput } from "../base-input"
import { OtherKindInputProps } from "../../input.types"
import { cn } from "../../../../utils/cn"
import { Icon } from "../../../icon"

export const PasswordInput = React.forwardRef<
  HTMLInputElement,
  OtherKindInputProps
>(({ type, leadingIcon, testid, leadingIconClassName, ...props }, ref) => {
  const [isVisible, setIsVisible] = React.useState(false)

  const handleChange = () => {
    setIsVisible(!isVisible)
  }

  const isPasswordType = (inputType: string | undefined) => {
    if (inputType === "password") {
      if (isVisible) {
        return "text"
      }
      return "password"
    }
    return inputType
  }

  return (
    <BaseInput
      testid={testid}
      ref={ref}
      type={isPasswordType(type)}
      leadingIconClassName={cn("text-icon-primary", leadingIconClassName)}
      leadingIcon={leadingIcon || "Lock"}
      trailElement={
        <PasswordIcon
          testid="trail-icon"
          isVisible={isVisible}
          handleChange={handleChange}
        />
      }
      {...props}
    />
  )
})

export default PasswordInput

PasswordInput.displayName = "PasswordInput"

export const PasswordIcon = ({
  isVisible,
  handleChange,
  testid,
}: {
  isVisible: boolean
  handleChange: () => void
  testid?: string
}) => (
  <div
    className="focus:outline-none pr-3"
    onKeyDown={handleChange}
    role="button"
    tabIndex={0}
    onClick={handleChange}
  >
    <Icon
      className="text-icon-primary transition ease-in-out"
      icon={isVisible ? "EyeOff" : "Eye"}
      testid={testid as string}
    />
  </div>
)
