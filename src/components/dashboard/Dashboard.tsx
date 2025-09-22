
import BarComponent from "./components/BarComponent"
import LineChart from "./components/LineChart"
import SideBar from "../ui/SideBar"
import AdminHeader from "../ui/AdminHeader"
import { cardData } from "./data/cardData"
import UserActivityIcon from "../svgs/UserActivityIcon"
import AreaChartComponent from "./components/AreaChartComponent"
import { userTableData } from "./data/userTableData"
import Pagination from "../ui/Pagination"
export const description = "An area chart with axes"

export default function ChartAreaAxes() {
  return (
    <>
      <section className="flex items-start justify-center bg-[#F9F9F9]">
        <SideBar />
        <div className="w-full pb-[24px]">
          <AdminHeader />
          <div className="flex items-center justify-between px-[24px] my-[24px]">
            <h2 className="font-[700] text-[20.4px] leading-[32px] inter-font">Dashboard Overview</h2>
            <select name="" id="" className="rounded-md border-[1px] border-slate-200 p-2">
              <option value="">Last 1 month</option>
              <option value="">Last 6 months</option>
            </select>
          </div>
          <div className="flex items-center justify-center gap-4 px-[24px] flex-wrap lg:flex-nowrap">
            {
              cardData.map(card => <div className="p-4 bg-white w-full rounded-md shadow-md">
                <div className="flex items-center justify-between">
                  <p className="font-[500] text-[11.9px] leading-[20px] inter-font text-[#6B7280]">{card.name}</p>
                  <div>{card.icon}</div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <p className="font-[700] text-[21px] leading-[32px] inter-font">${card.value}</p>
                  <div className="flex items-center gap-2 text-[#22C55E]">
                    {card.changeIcon}
                    <p className="font-[500] text-[11.9px] leading-[20px] inter-font">{card.change}</p>
                  </div>
                </div>
              </div>)
            }
          </div>
          <div className="mt-[24px] flex items-stretch justify-center px-[24px] gap-6 flex-wrap lg:flex-nowrap">
            <div className="w-full bg-white rounded-md shadow-md p-6">
              <h1 className="inter-font font-[600] text-[15.3px] leading-[28px]">Revenue Overview</h1>
              <BarComponent />
            </div>
            <div className="w-full bg-white rounded-md shadow-md p-6">
              <h1 className="inter-font font-[600] text-[15.3px] leading-[28px]">User Activity</h1>
              <LineChart />
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center justify-center gap-1">
                  <UserActivityIcon />
                  <p className="font-[400] text-[13.6px] leading-[24px] inter-font text-[#9458E8]">Stories Created</p>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <UserActivityIcon />
                  <p className="font-[400] text-[13.6px] leading-[24px] inter-font text-[#CA00E5]">Songs Generated</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[24px] px-[24px]">
            <div className="bg-white rounded-md shadow-md">
              <div className="flex items-center justify-between p-6">
                <h1 className="inter-font font-[600] text-[15.3px] leading-[28px]">Revenue vs. API Costs</h1>
                <select name="" id="" className="rounded-md border-[1px] border-slate-200 p-2">
                  <option value="">Last 1 month</option>
                  <option value="">Last 6 months</option>
                </select>
              </div>
              <AreaChartComponent />
            </div>
          </div>
          <div className="mt-[24px] px-[24px]">
            <div className="bg-white rounded-md shadow-md px-[24px] py-[12px] overflow-x-auto">
              <h1 className="font-[700] text-[17px] leading-[28px] inter-font pt-[24px] pb-[16px]">Recent Users</h1>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr>
                      <th className="font-semibold text-[14px] leading-[20px] p-[10px] text-left">User ID</th>
                      <th className="font-semibold text-[14px] leading-[20px] p-[10px] text-left">User</th>
                      <th className="font-semibold text-[14px] leading-[20px] p-[10px] text-left">Email</th>
                      <th className="font-semibold text-[14px] leading-[20px] p-[10px] text-left">Subscription Status</th>
                      <th className="font-semibold text-[14px] leading-[20px] p-[10px] text-left">Joining Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      userTableData["Recent Users"].map((tableData, index) => <tr key={index}>
                        <td className="text-[14px] leading-[20px] text-[#333333] p-[10px] border-b-[0.3px] border-[#EBEBEB]">{tableData["User ID"]}</td>
                        <td className="text-[14px] leading-[20px] text-[#333333] p-[10px] border-b-[0.3px] border-[#EBEBEB]">{tableData.User}</td>
                        <td className="text-[14px] leading-[20px] text-[#333333] p-[10px] border-b-[0.3px] border-[#EBEBEB]">{tableData.Email}</td>
                        <td className="text-[14px] leading-[20px] text-[#333333] p-[10px] border-b-[0.3px] border-[#EBEBEB]">{tableData["Subscription Status"]}</td>
                        <td className="text-[14px] leading-[20px] text-[#333333] p-[10px] border-b-[0.3px] border-[#EBEBEB]">{tableData["Joining Date"]}</td>
                      </tr>)
                    }
                  </tbody>
                </table>
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
