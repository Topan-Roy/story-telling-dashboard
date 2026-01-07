import { Plus, Trash2 } from "lucide-react";
import Pagination from "../ui/Pagination";
import AddAvatarModal from "./AddAvatarModalProps";
import { useState, useEffect } from "react";
import api from "@/Context/api";
import { toast } from "react-toastify";

interface Item {
  _id: string;
  title: string;
  icon: string | null;
  colors: string[];
  createdAt: string;
  updatedAt: string;
}

export default function Items() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const normalizeColor = (color: string) =>
    color.startsWith("#") ? color : `#${color}`;

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await api.get("/api/items");
      const filtered = res.data.data.items.filter((item: Item) => item.icon);
      setItems(filtered);
    } catch (err) {
      console.error("Failed to fetch items", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSaveItem = async () => {
    await fetchItems();
    setIsModalOpen(false);
  };

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/api/items/${id}`);
      setItems(prev => prev.filter(item => item._id !== id));
      toast.success("Item deleted successfully!");
    } catch (err) {
      console.error("Delete failed", err);
      toast.error("Failed to delete item");
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-[#4B5563]">Items Avatars</h2>
        <button
          className="flex items-center gap-2 bg-gradient-to-r from-[#9458E8] via-[#A43EE7] to-[#CA00E5] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus size={18} />
          Add Item
        </button>
      </div>

      {loading ? (
        <p className="text-center mb-10 text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
          {currentItems.map(item => (
            <div key={item._id} className="flex flex-col items-center gap-2 group">
              <div
                className="relative w-32 h-32 aspect-square rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-sm border border-gray-200 flex items-center justify-center"
                style={{
                  background: item.colors.length
                    ? `linear-gradient(90deg,
                        ${normalizeColor(item.colors[0])} 0%,
                        ${normalizeColor(item.colors[1] || item.colors[0])} 50%,
                        ${normalizeColor(item.colors[2] || item.colors[0])} 100%)`
                    : "#f3f3f3"
                }}
              >
                {/* Delete Icon */}
                <button
                  onClick={() => handleDelete(item._id)}
                  className="
                    absolute top-2 right-2 z-10
                    w-8 h-8 rounded-full
                    bg-white/70 backdrop-blur
                    flex items-center justify-center
                    opacity-0 group-hover:opacity-100
                    transition-all duration-200
                    hover:bg-red-50 hover:scale-110
                    shadow-sm
                  "
                  title="Delete"
                >
                  <Trash2 size={14} className="text-red-500" />
                </button>

                {/* Item Icon */}
                <img
                  src={item.icon!}
                  alt={item.title}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              <p className="text-xs text-center text-[#4B5563] font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      )}

      <Pagination
        totalItems={items.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

      <AddAvatarModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        apiEndpoint="/api/items"
        categoryName="Items"
        onSave={handleSaveItem}
      />
    </div>
  );
}
