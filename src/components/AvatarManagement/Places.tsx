import { Plus } from "lucide-react";
import Pagination from "../ui/Pagination";
import AddAvatarModal from "./AddAvatarModalProps";
import { useState, useEffect } from "react";
import api from "@/Context/api";
interface Place {
    _id: string;
    title: string;
    icon: string | null;
    colors: string[];
    createdAt: string;
    updatedAt: string;
}
export default function Places() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [places, setPlaces] = useState<Place[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
     const normalizeColor = (color: string) =>
        color.startsWith("#") ? color : `#${color}`;
    useEffect(() => {
        const fetchPlaces = async () => {
            setLoading(true);
            try {
                const res = await api.get("/api/places");
                const filtered = res.data.data.places.filter((p: Place) => p.icon);
                setPlaces(filtered);
            } catch (err) {
                console.error("Failed to fetch places", err);
            } finally {
                setLoading(false);
            }
        };
        fetchPlaces();
    }, []);
    const handleSavePlace = async () => {
        await fetchPlaces();
        setIsModalOpen(false);
    };
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = places.slice(indexOfFirstItem, indexOfLastItem);
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-[#4B5563]">Places Avatars</h2>
                <button
                    className="flex items-center gap-2 bg-gradient-to-r from-[#9458E8] via-[#A43EE7] to-[#CA00E5] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    onClick={() => setIsModalOpen(true)}
                >
                    <Plus size={18} />
                    Add Place
                </button>
            </div>
            {loading ? (
                <p className="text-center mb-10 text-gray-500">Loading...</p>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
                    {currentItems.map((item) => (
                        <div key={item._id} className="flex flex-col items-center gap-2">
                            <div
                                className="w-32 h-32 aspect-square rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-sm border border-gray-200"
                                 style={{
                                    background: item.colors?.length
                                        ? `linear-gradient(90deg,
                                    ${normalizeColor(item.colors[0])} 0%,
                                    ${normalizeColor(item.colors[1] || item.colors[0])} 50%,
                                    ${normalizeColor(item.colors[2] || item.colors[0])} 100%)`
                                        : "#f3f3f3"
                                }}
                            >
                                <img
                                    src={item.icon!}
                                    alt={item.title}
                                    className="w-28 h-28 mt-5 object-cover"
                                />
                            </div>
                            <p className="text-xs text-center text-[#4B5563] font-medium">{item.title}</p>
                        </div>
                    ))}
                </div>
            )}
            <Pagination
                totalItems={places.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
            <AddAvatarModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                apiEndpoint="/api/places"
                categoryName="places"
                onSave={handleSavePlace}
            />
        </div>
    );
}
