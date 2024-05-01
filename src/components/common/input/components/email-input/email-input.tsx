import * as React from "react"

import { BaseInput } from "../base-input"
import { OtherKindInputProps } from "../../input.types"
import { cn } from "../../../../utils/cn"

export const EmailInput = React.forwardRef<
  HTMLInputElement,
  OtherKindInputProps
>(({ type, leadingIcon, testid, leadingIconClassName, ...props }, ref) => (
  <BaseInput
    ref={ref}
    type={type}
    testid={testid}
    leadingIconClassName={cn("text-icon-primary", leadingIconClassName)}
    leadingIcon={leadingIcon || "Mail"}
    {...props}
  />
))

export default EmailInput

EmailInput.displayName = "EmailInput"
