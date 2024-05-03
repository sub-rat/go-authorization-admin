import * as React from "react"

import { cn } from "../../../utils/cn"
import { TableRowStyle, TableSize, TableVariant } from "../table.types"

interface TableContainerProps {
  children: React.ReactNode
  outline?: boolean
  hasControls?: boolean
  hasPagination?: boolean
  className?: string
}

export const TableContainer = ({
  children,
  outline,
  hasControls,
  hasPagination,
  className,
}: TableContainerProps) => (
  <div
    className={cn(
      "relative block overflow-y-auto h-auto whitespace-nowrap border rounded-md",
      {
        "border-0 rounded-none": !outline,
        "border-t-0 rounded-t-none": hasControls,
        "rounded-b-none": hasPagination,
      },
      className,
    )}
  >
    {children}
  </div>
)

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <table
    ref={ref}
    className={cn(
      "w-full bg-white caption-bottom border-separate border-spacing-0 text-sm",
      className,
    )}
    {...props}
  />
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement> & { outline?: boolean }
>(({ className, outline, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      "border border-layout",
      {
        "rounded-md border border-t-0 rounded-t-none": outline,
      },
      className,
    )}
    {...props}
  />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn("group tbody h-auto", className)} {...props} />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "bg-primary font-medium text-primary-foreground border-t border-t-layout",
      className,
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "transition-colors h-[37px] bg-white group-[.tbody]:hover:bg-surface-highlight data-[state=selected]:bg-surface-highlight [&:last-child_td]:border-b-0 relative z-0",
      className,
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement> & {
    rowStyle: TableRowStyle
    variant?: TableVariant
    size?: TableSize
    isSelector?: boolean
  }
>(({ className, rowStyle, variant, size, isSelector, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-[37px] z-20 px-3.5 py-0 relative text-left bg-surface-background align-middle font-semibold text-primary [&:has([role=checkbox])]:pr-0 border border-transparent border-b-border-layout  border-r-border-layout",
      className,
      {
        "h-10 text-xs": size === "compact",
        "p-0": isSelector,
        "border border-border-layout border-b-border-layout":
          rowStyle === "bordered",
        "h-7 text-xs bg-surface-muted":
          size === "compact" && variant === "report",
        "h-9 text-sm bg-surface-highlight":
          size === "default" && variant === "report",
      },
    )}
    {...props}
  />
))

TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement> & {
    size: TableSize
    rowStyle: TableRowStyle
    variant?: TableVariant
    grouped?: boolean
    isExpandable?: boolean
    isSelector?: boolean
  }
>(
  (
    {
      className,
      size,
      rowStyle,
      variant,
      grouped,
      isExpandable,
      isSelector,
      ...props
    },
    ref,
  ) => (
    <td
      ref={ref}
      className={cn(
        "bg-inherit font-normal overflow-hidden text-base  text-primary h-[50px] border-collapse transition-all py-0 duration-100 px-4 align-middle [&:has([role=checkbox])]:pr-0 border border-transparent border-b-border-layout [&:last-child]:border-r-0  border-r-border-layout",
        {
          "border-r-0": grouped,
          "px-4 pt-1": isExpandable,
          "p-0": isSelector,
          "h-[50px]": size === "default",
          "h-8 text-xs": size === "compact",
          "border border-border-layout border-b-border-layout":
            rowStyle === "bordered",
        },
        {
          "h-7 text-sm": size === "default" && variant === "report",
          "h-9 text-xs": size === "compact" && variant === "report",
        },
        className,
      )}
      {...props}
    />
  ),
)
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-primary", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
}

