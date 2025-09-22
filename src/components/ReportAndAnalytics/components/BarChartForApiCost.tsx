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
    { month: "January", desktop: 186, mobile: 80, tablet: 50, laptop: 40 },
    { month: "February", desktop: 305, mobile: 200, tablet: 100, laptop: 80 },
    { month: "March", desktop: 237, mobile: 120, tablet: 70, laptop: 60 },
    { month: "April", desktop: 73, mobile: 190, tablet: 90, laptop: 70 },
    { month: "May", desktop: 209, mobile: 130, tablet: 80, laptop: 65 },
    { month: "June", desktop: 214, mobile: 140, tablet: 60, laptop: 50 },
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
        label: "Tablet",
        color: "var(--chart-3)",
    },
    laptop: {
        label: "Laptop",
        color: "var(--chart-4)",
    },
} satisfies ChartConfig

export default function BarChartForApiCost() {
    return (
        <div className="rounded-[8px] p-[25px] border-[1px] border-[#E5E7EB] bg-white w-full shadow-md">
            <h1 className="font-semibold text-[15.3px] leading-[28px] text-[#000000]">Cost Comparison of APIs</h1>
            <Card className="w-full mt-3 border-none outline-none shadow-none">
                <CardContent>
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
                            <Bar dataKey="mobile" fill="#A43EE7" radius={4} />
                            <Bar dataKey="tablet" fill="#CA00E5" radius={4} />
                            <Bar dataKey="laptop" fill="rgba(148, 88, 232, 0.6)" radius={4} />
                        </BarChart>
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
                    <p className="font-[400] text-[13.6px] inter-font text-[#9458E8]">Text API</p>
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
                    <p className="font-[400] text-[13.6px] inter-font text-[#A43EE7]">Song API</p>
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
                    <p className="font-[400] text-[13.6px] inter-font text-[#CA00E5]">Image API</p>
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
                    <p className="font-[400] text-[13.6px] inter-font" style={{color: "rgba(148, 88, 232, 0.6)"}}>Text to Voice API</p>
                </div>
            </div>
        </div>
    )
}