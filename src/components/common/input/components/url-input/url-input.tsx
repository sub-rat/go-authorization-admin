import * as React from "react"

import { BaseInput } from "../base-input"
import { OtherKindInputProps } from "../../input.types"
import { cn } from "../../../../utils/cn"

export const URLInput = React.forwardRef<HTMLInputElement, OtherKindInputProps>(
  ({ type, leadingIcon, leadingIconClassName, ...props }, ref) => (
    <BaseInput
      ref={ref}
      type={type}
      leadingIconClassName={cn("text-icon-primary", leadingIconClassName)}
      leadingIcon={leadingIcon || "Link2"}
      leadingElement={<h1 className="bg-surface-muted">https://</h1>}
      {...props}
    />
  ),
)

export default URLInput
URLInput.displayName = "URLInput"
