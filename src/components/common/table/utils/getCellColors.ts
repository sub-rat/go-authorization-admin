type RangeResult = { hex: string; class: string }

export function fullCellColor(value: number): RangeResult | undefined {
  const ranges: [number, number, RangeResult][] = [
    [0, 5, { hex: "#EB8592", class: "bg-divergent_full-1" }],
    [6, 20, { hex: "#F49792", class: "bg-divergent_full-2" }],
    [21, 35, { hex: "#F5AC95", class: "bg-divergent_full-3" }],
    [36, 50, { hex: "#F5BF95", class: "bg-divergent_full-4" }],
    [51, 65, { hex: "#FDD471", class: "bg-divergent_full-5" }],
    [66, 80, { hex: "#C1DB99", class: "bg-divergent_full-6" }],
    [81, 95, { hex: "#9BCAA5", class: "bg-divergent_full-7" }],
    [96, Infinity, { hex: "#66B7A7", class: "bg-divergent_full-8" }],
  ]

  const matchedRange = ranges.find(([min, max]) => value >= min && value <= max)

  return matchedRange ? matchedRange[2] : undefined
}

export function valueColor(value: number): RangeResult | undefined {
  const ranges: [number, number, RangeResult][] = [
    [0, 5, { hex: "#de334a", class: "bg-divergent-1" }],
    [6, 20, { hex: "#ed524a", class: "bg-divergent-2" }],
    [21, 35, { hex: "#ee744f", class: "bg-divergent-3" }],
    [36, 50, { hex: "#ee944f", class: "bg-divergent-4" }],
    [51, 65, { hex: "#fcb713", class: "bg-divergent-5" }],
    [66, 80, { hex: "#97c355", class: "bg-divergent-6" }],
    [81, 95, { hex: "#58a768", class: "bg-divergent-7" }],
    [96, Infinity, { hex: "#00876c", class: "bg-divergent-8" }],
  ]

  const matchedRange = ranges.find(([min, max]) => value >= min && value <= max)

  return matchedRange ? matchedRange[2] : undefined
}
