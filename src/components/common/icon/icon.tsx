import * as React from "react"
import * as icons from "lucide-react"
import { tv, VariantProps } from "tailwind-variants"

const IconsVariants = tv({
  base: "text-icon-primary",
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-8 w-8",
    },
  },
})

export type IconType = keyof typeof icons

export interface IconProps
  extends React.SVGAttributes<SVGSVGElement>,
    VariantProps<typeof IconsVariants> {
  /**
   * Id required for easier testing using cyprees and jest
   * See More: {@link https://docs.cypress.io/guides/references/best-practices#Selecting-Elements}
   */
  testid?: string

  /**
   * The icon component to render. Pass a string belonging to lucide react.
   */
  icon?: IconType

  /**
   * Custom SVG Icon. Pass a svg as children
   */
  children?: React.ReactNode
  size?: "xs" | "sm" | "md" | "lg" | "xl"
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = "md", className, icon, testid, children, ...props }, ref) => {
    // If children is defined, svg element is only passed here.
    if (children) {
      return (
        <div
          data-testid={testid}
          className={IconsVariants({ className, size })}
        >
          {children}
        </div>
      )
    }

    if (typeof icon !== "string" && typeof icon !== "undefined")
      return icon as unknown as React.ReactElement

    // if icon is defined as string then render it.
    if (icon) {
      const LucideIcon = icons[icon as IconType] as icons.LucideIcon

      return (
        <LucideIcon
          data-testid={testid}
          ref={ref}
          className={IconsVariants({ className, size })}
          {...props}
        />
      )
    }

    // If nothing works render a fallback svg
    return (
      <icons.HelpCircleIcon
        data-testid={testid}
        ref={ref}
        className={IconsVariants({ className, size })}
        {...props}
      />
    )
  },
)

Icon.displayName = "Rara.Icon"

export default Icon
