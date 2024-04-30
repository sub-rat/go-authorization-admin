import { tv, type VariantProps } from "tailwind-variants"

const button = tv({
  base: [
    "inline-flex items-center justify-center gap-x-2 group font-semibold",
    "text-sm rounded-md",
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-1",
    "disabled:opacity-50  disabled:cursor-not-allowed",
  ],
  variants: {
    variant: {
      solid: "",
      secondary: "",
      ghost: "",
      outline: "",
    },
    shade: {
      primary: "",
      danger: "",
      info: "",
      light: "",
    },
    size: {
      xs: "h-7 py-1 px-2 rounded-sm ",
      sm: "h-8 py-1 px-2 rounded-md text-sm",
      md: "h-10 py-2 px-4 rounded-md",
      lg: "h-12 py-3 px-4 rounded-md",
    },
    width: {
      fit: "w-fit",
      full: "w-full",
    },
  },
  defaultVariants: {
    variant: "solid",
    shade: "primary",
    width: "fit",
    size: "md",
  },
  compoundVariants: [
    {
      variant: "solid",
      shade: "primary",
      className: "bg-brand-primary text-onColor hover:bg-brand-primary/90",
    },
    {
      variant: "solid",
      shade: "danger",
      className:
        "bg-critical-primary text-onColor hover:bg-critical-primary/90",
    },
    {
      variant: "solid",
      shade: "info",
      className: "bg-info-primary text-onColor hover:bg-info-primary/90",
    },

    {
      variant: "secondary",
      shade: "primary",
      className:
        "bg-surface-muted text-primary hover:border-border-layout border border-transparent",
    },
    {
      variant: "secondary",
      shade: "danger",
      className:
        "bg-critical-background text-critical-primary border border-transparent hover:border-critical-primary hover:text-critical-primary",
    },
    {
      variant: "secondary",
      shade: "info",
      className:
        "bg-info-background text-info-primary border border-transparent hover:border-info-primary hover:text-info-primary",
    },

    {
      variant: "ghost",
      shade: "primary",
      className:
        "hover:bg-brand-primary/10 hover:text-brand-primary text-brand-primary",
    },
    {
      variant: "ghost",
      shade: "danger",
      className:
        "hover:bg-critical-primary/10 hover:text-critical-primary text-critical-primary",
    },
    {
      variant: "ghost",
      shade: "info",
      className:
        "hover:bg-info-primary/10 hover:text-info-primary text-info-primary",
    },
    {
      variant: "ghost",
      shade: "light",
      className: "hover:text-gray-400 text-white",
    },
    {
      variant: "outline",
      shade: "primary",
      className: "border border-border-layout hover:bg-surface-muted",
    },
    {
      variant: "outline",
      shade: "danger",
      className:
        "border border-critical-primary hover:border-transparent hover:bg-critical-background text-critical-primary",
    },
    {
      variant: "outline",
      shade: "info",
      className:
        "border border-info-primary text-info-primary hover:bg-info-primary/10 hover:border-transparent",
    },

    // {
    //   variant: 'link',
    //   shade: 'primary',
    //   className: 'underline-offset-4 text-brand-primary hover:underline',
    // },

    // {
    //   variant: 'link',
    //   shade: 'danger',
    //   className: 'underline-offset-4 text-critical-primary hover:underline',
    // },
    // {
    //   variant: 'link',
    //   shade: 'info',
    //   className: 'underline-offset-4 text-info-primary hover:underline',
    // },
  ],
})

export type ButtonVariantProps = VariantProps<typeof button>

export { button }
