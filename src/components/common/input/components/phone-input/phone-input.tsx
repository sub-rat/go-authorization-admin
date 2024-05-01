import * as React from "react"

import { BaseInput } from "../base-input"
import { OtherKindInputProps } from "../../input.types"
import { cn } from "../../../../utils/cn"

export const PhoneInput = React.forwardRef<
  HTMLInputElement,
  OtherKindInputProps
>(({ type, leadingIcon, testid, leadingIconClassName, ...props }, ref) => (
  <BaseInput
    testid={testid}
    ref={ref}
    type={type}
    leadingIcon={leadingIcon || "Phone"}
    leadingIconClassName={cn("text-icon-primary", leadingIconClassName)}
    {...props}
  />
))

export default PhoneInput

PhoneInput.displayName = "PhoneInput"
