interface Col {
  id: string
  getIsVisible: () => boolean
}

export const sumSizesBeforeId = (
  array: { column: Col }[],
  targetId: string,
) => {
  const targetIndex = array.findIndex((item) => item?.column?.id === targetId)
  if (targetIndex <= 0) return 0

  const size = array
    .slice(0, targetIndex)
    .reduce((acc, item) => acc + getColSize(item.column), 0)

  return size
}

const getColSize = (col: Col) => {
  if (!col.getIsVisible()) return 0
  return (
    document.querySelector(`#${col.id}`)?.getBoundingClientRect().width || 0
  )
}
