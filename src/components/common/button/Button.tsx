import * as React from "react"

import { button, ButtonVariantProps } from "./styles/button.style"
import { cn } from "../../utils/cn"
import { HTMLRaraUIProps } from "../../utils/system/types"

export interface ButtonProps
  extends HTMLRaraUIProps<"button">,
    ButtonVariantProps {
  /**
   * If added, the button will show an icon before the button's label.
   */
  leadingIcon?: React.ReactNode

  /**
   * If added, the button will show an icon after the button's label.
   */
  trailIcon?: React.ReactElement

  /**
   * If true, the button will be disabled.
   */
  isDisabled?: boolean

  /**
   * If true, the button will show loader.
   */
  isLoading?: boolean

  /**
   * Id required for easier testing using cyprees and jest
   * See More: {@link https://docs.cypress.io/guides/references/best-practices#Selecting-Elements}
   */
  testid?: string

  /**
   * Add text while in loading state
   */
  loadingText?: string
  variant?: "solid" | "secondary" | "ghost" | "outline"
  shade?: "primary" | "danger" | "info" | "light"
  size?: "xs" | "sm" | "md" | "lg"
  width?: "fit" | "full"
}

/**
 * This Button component is a reusable React component that provides a customizable button with different variants, size, icons, and loading states.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      as,
      className,
      variant,
      shade = "primary",
      width,
      size,
      leadingIcon,
      isDisabled,
      isLoading = false,
      trailIcon,
      loadingText = "Loading",
      children,
      testid,
      ...props
    },
    ref,
  ) => {
    const Component = as || "div"

    const styles = React.useMemo(
      () => button({ size, variant, width, shade, className }),
      [className, shade, size, variant, width],
    )

    return (
      <Component
        className={cn(styles, "cursor-pointer select-none")}
        disabled={isDisabled || isLoading}
        ref={ref}
        data-testid={testid || children?.toString()}
        {...props}
      >
        {isLoading ? (
          <>
            {/* <Icon icon="Loader2" size="md" testid="loader-icon" className="animate-spin shrink-0 text-icon-onColor" /> */}
            {loadingText}
          </>
        ) : (
          <>
            {leadingIcon}
            {children}
            {trailIcon}
          </>
        )}
      </Component>
    )
  },
)
Button.displayName = "Rara.Button"

export { Button }
