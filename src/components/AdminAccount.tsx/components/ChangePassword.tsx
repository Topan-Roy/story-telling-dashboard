import React from 'react'

export default function ChangePassword(
    {setShowPasswordComponent}: {setShowPasswordComponent: React.Dispatch<React.SetStateAction<boolean>>}
) {
    return (
        <div className='absolute w-full h-[94vh] top-14 left-0 flex items-center justify-center' style={{ background: "rgb(202, 213, 226, 0.5)" }}>
            <div className='bg-white p-[60px] rounded-[12px] relative w-full md:w-[600px]'>
                <div onClick={() => setShowPasswordComponent(false)} className='absolute right-[60px] top-[60px] cursor-pointer'>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_557_26830)">
                            <path d="M22.8754 7.13594C22.3879 6.64844 21.6004 6.64844 21.1129 7.13594L15.0004 13.2359L8.88789 7.12344C8.40039 6.63594 7.61289 6.63594 7.12539 7.12344C6.63789 7.61094 6.63789 8.39844 7.12539 8.88594L13.2379 14.9984L7.12539 21.1109C6.63789 21.5984 6.63789 22.3859 7.12539 22.8734C7.61289 23.3609 8.40039 23.3609 8.88789 22.8734L15.0004 16.7609L21.1129 22.8734C21.6004 23.3609 22.3879 23.3609 22.8754 22.8734C23.3629 22.3859 23.3629 21.5984 22.8754 21.1109L16.7629 14.9984L22.8754 8.88594C23.3504 8.41094 23.3504 7.61094 22.8754 7.13594Z" fill="url(#paint0_linear_557_26830)" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_557_26830" x1="6.75977" y1="14.9984" x2="23.241" y2="14.9984" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#9458E8" />
                                <stop offset="0.5" stopColor="#A43EE7" />
                                <stop offset="1" stopColor="#CA00E5" />
                            </linearGradient>
                            <clipPath id="clip0_557_26830">
                                <rect width="30" height="30" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
                <form action="">
                    <h1 className='mt-[110px] font-[700] text-[24px] gradient-text text-center'>Change Your Password</h1>
                    <div className='mt-5'>
                        <label htmlFor="old-password" className='font-[400] text-[20px] text-[#4B5563] inter-font'>Enter old password</label>
                        <input className='text-[#6B7280] mt-4 h-[56px] rounded-[8px] px-[12px] py-[8px] border-[0.5px] border-[#6B7280] w-full inter-font' type="password" name="old-password" id="old-password" placeholder='Enter old password' />
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="new-password" className='font-[400] text-[20px] text-[#4B5563] inter-font'>Set new password</label>
                        <input className='text-[#6B7280] mt-4 h-[56px] rounded-[8px] px-[12px] py-[8px] border-[0.5px] border-[#6B7280] w-full inter-font' type="password" name="new-password" id="new-password" placeholder='Set new password' />
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="re-enter-password" className='font-[400] text-[20px] text-[#4B5563] inter-font'>Re-enter new password</label>
                        <input className='text-[#6B7280] mt-4 h-[56px] rounded-[8px] px-[12px] py-[8px] border-[0.5px] border-[#6B7280] w-full inter-font' type="password" name="re-enter-password" id="re-enter-password" placeholder='Re-enter new password' />
                    </div>
                    <div className='mt-5'>
                        <button className='font-[400] text-[20px] text-[#ffffff] inter-font w-full text-center p-[10px] rounded-[8px] cursor-pointer' style={{ background: "linear-gradient(to right, #9458E8, #CA00E5)" }}>
                            Update password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
