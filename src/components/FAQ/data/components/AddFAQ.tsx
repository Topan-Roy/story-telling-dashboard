import React from 'react'

export default function AddFAQ({setShowAddFAQ}: {setShowAddFAQ: React.Dispatch<React.SetStateAction<boolean>>}) {
    return (
        <div className='mt-6 px-6'>
            <div className='bg-white rounded-[8px] p-6'>
                <hr className='h-[1px] bg-[#E5E7EB] text-[#E5E7EB]' />
                <p className='font-[500] text-[13.6px] leading-6 text-[#374151] inter-font my-[17px]'>Add FAQ</p>
                <form action="" method='POST'>
                    <div className='flex items-center justify-start gap-4 flex-col'>
                        <div className='w-full'>
                            <label className='font-[500] text-[11.9px] leading-5 inter-font text-[#6B7280]' htmlFor="package-name">FAQ Title</label>
                            <input type="text" className='my-[5px] rounded-[6px] border-[1px] border-[#D1D5DB] py-[7px] pl-[13px] w-full outline-none' name="package-name" id="package-name" placeholder='Write the title of the FAQ' />
                        </div>
                        <div className='w-full'>
                            <label className='font-[500] text-[11.9px] leading-5 inter-font text-[#6B7280]' htmlFor="coin">Description</label>
                            <textarea className='my-[5px] rounded-[6px] border-[1px] border-[#D1D5DB] py-[7px] pl-[13px] w-full outline-none' name="coin" id="coin" placeholder='Write the description'></textarea>
                        </div>
                    </div>
                    <br />
                    <hr className='h-[1px] bg-[#E5E7EB] text-[#E5E7EB]' />
                    <div className='flex items-center justify-end gap-4 my-[17px]'>
                        <button onClick={(e: React.MouseEvent) => {
                            e.preventDefault()
                            setShowAddFAQ(false)
                        }} className='cursor-pointer px-[17px] py-[9px] rounded-[6px] border-[1px] border-[#A43EE7] inter-font font-[400] text-[11.9px] leading-5 text-[#000000]'>Cancel</button>
                        <button className='cursor-pointer px-[17px] py-[9px] rounded-[6px] inter-font font-[400] text-[11.9px] leading-5 text-[#FFFFFF]' style={{ background: "linear-gradient(to right, #9458E8, #CA00E5)" }}>Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
