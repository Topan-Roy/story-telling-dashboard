import SideBar from '../ui/SideBar'
import AdminHeader from '../ui/AdminHeader'

export default function StoryPrompts() {
    return (
        <div className="flex items-start justify-center bg-[#F9F9F9]">
            <SideBar />
            <div className='w-full pb-4'>
                <AdminHeader />
                
            </div>
        </div>
    )
}
