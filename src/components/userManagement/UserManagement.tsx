import SideBar from '../ui/SideBar'
import AdminHeader from '../ui/AdminHeader'
import Search from '../svgs/Search'
import FilterIcon from '../svgs/FilterIcon'
import { tokenSubsriptionCondition, userManagementData, type tokenSubsriptionConditionType } from './data/userManagementData'
import { Link } from 'react-router-dom'
import Pagination from '../ui/Pagination'

export default function UserManagement() {
    return (
        <section className="flex items-start justify-center bg-[#F9F9F9]">
            <SideBar />
            <div className='w-full'>
                <AdminHeader />
                <div className="flex items-center justify-between px-[24px] my-[24px]">
                    <h2 className="font-[700] text-[20.4px] leading-[32px] inter-font">User Management</h2>
                    <select name="" id="" className="rounded-md border-[1px] border-slate-200 p-2">
                        <option value="">Last 1 month</option>
                        <option value="">Last 6 months</option>
                    </select>
                </div>
                <div className='flex items-center justify-center gap-6 px-6 py-6'>
                    <div className='flex items-center justify-center gap-[11px] bg-white border-[1px] border-[#E5E7EB] rounded-[6px] shadow py-[9px] pl-[17px] w-full'>
                        <Search />
                        <input type="search" name="search" id="search" className='w-full font-[400] text-[16px] leading-[24px] text-[#CCCCCC] border-none outline-none' placeholder='Search users by name or email' />
                    </div>
                    <div className='border-[1px] border-[#E5E7EB] rounded-[6px] px-4 py-2 flex items-center justify-center gap-2'>
                        <FilterIcon />
                        <button className='font-[400] text-[13.6px] leading-[24px] inter-font cursor-pointer'>Filter</button>
                    </div>
                </div>
                <div className='px-4 md:px-6 py-6 w-full'>
                    <div className='w-full bg-white p-4 md:p-6 rounded-[8px] overflow-hidden'>
                        <div className='overflow-x-auto'>
                            <table className='w-full min-w-[1000px]'>
                                <thead>
                                    <tr className='bg-gray-50'>
                                        <th className='font-semibold text-[12px] md:text-[14px] leading-[20px] text-[#333333] text-left p-2 md:p-[10px] border-b-[0.5px] border-[#EBEBEB]'>User ID</th>
                                        <th className='font-semibold text-[12px] md:text-[14px] leading-[20px] text-[#333333] text-left p-2 md:p-[10px] border-b-[0.5px] border-[#EBEBEB]'>User</th>
                                        <th className='font-semibold text-[12px] md:text-[14px] leading-[20px] text-[#333333] text-left p-2 md:p-[10px] border-b-[0.5px] border-[#EBEBEB]'>Email</th>
                                        <th className='font-semibold text-[12px] md:text-[14px] leading-[20px] text-[#333333] text-left p-2 md:p-[10px] border-b-[0.5px] border-[#EBEBEB]'>Active Status</th>
                                        <th className='font-semibold text-[12px] md:text-[14px] leading-[20px] text-[#333333] text-left p-2 md:p-[10px] border-b-[0.5px] border-[#EBEBEB]'>Profile Created</th>
                                        <th className='font-semibold text-[12px] md:text-[14px] leading-[20px] text-[#333333] text-left p-2 md:p-[10px] border-b-[0.5px] border-[#EBEBEB]'>Story Created</th>
                                        <th className='font-semibold text-[12px] md:text-[14px] leading-[20px] text-[#333333] text-left p-2 md:p-[10px] border-b-[0.5px] border-[#EBEBEB]'>Song Created</th>
                                        <th className='font-semibold text-[12px] md:text-[14px] leading-[20px] text-[#333333] text-left p-2 md:p-[10px] border-b-[0.5px] border-[#EBEBEB]'>Coin</th>
                                        <th className='font-semibold text-[12px] md:text-[14px] leading-[20px] text-[#333333] text-left p-2 md:p-[10px] border-b-[0.5px] border-[#EBEBEB]'>Subscription</th>
                                        <th className='font-semibold text-[12px] md:text-[14px] leading-[20px] text-[#333333] text-left p-2 md:p-[10px] border-b-[0.5px] border-[#EBEBEB]'>Joined</th>
                                        <th className='font-semibold text-[12px] md:text-[14px] leading-[20px] text-[#333333] text-left p-2 md:p-[10px] border-b-[0.5px] border-[#EBEBEB]'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userManagementData.users.map((userData, index) => (
                                        <tr key={index} className='hover:bg-gray-50'>
                                            <td className='text-left text-[#333333] p-2 md:p-[10px] border-b-[0.3px] border-[#EBEBEB] text-[12px] md:text-[14px] leading-[20px]'>{userData['User ID']}</td>
                                            <td className='text-left text-[#333333] p-2 md:p-[10px] border-b-[0.3px] border-[#EBEBEB] text-[12px] md:text-[14px] leading-[20px]'>{userData.User}</td>
                                            <td className='text-left text-[#333333] p-2 md:p-[10px] border-b-[0.3px] border-[#EBEBEB] text-[12px] md:text-[14px] leading-[20px] truncate max-w-[120px]' title={userData.Email}>{userData.Email}</td>
                                            <td className='text-left p-2 md:p-[10px] border-b-[0.3px] border-[#EBEBEB] text-[12px] md:text-[14px] leading-[20px]'>
                                                <p className={`p-[1px] text-center rounded-[9999px] ${userData['Active Status'] === "Active" ? "text-[#166534] bg-[#DCFCE7]" : "bg-[#FEE2E2] text-[#991B1B]"} w-[70px] h-[20px]`}>{userData['Active Status']}</p>
                                            </td>
                                            <td className='text-left text-[#333333] p-2 md:p-[10px] border-b-[0.3px] border-[#EBEBEB] text-[12px] md:text-[14px] leading-[20px]'>{userData['Profile Created']}</td>
                                            <td className='text-left text-[#333333] p-2 md:p-[10px] border-b-[0.3px] border-[#EBEBEB] text-[12px] md:text-[14px] leading-[20px]'>{userData['Story Created']}</td>
                                            <td className='text-left text-[#333333] p-2 md:p-[10px] border-b-[0.3px] border-[#EBEBEB] text-[12px] md:text-[14px] leading-[20px]'>{userData['Song Created']}</td>
                                            <td className='text-left text-[#333333] p-2 md:p-[10px] border-b-[0.3px] border-[#EBEBEB] text-[12px] md:text-[14px] leading-[20px]'>{userData.Coins}</td>
                                            <td className='text-left text-[#333333] p-2 md:p-[10px] border-b-[0.3px] border-[#EBEBEB] text-[12px] md:text-[14px] leading-[20px]'>
                                                <p className={`${tokenSubsriptionCondition[userData.Subscription as tokenSubsriptionConditionType]}`}>{userData.Subscription}</p>
                                            </td>
                                            <td className='text-left text-[#333333] p-2 md:p-[10px] border-b-[0.3px] border-[#EBEBEB] text-[12px] md:text-[14px] leading-[20px]'>{userData.Joined}</td>
                                            <td className='text-left p-2 md:p-[10px] border-b-[0.3px] border-[#EBEBEB] text-[11px] md:text-[11.9px] leading-[20px] text-[#A43EE7] font-[500]'>
                                                <Link to={`/dashboard/user-management/12365`} className='whitespace-nowrap'>View Details</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div>
        </section>
    )
}
