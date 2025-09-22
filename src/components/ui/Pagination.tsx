export default function Pagination() {
  return (
    <>
        <div className='p-6 border-t-[1px] border-[#E5E7EB] flex items-center justify-between'>
           <p className='font-[400] text-[11.9px] leading-[20px] text-[#9458E8] inter-font'>Showing 7 of 200  users</p>
            <div className='flex items-center justify-center gap-2'>
                <button className='border-[1px] border-[#A43EE7] cursor-pointer rounded-[6px] px-4 py-1 text-[#727273]'>Previous</button>
                <button className='font-[400] text-[11.9px] leading-[20px] inter-font rounded-[6px] w-[34px] h-[33px] text-white' style={{background: "linear-gradient(to right, #9458E8, #CA00E5)"}} >1</button>
                <button className='border-[1px] border-[#A43EE7] cursor-pointer rounded-[6px] px-4 py-1 text-[#727273]'>Next</button>
            </div>
        </div>
    
    </>
  )
}
