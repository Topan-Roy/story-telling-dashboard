import { Plus } from 'lucide-react';
import Pagination from '../ui/Pagination';
import AddAvatarModal from "./AddAvatarModalProps";
import { useState } from 'react';
export default function Avatars() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const avatars = [
        { id: 1, image: 'https://i.pravatar.cc/40', name: 'Wizard' },
        { id: 2, image: 'https://i.pravatar.cc/40', name: 'Princess' },
        { id: 3, image: 'https://i.pravatar.cc/40', name: 'Worker' },
        { id: 4, image: 'https://i.pravatar.cc/40', name: 'Fairy' },
        { id: 5, image: 'https://i.pravatar.cc/40', name: 'Unicorn' },
    ];
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-[#000000]">Profile Avatars</h2>
                <button className="flex items-center gap-2 bg-gradient-to-r from-[#9458E8] via-[#A43EE7] to-[#CA00E5] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    onClick={() => setIsModalOpen(true)}
                >
                    <Plus size={18} />
                    Add Avatar
                </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
                {avatars.map((item) => (
                    <div key={item.id} className="flex flex-col gap-2">
                        <div className="w-32 h-32 aspect-square rounded-xl overflow-hidden bg-gray-100 cursor-pointer hover:scale-105 transition-transform shadow-sm  ">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <Pagination />
            <AddAvatarModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={(data) => console.log(data)}
            />

        </div>
    );
}
