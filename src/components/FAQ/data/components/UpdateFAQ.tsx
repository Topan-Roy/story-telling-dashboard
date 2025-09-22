import React from 'react'

export default function UpdateFAQ(
    {packageData, setShowUpdate}: {packageData: any, setShowUpdate: React.Dispatch<React.SetStateAction<typeof packageData>>}
) {
    return (
        <>
            <div className='z-40 p-6 w-full fixed left-0 top-0 h-[100vh] flex items-center justify-center' style={{ background: "rgb(202, 213, 226, 0.5)" }}>
                <div className='bg-white p-6 rounded-[8px]'>
                    <hr className='h-[1px] bg-[#E5E7EB] text-[#E5E7EB]' />
                    <p className='font-[500] text-[13.6px] leading-6 text-[#374151] inter-font my-[17px]'>Update FAQ</p>
                    <form action="" method='POST' className='w-[50rem]'>
                        <div className='w-full'>
                            <div className='w-full'>
                                <label className='font-[500] text-[11.9px] leading-5 inter-font inter-font text-[#6B7280]' htmlFor="package-name">FAQ Title</label>
                                <input type="text" defaultValue={packageData.trigger} className='my-[5px] rounded-[6px] border-[1px] border-[#D1D5DB] py-[7px] pl-[13px] w-full outline-none' name="package-name" id="package-name" />
                            </div>
                            <div className='w-full'>
                                <label className='font-[500] text-[11.9px] leading-5 inter-font inter-font text-[#6B7280]' htmlFor="coin">Description</label>
                                <textarea defaultValue={packageData.content} className='my-[5px] rounded-[6px] border-[1px] border-[#D1D5DB] py-[7px] pl-[13px] w-full outline-none' name="coin" id="coin"></textarea>
                            </div>
                        </div>
                        <div className='flex items-center justify-end gap-4 my-[17px]'>
                            <button
                                onClick={(e: React.MouseEvent<HTMLElement>) => {
                                    e.preventDefault()
                                    setShowUpdate(false)
                                }}
                                className='cursor-pointer px-[17px] py-[9px] rounded-[6px] border-[1px] border-[#A43EE7] inter-font font-[400] text-[11.9px] leading-5 text-[#000000]'>Cancel</button>
                            <button className='cursor-pointer px-[17px] py-[9px] rounded-[6px] inter-font font-[400] text-[11.9px] leading-5 text-[#FFFFFF]' style={{ background: "linear-gradient(to right, #9458E8, #CA00E5)" }}>Save Changes</button>
                        </div>
                    </form>
                    <hr className='h-[1px] bg-[#E5E7EB] text-[#E5E7EB]' />
                </div>
            </div>
        </>
    )
}
