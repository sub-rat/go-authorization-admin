import * as React from "react"
import * as ModalPrimitive from "@radix-ui/react-dialog"
import { tv, VariantProps } from "tailwind-variants"

import { Button, ButtonProps } from "../button/Button"
import Icon from "../icon/icon"
import { cn } from "../../utils/cn"

const ModalRoot = ModalPrimitive.Root

const ModalTrigger = ModalPrimitive.Trigger

const ModalPortal = ({ ...props }: ModalPrimitive.DialogPortalProps) => (
  <ModalPrimitive.Portal {...props} />
)
ModalPortal.displayName = ModalPrimitive.Portal.displayName

const ModalOverlay = React.forwardRef<
  React.ElementRef<typeof ModalPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof ModalPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <ModalPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 h-  opacity-50 bg-black data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
))
ModalOverlay.displayName = ModalPrimitive.Overlay.displayName

const modalContent = tv({
  base: "fixed flex flex-col z-50 gap-4 bg-surface-layout w-full shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:duration-200",

  variants: {
    width: {
      xs: "max-w-xs",
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl",
      full: "max-w-full",
    },
    side: {
      center:
        "left-[50%] top-[50%] max-h-[80vh] rounded-lg  translate-x-[-50%] translate-y-[-50%] border data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-1/2 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-1/2",
      top: "inset-x-0 max-h-[80vh] top-0 border-b mx-auto rounded-b-lg data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
      bottom:
        "inset-x-0 bottom-0 max-h-[80vh] mx-auto rounded-t-lg  border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
      left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
      right:
        "inset-y-0 right-0 h-full w-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
    },
  },
  defaultVariants: {
    width: "2xl",
    side: "center",
  },
})

type ModalContentPrimitiveProps = React.ComponentPropsWithoutRef<
  typeof ModalPrimitive.Content
>

export interface ModelContentProps
  extends ModalContentPrimitiveProps,
    VariantProps<typeof modalContent> {}

const ModalContent = React.forwardRef<
  React.ElementRef<typeof ModalPrimitive.Content>,
  ModelContentProps
>(({ className, children, width, side, ...props }, ref) => (
  <ModalPortal>
    <ModalOverlay />
    <ModalPrimitive.Content
      ref={ref}
      className={cn(
        modalContent({
          className,
          width,
          side,
        }),
      )}
      {...props}
    >
      {children}
    </ModalPrimitive.Content>
  </ModalPortal>
))
ModalContent.displayName = ModalPrimitive.Content.displayName

const ModalHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "px-5 flex items-center justify-between border-b border-layout",
      className,
    )}
    {...props}
  >
    {props.children}
    <ModalPrimitive.Close asChild>
      {/* <IconButton aria-label="close" variant="ghost" shade="neutral" icon="X" /> */}
    </ModalPrimitive.Close>
  </div>
)
ModalHeader.displayName = "ModalHeader"

const ModalFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex gap-2 p-4 items-center justify-between border-t border-layout",
      className,
    )}
    {...props}
  />
)
ModalFooter.displayName = "ModalFooter"

const ModalTitle = React.forwardRef<
  React.ElementRef<typeof ModalPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ModalPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ModalPrimitive.Title
    ref={ref}
    className={cn("text-base font-semibold text-primary", className)}
    {...props}
  />
))
ModalTitle.displayName = ModalPrimitive.Title.displayName

const ModalDescription = React.forwardRef<
  React.ElementRef<typeof ModalPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ModalPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ModalPrimitive.Description
    ref={ref}
    className={cn("text-sm leading-5 text-primary", className)}
    {...props}
  />
))
ModalDescription.displayName = ModalPrimitive.Description.displayName

interface ModalProps {
  trigger?: React.ReactNode
  title?: React.ReactNode
  description?: string
  children?: React.ReactNode

  primaryButton?: ButtonProps
  secondaryButton?: ButtonProps

  footerLeft?: React.ReactNode

  width?: VariantProps<typeof modalContent>["width"]
  side?: VariantProps<typeof modalContent>["side"]

  defaultOpen?: boolean
  open?: boolean
  onClose?: (newOpen: boolean) => void

  contentLayout?: "padded" | "default"
  status?: "create" | "edit" | "process" | "alert" | "none"
}

const Modal = ({
  trigger,
  title,
  description,
  children,
  primaryButton,
  secondaryButton,
  width,
  open,
  side,
  onClose,
  defaultOpen,
  contentLayout = "padded",
  footerLeft,
  status = "none",
}: ModalProps) => (
  <ModalRoot open={open} onOpenChange={onClose} defaultOpen={defaultOpen}>
    {trigger && <ModalTrigger asChild>{trigger}</ModalTrigger>}

    <ModalContent width={width} side={side}>
      <ModalHeader
        className={cn({
          "min-h-[60px]": !description,
          "min-h-[77px] max-h-[77px]": description,
        })}
      >
        <div className="flex gap-4 items-center h-full">
          <StatusIcon status={status} />
          <div>
            <ModalTitle>{title}</ModalTitle>
            {description && <ModalDescription>{description}</ModalDescription>}
          </div>
        </div>
      </ModalHeader>
      <div className={cn({ "p-4": contentLayout === "padded" }, "flex-1")}>
        {" "}
        {children}
      </div>

      {footerLeft || primaryButton || secondaryButton ? (
        <ModalFooter>
          <div className="">{footerLeft}</div>
          <div className="gap-3 flex justify-end items-center">
            {primaryButton && <Button {...primaryButton} />}
            {secondaryButton && (
              <Button variant="secondary" {...secondaryButton} />
            )}
          </div>
        </ModalFooter>
      ) : (
        <div className="h-2" />
      )}
    </ModalContent>
  </ModalRoot>
)

const statusIcons = {
  create: <Icon icon="FilePlus2" className="text-success-primary" />,
  edit: <Icon icon="Edit3" className="text-info-primary" />,
  process: <Icon icon="AlertTriangle" className="text-warning-primary" />,
  alert: <Icon icon="Trash" className="text-critical-primary" />,
  none: null,
}

const statusIconClasses = {
  create: "bg-success-background text-success-primary",
  edit: "bg-info-background text-info-primary",
  process: "bg-warning-background text-warning-primary",
  alert: "bg-critical-background text-critical-primary",
  none: "",
}

const StatusIcon = ({ status = "none" }: { status: ModalProps["status"] }) => {
  const icon = statusIcons[status]

  return (
    icon && (
      <div
        className={cn(
          "inline-flex justify-center items-center p-2 rounded-full",
          statusIconClasses[status],
        )}
      >
        {icon}
      </div>
    )
  )
}

const useDisclosure = () => {
  const [open, setOpen] = React.useState(false)

  const onToggle = () => setOpen((prev) => !prev)

  const onClose = () => setOpen(false)

  const onOpen = () => setOpen(false)

  return {
    open,
    onToggle,
    onClose,
    onOpen,
  }
}

export {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalRoot,
  ModalTitle,
  ModalTrigger,
  useDisclosure,
}
