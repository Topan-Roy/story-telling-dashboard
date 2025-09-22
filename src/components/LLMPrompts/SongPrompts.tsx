import SideBar from '../ui/SideBar'
import AdminHeader from '../ui/AdminHeader'

export default function StoryPrompts() {
    return (
        <div className="flex items-start justify-center bg-[#F9F9F9]">
            <SideBar />
            <div className='w-full pb-4'>
                <AdminHeader />
                {/* <div className='mt-6    px-6'>
                    <div className='flex items-center justify-start gap-6 border-b-[1px] border-[#E5E7EB] '>
                        <div className='flex items-center justify-center gap-[10px] py-3 border-b-[2px] border-b-[#9458E8]'>
                            <StoryIcon />
                            <Link to={`/dashboard/story-prompts`} className='font-[700] text-[11.9px] leading-[20px] text-[#9458E8] inter-font cursor-pointer'>Story</Link>
                        </div>
                        <div className='flex items-center justify-center gap-[10px] py-3'>
                            <SongIcon />
                            <Link to={`/dashboard/audio-prompts`} className='font-[700] text-[11.9px] leading-[20px] text-[#6B7280] inter-font cursor-pointer'>Music</Link>
                        </div>
                        <div className='flex items-center justify-center gap-[10px] py-3'>
                            <LLMBlockListIcon />
                            <Link to={`/dashboard/llm-blocklist-prompts`} className='font-[700] text-[11.9px] leading-[20px] text-[#6B7280] inter-font cursor-pointer'>LLM Blocklist</Link>
                        </div>
                    </div>
                </div> */}
                
            </div>
        </div>
    )
}
