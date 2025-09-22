import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

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

export const description = "A line chart with dots"

const chartData = [
    { month: "January", desktop: 100, },
    { month: "February", desktop: 150, },
    { month: "March", desktop: 200, },
    { month: "April", desktop: 250, },
    { month: "May", desktop: 300, },
    { month: "June", desktop: 350, },
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

export default function LineChartComponent() {
    return (
        <div className="rounded-[8px] p-[25px] border-[1px] border-[#E5E7EB] bg-white w-full shadow-md">
            <h1 className="font-semibold text-[15.3px] leading-[28px] text-[#000000]">Monthly Sales</h1>
            <Card className="w-full mt-3 border-none outline-none shadow-none">
                <CardContent>
                    <ChartContainer config={chartConfig} className="h-[300px] w-full">
                        <LineChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <YAxis
                                tickLine={false}
                                axisLine={true}
                                tickMargin={8}
                                tickCount={7}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Line
                                dataKey="desktop"
                                type="natural"
                                stroke="#9458E8"
                                strokeWidth={2}
                                dot={{
                                    fill: "#9458E8",
                                }}
                                activeDot={{
                                    r: 6,
                                }}
                            />
                        </LineChart>
                    </ChartContainer>
                </CardContent>
            </Card>
            <div className="flex items-center justify-center gap-1 mt-3">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_533_3771)">
                        <path d="M0.15625 7.49935H4.82292M4.82292 7.49935C4.82292 6.88051 5.06875 6.28702 5.50633 5.84943C5.94392 5.41185 6.53741 5.16602 7.15625 5.16602C7.77509 5.16602 8.36858 5.41185 8.80617 5.84943C9.24375 6.28702 9.48958 6.88051 9.48958 7.49935M4.82292 7.49935C4.82292 8.11819 5.06875 8.71168 5.50633 9.14927C5.94392 9.58685 6.53741 9.83268 7.15625 9.83268C7.77509 9.83268 8.36858 9.58685 8.80617 9.14927C9.24375 8.71168 9.48958 8.11819 9.48958 7.49935M9.48958 7.49935H14.1562" stroke="black" />
                    </g>
                    <defs>
                        <clipPath id="clip0_533_3771">
                            <rect width="14" height="14" fill="white" transform="translate(0.15625 0.5)" />
                        </clipPath>
                    </defs>
                </svg>
                <p className="text-[#9458E8] text-[13.6px] leading-[24px] font-[400]">Total Sales</p>
            </div>
        </div>
    )
}