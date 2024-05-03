import {
  ColumnDef,
  DeepKeys,
  FilterFn,
  Row,
  RowData,
  Table,
} from "@tanstack/react-table"

export type AmountFilterValue =
  | {
      type: "between"
      value: { min: number; max: number }
    }
  | {
      type: "lesser" | "greater"
      value: number
    }

export type ListFilterValue = string[]

export type DateTimeFilterValue = string

export type FilterValue =
  | { type: "amount"; value: AmountFilterValue }
  | { type: "list"; value: ListFilterValue }
  | { type: "datetime"; value: DateTimeFilterValue }

declare module "@tanstack/table-core" {
  interface ColumnMeta<TData extends RowData, TValue> {
    isNumeric?: boolean
    width?: number | string
    Footer?: {
      colspan?: number
      display?: "none"
    }
    filterList?: { label: string; value: string }[]
  }
  interface FilterFns {
    amount: FilterFn<unknown>
    list: FilterFn<unknown>
  }
}
declare module "@tanstack/react-table" {
  interface Column<TData, TValue> {
    columnDef: ColumnDef<TData, TValue> & {
      colSpan?: number
      fullColoringKey?: DeepKeys<TData> | "actions" | string
      valueColoringKey?: DeepKeys<TData> | "actions" | string
    }
  }
}

export type Pagination = {
  total: number | string
  pageInfo?: {
    startCursor?: string | null
    endCursor?: string | null
    hasNextPage: boolean
    hasPreviousPage: boolean
  } | null
}

export type URLFilterComparator = "=" | "<" | ">" | "< >" | "CONTAINS"
export type URLFilterValue = string | string[] | { from: string; to: string }

export type URLFilter = Record<
  string,
  {
    value: URLFilterValue
    compare: URLFilterComparator
  }
>

export type FilterCallbackParams = {
  filteredColumns?: URLFilter | undefined
  query?: string
}

export type Maybe<T> = T | null

export type TableSize = "large" | "default" | "compact"
export type TableRowStyle = "bordered" | "row-lines" | "stripes"
export type TableVariant = "default" | "report"

export type TableState = {
  filters?: {
    [col: string]: FilterValue
  }
  sort?: {
    type: "ascending" | "descending"
    column: string
  }
  search?: string
  pagination?: {
    size?: number
    page?: number
  }
  event?: {
    id: number | string
    name: string
    isSelected: boolean
  }[]
}

export interface TableProps<TData> {
  data: TData[]
  columns: Column<TData>[]
  tableColoring?: boolean
  pageSizes?: number[]
  maxSelect?: number
  colors?: string[]
  samePoolOnly?: boolean
  // pagination?: Pagination;
  size?: TableSize
  variant?: TableVariant
  eventFilter?: boolean
  isLoading?: boolean
  // isStatic?: boolean;

  leadingCustomFilter?: React.JSX.Element
  trailingCustomFilter?: React.JSX.Element

  searchPlaceholder?: string
  // noDataTitle?: string;

  onRowClick?: (row: TData) => void
  getSubRows?: (row: TData) => any
  getRowId?: (originalRow: TData) => string

  manualSorting?: boolean
  manualFiltering?: boolean
  manualSearching?: boolean
  manualPagination?: boolean

  // tableTitle?: string;
  showFooter?: boolean
  // isDetailPageTable?: boolean;

  allowSelection?: boolean

  onRowSelect?: (selected: Row<TData>[]) => void

  freezeColsFromLeft?: number
  freezeColsFromRight?: number

  rowStyle?: TableRowStyle

  // expandFirstLevel?: boolean;
  hasOutline?: boolean

  hideView?: boolean
  hideFilter?: boolean
  hideSearch?: boolean
  hideControls?: boolean
  hidePagination?: boolean
  hideSort?: boolean
  hideExport?: boolean
  headerClassName?: string

  selectionActions?: (rows: Row<TData>[]) => React.ReactNode

  config?: {
    pagination?: {
      total: number
    }
  }

  tableState?: TableState

  // tableOptions?: ActionMenuProps['options'];

  onTableStateChange?: (tableState: TableState) => void
  onRefresh?: (table: Table<TData>) => unknown
  // sorting?: { desc: boolean; id: string };
  // onSorting?: () => unknown;
  // onSort?: (table: Table<TData>) => unknown;
  hidefromViewSelect?: string[]

  cellClassName?: string

  renderGridRow?: (
    row: Row<TData>,
    tableConfig: {
      rowStyle: TableRowStyle
      size: TableSize
      variant: TableVariant | undefined
    },
  ) => React.ReactNode
  allowTableViewChange?: boolean // change table or grid view
  tableView?: "table" | "grid"
  hideSelectionBar?: boolean
  tableContainerClassName?: string
  gridContainerClassName?: string
  exportOptions?: {
    label: string
    action: () => unknown
  }[]
  hideFromViewSettings?: ("display" | "rowStyle" | "listOptions")[]
  customController?: React.ReactNode
}

export type Column<TData> = ColumnDef<TData, unknown> & {
  accessorKey?: DeepKeys<TData> | "actions" | string
  columns?: Column<TData>[]
  colSpan?: number
  coloringKey?: DeepKeys<TData> | "actions" | string
}

export type TableInstance<T> = Table<T>
export type { Row }
