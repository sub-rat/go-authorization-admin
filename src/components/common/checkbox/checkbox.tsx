import React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { tv, VariantProps } from "tailwind-variants"

import { Icon } from "../icon"
import { cn } from "../../utils/cn"

const checkbox = tv({
  base: [
    "flex items-center justify-center transition-all",
    "data-[state=checked]:bg-brand-primary",
    "data-[state=unchecked]:border-[1.5px] data-[state=unchecked]:border-element outline-none",
    "data-[state=unchecked]:bg-surface-layout",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "focus-within:ring-1 focus-within:border-brand-primary focus-within:ring-brand-primary/50 focus-within:ring-offset-1",
  ],
  variants: {
    size: {
      sm: "h-3 w-3 rounded-sm",
      md: "h-4 w-4 rounded-sm",
      lg: "h-6 w-6 rounded-md",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

type CheckboxPrimitiveProps = React.ComponentProps<
  typeof CheckboxPrimitive.Root
>

export interface CheckboxProps
  extends CheckboxPrimitiveProps,
    VariantProps<typeof checkbox> {
  /**
   * Size of the checkbox
   */
  size?: "sm" | "md" | "lg"

  /**
   * Label text to display next to the checkbox
   */
  label?: string

  /**
   * Unique id for label
   */
  id?: string

  /**
   *   Whether the checkbox is indeterminate state
   */
  isIndeterminate?: boolean

  /**
   * Whether the checkbox is currently checked
   */
  checked?: boolean

  /**
   * Whether the checkbox is disabled
   */
  disabled?: boolean

  /**
   * Id required for easier testing using cypress and jest
   * See More: {@link https://docs.cypress.io/guides/references/best-practices#Selecting-Elements}
   */
  testid?: string
  /**
   * Add background color for the checkbox
   */
  backGroundColor?: string | number
}

const iconSize = {
  sm: "xs",
  md: "sm",
  lg: "lg",
} as const

export const Checkbox = ({
  size = "md",
  label,
  className,
  disabled,
  isIndeterminate,
  id,
  backGroundColor,
  testid,
  checked,
  ...props
}: CheckboxProps) => (
  <div
    className={cn("flex items-center gap-1", {
      "gap-0 justify-center": !label,
    })}
  >
    <CheckboxPrimitive.Root
      id={id}
      data-testid={testid}
      disabled={disabled}
      className={cn(checkbox({ className, size }))}
      checked={isIndeterminate || checked}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={"text-icon-onColor"}
        style={{
          background: backGroundColor,
        }}
      >
        <Icon
          testid="checkid"
          icon={isIndeterminate ? "Minus" : "Check"}
          className="text-icon-onColor"
          size={iconSize[size]}
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    {label ? (
      <label
        className={cn("text-sm font-normal cursor-pointer", {
          "text-gray8 cursor-not-allowed font-medium": disabled,
        })}
        htmlFor={id}
      >
        {label}
      </label>
    ) : null}
  </div>
)

export default Checkbox
