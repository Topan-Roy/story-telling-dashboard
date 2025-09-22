import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent
} from "@/components/ui/card"
import {

  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import type { ChartConfig, } from "@/components/ui/chart"

export const description = "A multiple bar chart"

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
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function BarChartComponent() {
  return (
    <div className="rounded-[8px] p-[25px] border-[1px] border-[#E5E7EB] bg-white w-full shadow-md">
      <h1 className="font-semibold text-[15.3px] leading-[28px] text-[#000000]">Revenue Trends</h1>
      <Card className="w-full mt-3 border-none outline-none shadow-none">
        <CardContent className="">
          <ChartContainer config={chartConfig} className="h-[220px] w-full">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis
                tickLine={false}
                axisLine={true}
                tickMargin={8}
                tickCount={6}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="desktop" fill="#9458E8" radius={4} />
              <Bar dataKey="mobile" fill="#CA00E5" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>

  )
}
