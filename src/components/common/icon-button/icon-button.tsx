import * as React from "react"
import * as icons from "lucide-react"
import { tv, VariantProps } from "tailwind-variants"

import Icon from "../icon/icon"
import { cn } from "../../utils/cn"

const commonStyles = [
  "inline-flex items-center justify-center gap-x-2 p-3",
  "text-sm font-medium rounded-md",
  "transition-all duration-200",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  "disabled:opacity-50 ring-offset-background disabled:cursor-not-allowed",
]

const buttonSizes = {
  xs: "p-1.5 rounded-sm",
  sm: "p-2",
  md: "p-2.5",
  lg: "p-3",
  xl: "p-3.5",
}

const primaryVariants = tv({
  base: commonStyles,
  variants: {
    variant: {
      solid: "bg-brand-primary text-onColor hover:bg-brand-primary/90",
      secondary: "bg-surface-muted text-primary ",
      ghost:
        "hover:bg-brand-primary/10 hover:text-brand-primary  text-brand-primary",
      link: "underline-offset-4  text-brand-primary hover:underline ",
    },
    size: buttonSizes,
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
})

const dangerVariants = tv({
  base: commonStyles,
  variants: {
    variant: {
      solid: "bg-critical-primary text-onColor hover:bg-critical-primary/90",
      secondary: "bg-critical-background text-critical-primary  ",

      ghost:
        "hover:bg-critical-primary/10 hover:text-critical-primary  text-critical-primary",
      link: "underline-offset-4  text-critical-primary hover:underline ",
    },

    size: buttonSizes,
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
})

const neutralVariants = tv({
  base: commonStyles,
  variants: {
    variant: {
      solid: "bg-text-primary text-onColor hover:bg-interactive-depressed/90",
      secondary: "bg-surface-highlight text-primary  ",

      ghost: "hover:bg-surface-muted text-primary",
      link: "underline-offset-4  text-primary hover:underline ",
    },

    size: buttonSizes,
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
})

const variants = {
  primary: primaryVariants,
  danger: dangerVariants,
  neutral: neutralVariants,
}

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof primaryVariants> {
  /**
   * Shades for the button
   */
  variant?: "solid" | "secondary" | "ghost" | "link"
  shade?: "primary" | "danger" | "neutral"
  width?: "fit" | "full"

  /**
   * If added, the button will show an icon.
   */
  icon?: keyof typeof icons

  /**
   * If true, the button will be disabled.
   */
  isDisabled?: boolean

  /**
   * If true, the button will show loader.
   */
  isLoading?: boolean

  /**
   * Id required for easier testing using cypress and jest
   * See More: {@link https://docs.cypress.io/guides/references/best-practices#Selecting-Elements}
   */
  testid?: string

  /**
   * Button sizes
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl"

  /**
   * Accessibility prop for describing icon button.
   */
  "aria-label": string
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      isDisabled,
      isLoading = false,
      testid,
      variant,
      shade = "primary",
      className,
      icon,
      size,
      ...props
    },
    ref,
  ) => {
    const variantStyles = variants[shade]
    return (
      <button
        data-testid={testid || props["aria-label"]}
        className={cn(variantStyles({ className, variant, size }))}
        disabled={isDisabled || isLoading}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <Icon
            icon="Circle"
            testid="test-id"
            className="animate-spin mr-1"
            size={size}
          />
        ) : (
          <Icon icon={icon} size={size} testid="test-id" />
        )}
      </button>
    )
  },
)

IconButton.displayName = "IconButton"

export default IconButton
