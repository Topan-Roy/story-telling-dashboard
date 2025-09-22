import React from 'react'
import SideBar from '../ui/SideBar'
import AdminHeader from '../ui/AdminHeader'
import { SearchIcon } from 'lucide-react'
import { statusStyle, subscriptionStyle, tableData, tableHeader } from './data/tableData'
import Pagination from '../ui/Pagination'

export default function TransactionHistory() {
    const [transaction, setTransaction] = React.useState<typeof tableData>(tableData)
    const changeTransaction = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const updatedData = tableData.filter(data => {
            return data["type"] === event.target.value || data["status"] === event.target.value
        })
        setTransaction(updatedData)
        if(event.target.value === "All Transactions") setTransaction(tableData)
    }
    return (
        <section className="flex items-start justify-center bg-[#F9F9F9]">
            <SideBar />
            <div className="w-full pb-[24px]">
                <AdminHeader />
                <div className='mt-6    px-6 flex items-center justify-between'>
                    <h1 className='font-[700] text-[20.4px] leading-[32px] inter-font'>Transaction History</h1>
                    <select onChange={changeTransaction} name="" id="" className='px-[13px] py-[9px] border-[1px] border-[#D1D5DB] rounded-[6px]'>
                        <option value="All Transactions">All Transactions</option>
                        <option value="Subscription">Subscription</option>
                        <option value="Coin Purchase">Coin Purchase</option>
                        <option value="Completed">Completed</option>
                        <option value="Failed">Failed</option>
                        <option value="Refunded">Refunded</option> 
                    </select>
                </div>
                <div className='mt-6 px-6'>
                    <div className='flex items-center justify-center gap-3 bg-white py-[9px] px-[17px] rounded-[6px] border-[1px] border-[#D1D5DB] w-full md:w-[400px] h-full'>
                        <SearchIcon />
                        <input type="search" name="" id="" className='border-none outline-none w-full' placeholder='Search by user name, email, or transaction ID' />
                    </div>
                </div>
                <div className='mt-6 px-6'>
                    <div className='px-[24px] bg-white rounded-[8px] p-6 shadow-md'>
                        <h1 className='text-[17px] leading-[28px] font-bold my-3'>Recent Users</h1>
                        <table className='w-full bg-white rounderd-[6px] '>
                            <thead>
                                <tr>
                                    {
                                        tableHeader.map((header, index) => (
                                            <th key={index} className='p-[10px] w-[152px] capitalize border-b-[0.5px] border-[#EBEBEB] font-semibold text-[14px] leading-[20px] text-[#333333] text-left'>{header}</th>
                                        ))
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    transaction.map((table, index) => (
                                        <tr key={index}>
                                            <td className='text-left text-[#333333] p-[10px] border-b-[0.3px] border-[#EBEBEB] text-[14px] leading-[20px]'>{table.transactionId}</td>
                                            <td className='text-left text-[#333333] p-[10px] border-b-[0.3px] border-[#EBEBEB] text-[14px] leading-[20px]'>{table.userId}</td>
                                            <td className='text-left text-[#333333] p-[10px] border-b-[0.3px] border-[#EBEBEB] text-[14px] leading-[20px]'>{table.name}</td>
                                            <td className='text-left text-[#333333] p-[10px] border-b-[0.3px] border-[#EBEBEB] text-[14px] leading-[20px] truncate'>{table.email}</td>
                                            <td className='text-left text-[#333333] p-[10px] border-b-[0.3px] border-[#EBEBEB] text-[14px] leading-[20px]'>{table.amount}</td>
                                            <td className='text-left text-[#333333] p-[10px] border-b-[0.3px] border-[#EBEBEB] text-[14px] leading-[20px]'>
                                                <span className={`${subscriptionStyle[table.type as keyof typeof subscriptionStyle]}`}>{table.type}</span>
                                            </td>
                                            <td className='text-left text-[#333333] p-[10px] border-b-[0.3px] border-[#EBEBEB] text-[14px] leading-[20px]'>
                                                <span className={`${statusStyle[table.status as keyof typeof statusStyle]}`}>{table.status}</span>
                                            </td>
                                            <td className='text-left text-[#333333] p-[10px] border-b-[0.3px] border-[#EBEBEB] text-[14px] leading-[20px]'>{table.date}</td>
                                            <td className='text-left text-[#333333] p-[10px] border-b-[0.3px] border-[#EBEBEB] text-[14px] leading-[20px]'>{table.paymentMethod}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <div className='mt-4'>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
