import { useState, useEffect } from 'react';
import SideBar from '../ui/SideBar';
import AdminHeader from '../ui/AdminHeader';
import Avatars from './Avatars';
import StoryType from './StoryType';
import Characters from './Characters';
import Places from './Places';
import Items from './Items';
import Theme from './Theme';
import api from '@/Context/api';

export default function AvatarManagement() {
    const [selectedCategory, setSelectedCategory] = useState('Avatars');
    const [categories, setCategories] = useState([
        { name: 'Avatars', count: 0 },
        { name: 'Story Type', count: 0 },
        { name: 'Characters', count: 0 },
        { name: 'Places', count: 0 },
        { name: 'Items', count: 0 },
        { name: 'Theme', count: 0 },
    ]);

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const [avatarsRes, storyRes, charRes, placesRes, itemsRes, themeRes] = await Promise.all([
                    api.get('/api/avatars'),
                    api.get('/api/song-types'),
                    api.get('/api/characters'),
                    api.get('/api/places'),
                    api.get('/api/items'),
                    api.get('/api/themes')
                ]);

                setCategories([
                    { name: 'Avatars', count: avatarsRes.data.data.avatars?.length || 0 },
                    { name: 'Story Type', count: storyRes.data.data.songTypes?.length || 0 },
                    { name: 'Characters', count: charRes.data.data.characters?.filter((c:any)=>c.icon).length || 0 },
                    { name: 'Places', count: placesRes.data.data.places?.filter((p:any)=>p.icon).length || 0 },
                    { name: 'Items', count: itemsRes.data.data.items?.filter((i:any)=>i.icon).length || 0 },
                    { name: 'Theme', count: themeRes.data.data.themes?.filter((t:any)=>t.icon).length || 0 },
                ]);

            } catch (err) {
                console.error("Failed to fetch category counts", err);
            }
        };

        fetchCounts();
    }, []);

    const renderContent = () => {
        switch (selectedCategory) {
            case 'Avatars': return <Avatars />;
            case 'Story Type': return <StoryType />;
            case 'Characters': return <Characters />;
            case 'Places': return <Places />;
            case 'Items': return <Items />;
            case 'Theme': return <Theme />;
            default: return <Avatars />;
        }
    };

    return (
        <section className="flex items-start justify-center bg-[#F9F9F9] relative">
            <SideBar />
            <div className='w-full pb-[24px]'>
                <AdminHeader />
                <div className='mt-6 px-6'>
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-[#4B5563] mb-1">Avatar Management</h1>
                        <p className="text-sm text-[#6B7280]">View and manage your Avatars</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {/* Categories Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-[#FFFFFF] rounded-lg shadow border border-gray-200 p-5">
                                <h2 className="text-md font-semibold text-[#4B5563] mb-4">Categories</h2>
                                <div className="space-y-1">
                                    {categories.map((category, index) => (
                                        <div
                                            key={index}
                                            onClick={() => setSelectedCategory(category.name)}
                                            className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-[24px] cursor-pointer transition-colors text-[#4B5563] ${selectedCategory === category.name
                                                    ? 'bg-purple-50 text-[#9458E8]'
                                                    : 'text-[#4B5563] hover:bg-gray-50'
                                                }`}
                                        >
                                            <span className="text-sm font-medium">{category.name}</span>
                                            <span className={`text-xs font-semibold ${selectedCategory === category.name ? 'text-purple-600' : 'text-gray-400'}`}>
                                                {category.count}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
