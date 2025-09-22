import React from 'react'
import SideBar from '../ui/SideBar'
import AdminHeader from '../ui/AdminHeader'
import { Link } from 'react-router-dom'
import { packageData, singlePckageData, statusStyle, type SinglePckageDataType, type StatusStyleType } from './data/packageData'
import EditIcon from '../svgs/EditIcon'
import DeleteIcon from '../svgs/DeleteIcon'
import CoinIcon from '../svgs/CoinIcon'
import TrComponentUpdate from './components/TrComponentUpdate'
import AddPackage from './components/AddPackage'

export default function SubscriptionPackages() {
    const [singlePackageData, setSinglePackageData] = React.useState<SinglePckageDataType>(singlePckageData)
    const [showUpdate, setShowUpdate] = React.useState<boolean>(false)
    const [showAddSubscription, setShowAddSubscription] = React.useState<boolean>(false)
    return (
        <section className="flex items-start justify-center bg-[#F9F9F9] relative">
            <SideBar />
            <div className='w-full relative'>
                <AdminHeader />
                <div className='mt-6    px-6'>
                    <h1 className='font-[700] text-[20.4px] leading-[32px] inter-font'>Subscription</h1>
                </div>
                <div className='mt-6    px-6'>
                    <div className='flex items-center justify-start gap-6 border-b-[1px] border-[#E5E7EB] '>
                        <div className='flex items-center justify-center gap-[10px] py-3 border-b-[2px] border-b-[#9458E8]'>
                            <Link to={`/dashboard/subscription-management-package`} className='font-[700] text-[11.9px] leading-[20px] text-[#9458E8] inter-font cursor-pointer'>Subscription Packages</Link>
                        </div>
                        <div className='flex items-center justify-center gap-[10px] py-3'>
                            <Link to={`/dashboard/subscription-management-analytics`} className='font-[700] text-[11.9px] leading-[20px] text-[#6B7280] inter-font cursor-pointer'>Analytics</Link>
                        </div>
                    </div>
                </div>
                <div className='mt-6 px-6'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-[#1F2937] text-[15.3px] leading-[28px] font-[600]'>Subscription Packages</h1>
                        <div onClick={() => setShowAddSubscription(true)} className='flex items-center justify-center py-[8px] px-[16px] gap-2 cursor-pointer rounded-[6px]' style={{ background: "linear-gradient(to right, #9458E8, #CA00E5)" }}>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.677 8.5H13.0103" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.34375 3.83331V13.1666" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <button className='text-[11.9px] leading-[20px] font-[400] text-[#FFFFFF] cursor-pointer'>Add Package</button>
                        </div>
                    </div>
                </div>
                {showAddSubscription ? <AddPackage setShowAddSubscription={setShowAddSubscription} /> : <></>}
                <div className='mt-6 px-6'>
                    <div className='bg-white px-[24px] rounded-[8px]'>
                        <table className='w-full '>
                            <thead className=''>
                                <tr className=''>
                                    <th className='p-[10px] border-b-[0.5px] border-[#EBEBEB] font-semibold text-[14px] leading-[20px] text-[#333333] text-left'>Package</th>
                                    <th className='p-[10px] border-b-[0.5px] border-[#EBEBEB] font-semibold text-[14px] leading-[20px] text-[#333333] text-left'>Coins</th>
                                    <th className='p-[10px] border-b-[0.5px] border-[#EBEBEB] font-semibold text-[14px] leading-[20px] text-[#333333] text-left'>Price</th>
                                    <th className='p-[10px] border-b-[0.5px] border-[#EBEBEB] font-semibold text-[14px] leading-[20px] text-[#333333] text-left'>Status</th>
                                    <th className='p-[10px] border-b-[0.5px] border-[#EBEBEB] font-semibold text-[14px] leading-[20px] text-[#333333] text-left'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    packageData.map((packageData, index) => (
                                        <tr className="relative" key={index}>
                                            <td className='p-[10px] text-left border-b-[0.3px] border-[#EBEBEB] text-[14px] leading-[20px] flex items-center justify-start gap-2'>
                                                <CoinIcon color='#333333'/>
                                                <p className='text-[#333333]'>{packageData.Package}</p>
                                            </td>
                                            <td style={{ padding: "10px !important" }} className='p-[10px] text-left border-b-[0.3px] border-[#EBEBEB] text-[14px] leading-[20px] text-[#333333]'>{packageData.Coins}</td>
                                            <td className='p-[10px] text-left border-b-[0.3px] border-[#EBEBEB] text-[14px] leading-[20px] text-[#333333]'>{packageData.Price}</td>
                                            <td className={` text-left border-b-[0.3px] border-[#EBEBEB] `}>
                                                <p className={`${statusStyle[packageData.Status as StatusStyleType]}  text-[14px] leading-[20px] p-[1px] text-center`}>{packageData.Status}</p>
                                            </td>
                                            <td className='p-[10px] text-left border-b-[0.3px] border-[#EBEBEB] text-[14px] leading-[20px] flex items-center justify-start gap-8'>
                                                <div onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                                                    e.preventDefault();
                                                    setShowUpdate(true);
                                                    setSinglePackageData(packageData)
                                                }}><EditIcon /></div>
                                                <DeleteIcon />
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                       {
                        showUpdate ? <TrComponentUpdate packageData={singlePackageData} setShowUpdate={setShowUpdate} /> : <></>
                       }
                    </div>
                </div>
            </div>
        </section>
    )
}
