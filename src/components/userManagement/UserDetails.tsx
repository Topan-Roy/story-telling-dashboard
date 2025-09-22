import React from 'react'
import SideBar from '../ui/SideBar'
import AdminHeader from '../ui/AdminHeader'
import { Link } from 'react-router-dom'
import UserDetailsTable from './components/UserDetailsTable'
import UserDetailsActivity from './components/UserDetailsActivity'
import Profile from './components/Profile'

enum TapData {
    UserDetails = "User Details",
    Activity = "Activity",
    Profiles = "Profiles"
}

const showTapComponent = {
    "User Details": <UserDetailsTable />,
    "Activity": <UserDetailsActivity />,
    "Profiles": <Profile />
}

export default function UserDetails() {
    const [tabActive, setTabActive] = React.useState<TapData>(TapData.UserDetails)
    return (
        <section className="flex items-start justify-center bg-[#F9F9F9]">
            <SideBar />
            <div className="w-full pb-[24px]">
                <AdminHeader />
                <div className="px-[24px] my-[24px]">
                    <h2 className="font-[700] text-[20.4px] leading-[32px] inter-font">User Details</h2>
                    <div className='flex items-center justify-start gap-[10px] mt-[24px]'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.99967 12.6668L3.33301 8.00016L7.99967 3.3335" stroke="#A43EE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.6663 8H3.33301" stroke="#A43EE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <Link to={`/dashboard/user-management`} className='text-[#A43EE7] font-[400] text-[13.6px] leading-[24px]'>Back to User Management</Link>

                    </div>
                </div>
                <div className='px-[24px]'>
                    <div className='bg-white rounded-[8px] p-6'>
                        <div className='py-4 px-2 border-b-[1px] border-[#E5E7EB] flex items-center justify-start gap-6'>
                            <button onClick={() => setTabActive(TapData.UserDetails)} className={`${tabActive === TapData.UserDetails ? "text-[#9458E8]" : "text-[#6B7280]"}  inter-font font-[500] text-[11.9px] leading-[20px] cursor-pointer`}>User Details</button>
                            <button onClick={() => setTabActive(TapData.Activity)} className={`${tabActive === TapData.Activity ? "text-[#9458E8]" : "text-[#6B7280]"} inter-font font-[500] text-[11.9px] leading-[20px] cursor-pointer`}>Activity</button>
                            <button onClick={() => setTabActive(TapData.Profiles)} className={`${tabActive === TapData.Profiles ? "text-[#9458E8]" : "text-[#6B7280]"} inter-font font-[500] text-[11.9px] leading-[20px] cursor-pointer`}>Profiles (3)</button>
                        </div>
                        {
                            showTapComponent[tabActive as TapData]
                        }
                        <div className='flex items-center justify-between border-t-[1px] border-[#E5E7EB]'>
                            <div className='flex items-center justify-start gap-6 '>
                                <div className='flex items-center justify-center gap-1 border-[1px] border-[#B91C1C] py-[9px] px-[17px] rounded-[6px] mt-6'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_107_1333)">
                                            <path d="M7.99967 14.6668C11.6816 14.6668 14.6663 11.6821 14.6663 8.00016C14.6663 4.31826 11.6816 1.3335 7.99967 1.3335C4.31778 1.3335 1.33301 4.31826 1.33301 8.00016C1.33301 11.6821 4.31778 14.6668 7.99967 14.6668Z" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.2666 3.2666L12.7333 12.7333" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_107_1333">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <button className=' text-[#EF4444] font-[400] text-[11.9px] leading-[20px] cursor-pointer'>Disable Account</button>
                                </div>

                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center justify-center gap-1 border-[1px] border-[#B91C1C] py-[9px] px-[17px] rounded-[6px] mt-6'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 4H14" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12.6663 4V13.3333C12.6663 14 11.9997 14.6667 11.333 14.6667H4.66634C3.99967 14.6667 3.33301 14 3.33301 13.3333V4" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5.33301 4.00016V2.66683C5.33301 2.00016 5.99967 1.3335 6.66634 1.3335H9.33301C9.99967 1.3335 10.6663 2.00016 10.6663 2.66683V4.00016" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                        <button className=' text-[#EF4444] font-[400] text-[11.9px] leading-[20px] cursor-pointer'>Delete Account</button>
                                    </div>
                                </div>
                            </div>
                            <button className='cursor-pointer border-[1px] border-[#9458E8] py-[9px] px-[17px] rounded-[6px]'>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
