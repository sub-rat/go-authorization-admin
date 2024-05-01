import { ClassNamesConfig, GroupBase } from "react-select"
import { tv, VariantProps } from "tailwind-variants"

import { Option } from "./components"
import { cn } from "../../../utils/cn"

export const selectControl = tv({
  base: [
    "px-3 border rounded outline-0 text-sm hover:cursor-pointer transition-all duration-100",
    "border border-border-layout bg-surface-layout ",
    "focus-within:border-brand-primary focus-within:ring-1 focus-within:ring-border-ring focus-within:ring-offset-1",
    "hover:border-gray9 hover:focus-within:border-brand-primary",
  ],
  variants: {
    size: {
      sm: "!h-9",
      md: "!h-10",
      lg: "!h-11 ",
      "x-sm": "!h-8",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export const selectOption = tv({
  base: [
    "!flex items-center px-3 bg-surface-layout justify-between text-secondary !text-sm  !font-normal",
    "hover:cursor-pointer hover:bg-surface-background hover:text-primary",
  ],
  variants: {
    size: {
      sm: "h-8",
      md: "h-9",
      lg: "h-10 ",
      "x-sm": "h-7",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export const getClassName: (
  error: boolean,
  isDisabled: boolean,
  addItemHandler?: () => void,
  size?: VariantProps<typeof selectControl>["size"],
) => ClassNamesConfig<Option, boolean, GroupBase<Option>> = (
  error,
  isDisabled,
  addItemHandler,
  size,
) => ({
  control: () =>
    cn(selectControl({ size }), {
      "bg-surface-disabled cursor-not-allowed": isDisabled,
      "hover:border-border-element": !isDisabled,
      "border-critical-primary focus-within:border-critical-primary focus-within:ring-border-ring hover:border-critical-primary":
        error,
    }),
  placeholder: () => cn("text-secondary pl-1 py-0.5 text-sm"),
  valueContainer: () => "",
  menu: () => "!z-30",

  indicatorsContainer: () => "gap-1",
  clearIndicator: () =>
    cn("text-secondary rounded-md hover:text-primary hover:text-medium"),
  indicatorSeparator: () => cn("hidden"),
  dropdownIndicator: (props) =>
    cn("hover:text-icon-primary text-icon-secondary rounded-md", {
      "text-brand-primary": props?.selectProps?.menuIsOpen,
    }),
  menuList: () =>
    cn(
      "mt-1 !z-30 bg-surface-layout shadow-lg border border-layout rounded max-h-[200px] overflow-y-auto ",
      {
        "border-b-0 rounded-b-none": !!addItemHandler,
      },
    ),
  noOptionsMessage: () =>
    cn(
      "text-sm bg-surface-layout text-disabled h-20 flex items-center justify-center py-2 font-medium",
    ),

  option: ({ isSelected, isDisabled: optionIsDisabled }) =>
    cn(selectOption({ size }), {
      "font-semibold  text-primary text-sm ": isSelected,
      "cursor-not-allowed bg-surface-disabled text-secondary ":
        optionIsDisabled,
    }),
})

export default getClassName
