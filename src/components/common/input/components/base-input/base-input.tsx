import * as React from "react"
import { tv, VariantProps } from "tailwind-variants"

import { IconElements } from "./input-icon-elements"
import { Message } from "./input-message"
import { CommonInputProps } from "../../input.types"
import { cn } from "../../../../utils/cn"

export const containerCss = tv({
  base: [],

  variants: {
    size: {
      sm: "h-9",
      md: "h-10",
      lg: "h-11 ",
      "x-sm": "h-8",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

type BaseInputProps = CommonInputProps & VariantProps<typeof containerCss>

export const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  (
    {
      leadingIcon,
      trailIcon,
      className,
      errorText,
      helperText,
      label = "",
      isRequired,
      isDisabled,
      isInvalid,
      trailElement,
      leadingElement,
      isLoading,
      loadingIcon,
      loaderPosition,
      size,
      trailIconClassName,
      leadingIconClassName,
      loadingIconClassName,
      type,
      ...props
    },
    ref,
  ) => (
    <div className="flex flex-col gap-1">
      {label && (
        <span className="text-primary font-medium text-[13px]">
          {isRequired ? `${label} *` : label}
        </span>
      )}
      <div
        className={cn(
          containerCss({ size, className }),
          [
            "group",
            "flex items-center w-full border rounded",
            "border border-border-layout bg-surface-layout ",
            "focus-within:border-brand-primary focus-within:ring-1 focus-within:ring-border-ring focus-within:ring-offset-1",
            "hover:border-gray9 hover:focus-within:border-brand-primary",
            "transition-all duration-100",
          ],
          {
            "border  border-critical-primary  focus-within:ring-critical-primary/50 hover:focus-within:border-critial-primary  focus-within:border-critical-primary":
              isInvalid || errorText,
            "bg-surface-disabled cursor-not-allowed": isDisabled,
            "hover:border-border-element": !isDisabled,
          },
        )}
      >
        <IconElements
          testId={props.testid}
          showLoader={loaderPosition === "left" || loaderPosition === "both"}
          className={cn("", {
            "pl-3":
              leadingIcon ||
              (isLoading &&
                (loaderPosition === "left" || loaderPosition === "both")),
            "pointer-events-none": isDisabled,
            "h-full": true,
          })}
          element={leadingElement}
          icon={leadingIcon}
          loadingIconClassName={loadingIconClassName}
          iconClassName={leadingIconClassName}
          isLoading={isLoading}
          loadingIcon={loadingIcon}
        />

        <input
          disabled={isDisabled}
          ref={ref}
          type={type}
          data-testid={props.testid}
          {...props}
          className={cn(
            "border-none w-full px-3 rounded",
            "text-sm font-normal text-primary",
            "focus:border-none focus:outline-none focus-visible:border-none h-full",
            {
              "bg-surface-disabled cursor-not-allowed text-disabled":
                isDisabled,
              "group-hover:border-border-element": !isDisabled,
            },
          )}
        />

        <IconElements
          testId={props.testid}
          showLoader={
            loaderPosition
              ? loaderPosition === "right" || loaderPosition === "both"
              : isLoading
          }
          className={cn("", {
            "pr-3":
              trailIcon ||
              (isLoading && !loaderPosition) ||
              (isLoading &&
                loaderPosition &&
                (loaderPosition === "right" || loaderPosition === "both")),
            "pointer-events-none": isDisabled,
          })}
          element={trailElement}
          icon={trailIcon}
          iconClassName={trailIconClassName}
          loadingIconClassName={loadingIconClassName}
          isLoading={isLoading}
          loadingIcon={loadingIcon}
        />
      </div>

      <Message
        errorText={errorText}
        isDisabled={isDisabled}
        helperText={helperText}
      />
    </div>
  ),
)

BaseInput.displayName = "BaseInput"
export default BaseInput
