import { Plus } from "lucide-react";
import Pagination from "../ui/Pagination";
import AddAvatarModal from "./AddAvatarModalProps";
import { useState, useEffect } from "react";
import api from "@/Context/api";
interface SongType {
    _id: string;
    title: string;
    icon: string;
    colors: string[];
    createdAt: string;
    updatedAt: string;
}
export default function StoryType() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [songTypes, setSongTypes] = useState<SongType[]>([]);
    const [loading, setLoading] = useState(true); 
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    useEffect(() => {
        const fetchSongTypes = async () => {
            setLoading(true);
            try {
                const res = await api.get("/api/song-types");
                setSongTypes(res.data.data.songTypes);
            } catch (err) {
                console.error("Failed to fetch song types", err);
            } finally {
                setLoading(false);
            }
        };

        fetchSongTypes();
    }, []);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = songTypes.slice(indexOfFirstItem, indexOfLastItem);
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-[#000000]">Story Types Avatars</h2>
                <button
                    className="flex items-center gap-2 bg-gradient-to-r from-[#9458E8] via-[#A43EE7] to-[#CA00E5] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    onClick={() => setIsModalOpen(true)}
                >
                    <Plus size={18} />
                    Add Story Type
                </button>
            </div>
            {loading ? (
                <p className="text-center mb-10 text-gray-500">Loading...</p> 
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
                    {currentItems.map((item) => (
                        <div key={item._id} className="flex flex-col gap-2">
                            <div
                                className="w-32 h-32 aspect-square rounded-xl overflow-hidden bg-gray-100 cursor-pointer hover:scale-105 transition-transform shadow-sm border border-gray-200"
                                style={{
                                    background: `linear-gradient(135deg, #${item.colors[0]} 0%, #${item.colors[1]} 50%, #${item.colors[2]} 100%)`
                                }}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="w-28 h-28 mt-5 object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <Pagination
                totalItems={songTypes.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
            <AddAvatarModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={(data) => console.log("New song type:", data)}
            />
        </div>
    );
}
