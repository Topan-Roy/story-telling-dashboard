import RevenueIcon from '../svgs/RevenueIcon'
import { Link } from 'react-router-dom'
import ApiIcon from '../svgs/ApiIcon'
import CostRevenueIcon from '../svgs/CostRevenueIcon'
import SideBar from '../ui/SideBar'
import AdminHeader from '../ui/AdminHeader'
import { apicostAnalysisCardData } from './data/data'
import BarChartForApiCost from './components/BarChartForApiCost'
import { Progress } from '../ui/progress'

export default function APICostAnalysis() {
    return (
        <section className="flex items-start justify-center bg-[#F9F9F9]">
            <SideBar />
            <div className='w-full pb-6'>
                <AdminHeader />
                <div className='mt-6 px-6 flex items-center justify-between'>
                    <h1 className='font-[700] text-[20.4px] leading-[32px] inter-font'>Reports & Analytics</h1>
                    <select name="" id="" className='px-[13px] py-[9px] border-[1px] border-[#D1D5DB] rounded-[6px]'>
                        <option value="All Transactions">6 Months</option>
                        <option value="Subscription">12 Months</option>
                    </select>
                </div>
                <div className='mt-6   px-6  '>
                    <div className='flex items-center justify-start gap-6 border-b-[1px] border-[#E5E7EB]'>
                        <div className='flex items-center justify-center gap-[10px] py-3'>
                            <RevenueIcon color='#6B7280' />
                            <Link to={`/dashboard/report-and-analytics`} className='font-[700] text-[11.9px] leading-[20px] text-[#6B7280] inter-font cursor-pointer'>Revenue Reports</Link>
                        </div>
                        <div className='flex items-center justify-center gap-[10px] py-3 border-b-[2px] border-b-[#9458E8]'>
                            <ApiIcon color='#9458E8' />
                            <Link to={`/dashboard/api-cost-analytics`} className='font-[700] text-[11.9px] leading-[20px] text-[#9458E8] inter-font cursor-pointer'>API Cost Analysis</Link>
                        </div>
                        <div className='flex items-center justify-center gap-[10px] py-3'>
                            <CostRevenueIcon color='#6B7280' />
                            <Link to={`/dashboard/cost-vs-revenue`} className='font-[700] text-[11.9px] leading-[20px] text-[#6B7280] inter-font cursor-pointer'>Cost vs Revenue</Link>
                        </div>
                    </div>
                </div>
                <div className='mt-6    px-6 flex items-stretch justify-center gap-6'>
                    {
                        apicostAnalysisCardData.map((card, index) => (
                            <div key={index} className='rounded-[8px] border-[1px] border-[#E5E7EB] bg-white p-[25px] shadow-md w-full'>
                                <div className='flex items-center justify-between'>
                                    <p className='font-[500] text-[11.9px] leading-[50px] inter-font text-[#6B7280]'>{card.category}</p>
                                    <div>
                                        {card.icon}
                                    </div>
                                </div>
                                <div className='-mt-2 text-[20.4px] leading-[32px] font-[700] text-[#1F2937]'>${card.amount}</div>
                                <div className='text-[#22C55E] font-[400] text-[11.9px] leading-[20px] inter-font flex items-center justify-start mt-2'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.6665 4.66699H11.3332V11.3337" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.6665 11.3337L11.3332 4.66699" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div>
                                        <span className='mx-1'>{card.change}</span>
                                        <span>{card.changeComparedTo}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='mt-6 px-6'>
                    <BarChartForApiCost />
                </div>
                <div className='mt-6 px-6 flex items-stretch justify-center gap-6'>
                    <div className='w-full bg-white rounded-[8px] p-[25px] border-[1px] border-[#E5E7EB] my-4 shadow-md'>
                        <h1 className='font-[600] text-[15.3px] leading-[28px] inter-font'>Story Creation Cost Breakdown</h1>
                        <div className='flex items-center justify-between'>
                            <h2 className='font-[500] text-[11.9px] leading-[20px] inter-font'>Average Cost per Story:</h2>
                            <p className='font-[600] text-[11.9px] leading-[20px] inter-font'>$15.00</p>
                        </div>
                        <div className='my-[12px]'>
                            <div className='mt-3'>
                                <div className='flex items-center justify-between'>
                                    <p className='font-[400] text-[10.2px] leading-[16px] inter-font text-[#6B7280]'>Text Generation</p>
                                    <p className='font-[400] text-[10.2px] leading-[16px] inter-font text-[#6B7280]'>$9.00 (60%)</p>
                                </div>
                                <Progress className='[&>div]:bg-[#9458E8]' value={52} />
                            </div>
                            <div className='mt-3'>
                                <div className='flex items-center justify-between'>
                                    <p className='font-[400] text-[10.2px] leading-[16px] inter-font text-[#6B7280]'>Text to Voice Generation</p>
                                    <p className='font-[400] text-[10.2px] leading-[16px] inter-font text-[#6B7280]'>$4.50 (30%)</p>
                                </div>
                                <Progress className='[&>div]:bg-[#A43EE7]' value={63} />
                            </div>
                            <div className='mt-3'>
                                <div className='flex items-center justify-between'>
                                    <p className='font-[400] text-[10.2px] leading-[16px] inter-font text-[#6B7280]'>Image Generation</p>
                                    <p className='font-[400] text-[10.2px] leading-[16px] inter-font text-[#6B7280]'>$1.50 (13%)</p>
                                </div>
                                <Progress className='[&>div]:bg-[#CA00E5]' value={70} />
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-white rounded-[8px] p-[25px] border-[1px] border-[#E5E7EB] my-4 shadow-md'>
                        <h1 className='font-[600] text-[15.3px] leading-[28px] inter-font'>Song Generation Cost Breakdown</h1>
                        <div className='flex items-center justify-between'>
                            <h2 className='font-[500] text-[11.9px] leading-[20px] inter-font'>Average Cost per Song:</h2>
                            <p className='font-[600] text-[11.9px] leading-[20px] inter-font'>$12.00</p>
                        </div>
                        <div className='my-[12px]'>
                            <div className='mt-3'>
                                <div className='flex items-center justify-between'>
                                    <p className='font-[400] text-[10.2px] leading-[16px] inter-font text-[#6B7280]'>Song Generation</p>
                                    <p className='font-[400] text-[10.2px] leading-[16px] inter-font text-[#6B7280]'>$4.80 (40%)</p>
                                </div>
                                <Progress className='[&>div]:bg-[#9458E8]' value={52} />
                            </div>
                            <div className='mt-3'>
                                <div className='flex items-center justify-between'>
                                    <p className='font-[400] text-[10.2px] leading-[16px] inter-font text-[#6B7280]'>Image Generation</p>
                                    <p className='font-[400] text-[10.2px] leading-[16px] inter-font text-[#6B7280]'>$4.50 (30%)</p>
                                </div>
                                <Progress className='[&>div]:bg-[#A43EE7]' value={63} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
