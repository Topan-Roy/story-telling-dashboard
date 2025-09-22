export default function UserDetailsTable() {
  return (
    <div className='w-full'>
        <table className='w-full mt-6'>
            <thead className='w-full'>
                <tr className='w-full'>
                    <th className='text-[#6B7280] text-[11.9px] leading-[20px] inter-font font-[400] text-left w-[256px]'>Full Name</th>
                    <th className='text-[#6B7280] text-[11.9px] leading-[20px] inter-font font-[400] text-left w-[256px] '>Email</th>
                    <th className='text-[#6B7280] text-[11.9px] leading-[20px] inter-font font-[400] text-left w-[256px] '>Age</th>
                    <th className='text-[#6B7280] text-[11.9px] leading-[20px] inter-font font-[400] text-left w-[256px] '>Gender</th>
                    <th className='text-[#6B7280] text-[11.9px] leading-[20px] inter-font font-[400] text-left w-[256px] '>Account Status</th>
                </tr>
            </thead>
            <div className='w-full mt-2'></div>
            <tbody className=''>
                <tr>
                    <td className='text-[#000000] font-[400] text-[16px] leading-[24px] text-left '>Jane Copper</td>
                    <td className='text-[#000000] font-[400] text-[16px] leading-[24px] text-left '>name@email.com</td>
                    <td className='text-[#000000] font-[400] text-[16px] leading-[24px] text-left '>32</td>
                    <td className='text-[#000000] font-[400] text-[16px] leading-[24px] text-left '>Male</td>
                    <td className='text-[#000000] font-[400] text-[16px] leading-[24px] text-left '>Active</td>
                </tr>
            </tbody>
        </table>
        <table className='w-full mt-6'>
            <thead className='w-full'>
                <tr className='w-full'>
                    <th className='text-[#6B7280] text-[11.9px] leading-[20px] inter-font font-[400] text-left w-[256px]'>Subscription</th>
                    <th className='text-[#6B7280] text-[11.9px] leading-[20px] inter-font font-[400] text-left w-[256px] '>Joined Date</th>
                    <th className='text-[#6B7280] text-[11.9px] leading-[20px] inter-font font-[400] text-left w-[256px] '>Contend Creaed</th>
                    <th className='text-[#6B7280] text-[11.9px] leading-[20px] inter-font font-[400] text-left w-[256px] '>Coins</th>
                    <th className='text-[#6B7280] text-[11.9px] leading-[20px] inter-font font-[400] text-left w-[256px] '>Profile created</th>
                </tr>
            </thead>
            <div className='w-full mt-2'></div>
            <tbody className=''>
                <tr>
                    <td className='text-[#000000] font-[400] text-[16px] leading-[24px] text-left '>10 Token</td>
                    <td className='text-[#000000] font-[400] text-[16px] leading-[24px] text-left '>Jan 15, 2023</td>
                    <td className='text-[#000000] font-[400] text-[16px] leading-[24px] text-left '>23 Stories, 15 Songs</td>
                    <td className='text-[#000000] font-[400] text-[16px] leading-[24px] text-left '>
                        <p className='py-[5px] px-[16px] border-[1px] border-[#D1D5DB] rounded-[6px] w-[80%]'>450</p>
                    </td>
                    <td className='text-[#000000] font-[400] text-[16px] leading-[24px] text-left '>3</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
