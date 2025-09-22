"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"

import { ChartContainer } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export default function Component() {
  return (
    <ChartContainer config={chartConfig} className=" w-full bg-white"> 
      <BarChart accessibilityLayer data={chartData} height={320} className="pr-6">
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={true}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tickLine={false}
          axisLine={true}
          tickMargin={8}
          tickCount={6}
        />
        <Bar dataKey="desktop" fill="#CA00E5" radius={4} barSize={30.5} />
      </BarChart>
    </ChartContainer>
  )
}
