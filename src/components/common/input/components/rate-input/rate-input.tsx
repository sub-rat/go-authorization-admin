import * as React from "react"

import { BaseInput } from "../base-input"
import { OtherKindInputProps } from "../../input.types"
import { cn } from "../../../../utils/cn"

export const RateInput = React.forwardRef<
  HTMLInputElement,
  OtherKindInputProps
>(({ trailIcon, trailIconClassName, ...props }, ref) => (
  <BaseInput
    ref={ref}
    trailIcon={trailIcon || "Percent"}
    trailIconClassName={cn("text-icon-primary", trailIconClassName)}
    {...props}
  />
))

export default RateInput

RateInput.displayName = "RateInput"
