import React from 'react'

export default function AddPackage({setShowAddSubscription}: {setShowAddSubscription: React.Dispatch<React.SetStateAction<boolean>>}) {
    return (
        <div className='mt-6 px-6'>
            <div className='bg-white rounded-[8px] p-6'>
                <hr className='h-[1px] bg-[#E5E7EB] text-[#E5E7EB]' />
                <p className='font-[500] text-[13.6px] leading-6 text-[#374151] inter-font my-[17px]'>Add Package</p>
                <form action="" method='POST'>
                    <div className='flex items-center justify-start gap-4 md:flex-nowrap flex-wrap'>
                        <div className='w-full'>
                            <label className='font-[500] text-[11.9px] leading-5 inter-font' htmlFor="package-name">Package Name</label>
                            <input type="text" className='my-[5px] rounded-[6px] border-[1px] border-[#D1D5DB] py-[7px] pl-[13px] w-full outline-none' name="package-name" id="package-name" />
                        </div>
                        <div className='w-full'>
                            <label className='font-[500] text-[11.9px] leading-5 inter-font' htmlFor="coin">Coin</label>
                            <input type="text" className='my-[5px] rounded-[6px] border-[1px] border-[#D1D5DB] py-[7px] pl-[13px] w-full outline-none' name="coin" id="coin" />
                        </div>
                        <div className='w-full'>
                            <label className='font-[500] text-[11.9px] leading-5 inter-font' htmlFor="price">Price (£)</label>
                            <input type="text" className='my-[5px] rounded-[6px] border-[1px] border-[#D1D5DB] py-[7px] pl-[13px] w-full outline-none' name="price" id="price" />
                        </div>
                    </div>
                    <div className='mt-[12px] flex items-center justify-start gap-4'>
                        <div>
                            <p className='font-[500] text-[#374151] text-[11.9px] leading-5 inter-font'>Popular</p>
                            <div className='mt-[5px] flex items-center'>
                                <input type="checkbox" name="popular" id="popular" />
                                <label htmlFor="popular" className='ml-2 font-[400] text-[#374151] text-[11.9px] leading-5 inter-font'>Mark as popular</label>
                            </div>
                        </div>
                        <div>
                            <p className='font-[500] text-[#374151] text-[11.9px] leading-5 inter-font'>Discount</p>
                            <div className='mt-[5px] flex items-center'>
                                <input type="checkbox" name="discount" id="discount" />
                                <label htmlFor="discount" className='ml-2 font-[400] text-[#374151] text-[11.9px] leading-5 inter-font'>Mark as Discount Offer</label>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-end gap-4 my-[17px]'>
                        <button onClick={(e: React.MouseEvent) => {
                            e.preventDefault()
                            setShowAddSubscription(false)
                        }} className='cursor-pointer px-[17px] py-[9px] rounded-[6px] border-[1px] border-[#A43EE7] inter-font font-[400] text-[11.9px] leading-5 text-[#000000]'>Cancel</button>
                        <button className='cursor-pointer px-[17px] py-[9px] rounded-[6px] inter-font font-[400] text-[11.9px] leading-5 text-[#FFFFFF]' style={{ background: "linear-gradient(to right, #9458E8, #CA00E5)" }}>Save Changes</button>
                    </div>
                </form>
                <hr className='h-[1px] bg-[#E5E7EB] text-[#E5E7EB]' />
            </div>
        </div>
    )
}
