import React from 'react'
import { profileData } from '../data/userManagementData'
import ProfileDetails from './ProfileDetails'

export default function Profile() {
    const [showProfileDetails, setShowProfileDetails] = React.useState<boolean>(false)
    return (
        <div className='my-[20px]'>
            <h1 className='text-[#374151] font-[500] text-[13.6px] leading-[24px]'>User Profiles</h1>
            <div className='mt-6 flex items-center justify-center gap-6 flex-wrap md:flex-nowrap'>
                {
                    profileData.map((profile, index) => <div key={index} className='bg-[#F9FAFB] border-[1px] border-[#E5E7EB] p-[17px] w-full rounded-[6px]'>
                        <div className='flex items-center justify-start gap-[12px]'>
                            <div>{profile.image}</div>
                            <div>
                                <p className='text-[#111827] font-[500] text-[13.6px] leading-[24px] inter-font'>{profile.name}</p>
                                <p className='text-[#6B7280] inter-font font-[400] text-[11.9px] leading-[2px] mt-2'>Age: {profile.age}</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-around mt-3 py-3 border-t-[1px] border-[#F3F4F6]'>
                            <button onClick={() => setShowProfileDetails(true)} className='text-[#9458E8] font-[400] text-[11.9px] leading-[20px]'>Details</button>
                            <button className='text-[#EF4444] font-[400] text-[11.9px] leading-[20px]'>Delete</button>
                        </div>
                    </div>)
                }
            </div>
            {
                showProfileDetails ? <ProfileDetails setShowProfileDetails={setShowProfileDetails} /> : <></>
            }
        </div>
    )
}
