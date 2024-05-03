import { FilterValue, TableState } from "../table.types"

export const removeColumnFromFilter = (
  colId: string,
  filters: TableState["filters"],
) => {
  const columns = Object.keys(filters || {})

  const newFilters: Record<string, FilterValue> = {}

  columns.forEach((col) => {
    const val = filters?.[col]

    if (val && col !== colId) newFilters[col] = val
  })

  return newFilters
}

export const addColumnToFilter = (
  colId: string,
  newFilter: FilterValue,
  filters: TableState["filters"],
) => {
  filters = filters || {}
  return {
    ...filters,
    [colId]: newFilter,
  }
}

export const getColumnFilter = (
  colId: string,
  filters: TableState["filters"],
) => {
  filters = filters || {}
  return filters[colId]
}
