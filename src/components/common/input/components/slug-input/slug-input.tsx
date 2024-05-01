import * as React from "react"

import { BaseInput } from "../base-input"
import { SlugInputProps } from "../../input.types"

export const SlugInput = React.forwardRef<HTMLInputElement, SlugInputProps>(
  ({ type, trailIcon, slugOptions, onChange, ...props }, ref) => {
    const [value, setValue] = React.useState<{
      slug: string | undefined
      value: string | undefined
    }>({ slug: slugOptions?.[0]?.value ?? "", value: "" })
    return (
      <BaseInput
        ref={ref}
        type={type}
        value={value.value}
        trailIcon={trailIcon}
        trailElement={
          !trailIcon && (
            <SlugIcon
              slug={value?.slug || "Hello"}
              handleChange={(e: string | undefined) => {
                setValue((pre) => ({ ...pre, slug: e }))

                onChange?.(value)
              }}
              slugOptions={slugOptions ?? []}
            />
          )
        }
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue((pre) => ({ ...pre, value: e?.target?.value }))
          onChange?.({ ...value, value: e.target.value })
        }}
        {...props}
      />
    )
  },
)

export default SlugInput

SlugInput.displayName = "SlugInput"

interface SlugIconProps {
  slugOptions: { label: string; value: string }[]
  handleChange: (e: string | undefined) => void
  slug: string | undefined
}

const SlugIcon = ({ slugOptions, slug, handleChange }: SlugIconProps) => (
  <button
    className="flex items-center min-w-[24px] focus:outline-none font-normal hover:font-medium"
    onKeyDown={() => {
      const index = slugOptions?.findIndex(
        (obj) =>
          obj.value === slugOptions?.find((e) => e.value === slug)?.value,
      )
      if (index + 1 === slugOptions?.length) {
        handleChange(slugOptions?.[0]?.value)
      } else {
        handleChange(slugOptions?.[index + 1]?.value)
      }
    }}
    tabIndex={0}
    onClick={() => {
      const index = slugOptions?.findIndex(
        (obj) =>
          obj.value === slugOptions?.find((e) => e.value === slug)?.value,
      )

      if (index + 1 === slugOptions?.length) {
        handleChange(slugOptions?.[0]?.value)
      } else {
        handleChange(slugOptions?.[index + 1]?.value)
      }
    }}
  >
    {slug}
  </button>
)
