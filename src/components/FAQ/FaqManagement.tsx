import SideBar from '../ui/SideBar'
import AdminHeader from '../ui/AdminHeader'
import Search from '../svgs/Search'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { faqData } from './data/faqData'
import Pagination from '../ui/Pagination'
import AddFAQ from './data/components/AddFAQ'
import EditIcon from '../svgs/EditIcon'
import DeleteIcon from '../svgs/DeleteIcon'
import UpdateFAQ from './data/components/UpdateFAQ'
import React from 'react'

export default function FaqManagement() {
    const [singleFAQ, setSingleFAQ] = React.useState<typeof faqData[0]>(faqData[0])
    const [showUpdate, setShowUpdate] = React.useState<boolean>(false)
    const [showAddFAQ, setShowAddFAQ] = React.useState<boolean>(false)
    return (
        <section className="flex items-start justify-center bg-[#F9F9F9] relative">
            <SideBar />
            <div className="w-full pb-[24px] relative">
                <AdminHeader />
                <div className="px-[24px] my-[24px]">
                    <h2 className="font-[700] text-[20.4px] leading-[32px] inter-font">FAQ Management</h2>
                </div>
                <div className='mt-6 px-6'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-[#1F2937] text-[17px] leading-[28px] font-[600]'>Frequently Asked Questions</h1>
                        <div onClick={() => setShowAddFAQ(true)} className='flex items-center justify-center py-[8px] px-[16px] gap-2 cursor-pointer rounded-[6px]' style={{ background: "linear-gradient(to right, #9458E8, #CA00E5)" }}>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.677 8.5H13.0103" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.34375 3.83331V13.1666" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <button className='text-[11.9px] leading-[20px] font-[400] text-[#FFFFFF] cursor-pointer'>Add FAQ</button>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-6 px-6 py-6'>
                    <div className='flex items-center justify-center gap-[8px] bg-white border-[1px] border-[#E5E7EB] rounded-[6px] shadow py-[9px] pl-[41px] w-full'>
                        <Search />
                        <input type="search" name="search" id="search" className='w-full font-[400] text-[16px] leading-[24px] border-none outline-none' placeholder='Search FAQs' />
                    </div>
                </div>
                {showAddFAQ ? <AddFAQ setShowAddFAQ={setShowAddFAQ} /> : <></>}
                <div className="mt-6 px-6">
                    <div className="bg-white p-6 rounded-[8px] border-[1px] border-[#E5E7EB]">
                        <Accordion type="single" collapsible className="w-full no-underline">
                            {faqData.map((item) => (
                                <AccordionItem key={item.value} value={item.value} className='outline-none border-b-[1px] border-[#E5E7EB] no-underline py-4'>
                                    <AccordionTrigger className='no-underline font-[500] text-[13.6px] leading-5 inter-font text-[#111827] cursor-pointer'>{item.trigger}</AccordionTrigger>
                                    <AccordionContent className='no-underline cursor-pointer'>
                                        {item.content}
                                        <div className='flex items-center justify-end gap-4 pr-8'>
                                            <div onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                                                e.preventDefault();
                                                setShowUpdate(true);
                                                setSingleFAQ(item)
                                            }}>

                                                <EditIcon />
                                            </div>
                                            <DeleteIcon />
                                        </div>
                                    </AccordionContent>

                                </AccordionItem>
                            ))}
                        </Accordion>
                        <div className='mt-4'>
                            <Pagination />
                        </div>

                    </div>
                </div>
                {
                    showUpdate ? <UpdateFAQ packageData={singleFAQ} setShowUpdate={setShowUpdate} /> : <></>
                }
            </div>
        </section>
    )
}
