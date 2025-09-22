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

export const description = "A multiple line chart"

const chartData = [
    { month: "January", desktop: 90, mobile: 70, tablet: 80 },
    { month: "February", desktop: 100, mobile: 80, tablet: 90 },
    { month: "March", desktop: 110, mobile: 90, tablet: 100 },
    { month: "April", desktop: 120, mobile: 100, tablet: 110 },
    { month: "May", desktop: 130, mobile: 110, tablet: 120 },
    { month: "June", desktop: 140, mobile: 120, tablet: 130 },
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
    tablet: {
        label: "Mobile",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig

export default function LineChartForCostRevenue() {
    return (
        <div className="rounded-[8px] p-[25px] border-[1px] border-[#E5E7EB] bg-white w-full shadow-md">
            <h1 className="font-semibold text-[15.3px] leading-[28px] text-[#000000]">Cost Comparison of APIs</h1>
            <Card className="w-full mt-3 border-none outline-none shadow-none">
                <CardContent>
                    <ChartContainer config={chartConfig} className="h-[220px] w-full">
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
                                tickCount={6}
                            />
                            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                            <Line
                                dataKey="desktop"
                                type="monotone"
                                stroke="#9458E8"
                                strokeWidth={2}
                                dot={false}
                            />
                            <Line
                                dataKey="mobile"
                                type="monotone"
                                stroke="#CA00E5"
                                strokeWidth={2}
                                dot={false}
                            />
                            <Line
                                dataKey="tablet"
                                type="monotone"
                                stroke="#4CAF50"
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ChartContainer>
                </CardContent>
            </Card>
            <div className="flex items-center justify-center gap-4">
                <div className="flex items-center justify-center gap-1">
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_527_3378)">
                            <path d="M0.632812 6.99935H5.29948M5.29948 6.99935C5.29948 6.38051 5.54531 5.78702 5.9829 5.34943C6.42048 4.91185 7.01397 4.66602 7.63281 4.66602C8.25165 4.66602 8.84514 4.91185 9.28273 5.34943C9.72031 5.78702 9.96615 6.38051 9.96615 6.99935M5.29948 6.99935C5.29948 7.61819 5.54531 8.21168 5.9829 8.64927C6.42048 9.08685 7.01397 9.33268 7.63281 9.33268C8.25165 9.33268 8.84514 9.08685 9.28273 8.64927C9.72031 8.21168 9.96615 7.61819 9.96615 6.99935M9.96615 6.99935H14.6328" stroke="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_527_3378">
                                <rect width="14" height="14" fill="white" transform="translate(0.632812)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className="font-[400] text-[13.6px] inter-font text-[#9458E8]">Revenue</p>
                </div>
                <div className="flex items-center justify-center gap-1">
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_527_3378)">
                            <path d="M0.632812 6.99935H5.29948M5.29948 6.99935C5.29948 6.38051 5.54531 5.78702 5.9829 5.34943C6.42048 4.91185 7.01397 4.66602 7.63281 4.66602C8.25165 4.66602 8.84514 4.91185 9.28273 5.34943C9.72031 5.78702 9.96615 6.38051 9.96615 6.99935M5.29948 6.99935C5.29948 7.61819 5.54531 8.21168 5.9829 8.64927C6.42048 9.08685 7.01397 9.33268 7.63281 9.33268C8.25165 9.33268 8.84514 9.08685 9.28273 8.64927C9.72031 8.21168 9.96615 7.61819 9.96615 6.99935M9.96615 6.99935H14.6328" stroke="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_527_3378">
                                <rect width="14" height="14" fill="white" transform="translate(0.632812)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className="font-[400] text-[13.6px] inter-font text-[#CA00E5]">API Cost</p>
                </div>
                <div className="flex items-center justify-center gap-1">
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_527_3378)">
                            <path d="M0.632812 6.99935H5.29948M5.29948 6.99935C5.29948 6.38051 5.54531 5.78702 5.9829 5.34943C6.42048 4.91185 7.01397 4.66602 7.63281 4.66602C8.25165 4.66602 8.84514 4.91185 9.28273 5.34943C9.72031 5.78702 9.96615 6.38051 9.96615 6.99935M5.29948 6.99935C5.29948 7.61819 5.54531 8.21168 5.9829 8.64927C6.42048 9.08685 7.01397 9.33268 7.63281 9.33268C8.25165 9.33268 8.84514 9.08685 9.28273 8.64927C9.72031 8.21168 9.96615 7.61819 9.96615 6.99935M9.96615 6.99935H14.6328" stroke="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_527_3378">
                                <rect width="14" height="14" fill="white" transform="translate(0.632812)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className="font-[400] text-[13.6px] inter-font text-[#4CAF50]">Net Profit</p>
                </div>
            </div>
        </div>
    )
}