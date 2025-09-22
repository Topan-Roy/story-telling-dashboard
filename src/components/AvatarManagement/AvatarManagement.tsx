import SideBar from '../ui/SideBar'
import AdminHeader from '../ui/AdminHeader'

export default function AvatarManagement() {
    return (
        <section className="flex items-start justify-center bg-[#F9F9F9] relative">
            <SideBar />
            <div className='w-full relative'>
                <AdminHeader />
                <div className='mt-6    px-6'>
                    <h1 className='font-[700] text-[20.4px] leading-[32px] inter-font'>Avatar Management</h1>
                </div>
            </div>
        </section>
    )
}
