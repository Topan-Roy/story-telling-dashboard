import { useState, useRef } from 'react';
import { X, Upload, CameraOff } from 'lucide-react';
import api from '@/Context/api';
import { toast } from 'react-toastify';
interface AddAvatarModalProps {
    isOpen: boolean;
    onClose: () => void;
    apiEndpoint: string;
    categoryName?: string;
    onSave?: (data: { title: string; image: File | null; colors: string[] }) => void;
}
function ColorPicker({ color, onChange }: { color: string; onChange: (color: string) => void }) {
    const [hue, setHue] = useState(270);
    const [saturation, setSaturation] = useState(70);
    const [lightness, setLightness] = useState(55);
    const gradientRef = useRef<HTMLDivElement>(null);
    const hslToHex = (h: number, s: number, l: number) => {
        l /= 100;
        const a = s * Math.min(l, 1 - l) / 100;
        const f = (n: number) => {
            const k = (n + h / 30) % 12;
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return Math.round(255 * color).toString(16).padStart(2, '0');
        };
        return `#${f(0)}${f(8)}${f(4)}`;
    };
    const handleGradientClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!gradientRef.current) return;
        const rect = gradientRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const newSaturation = (x / rect.width) * 100;
        const newLightness = 100 - (y / rect.height) * 100;
        setSaturation(newSaturation);
        setLightness(newLightness);
        onChange(hslToHex(hue, newSaturation, newLightness));
    };
    const handleHueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newHue = parseInt(e.target.value);
        setHue(newHue);
        onChange(hslToHex(newHue, saturation, lightness));
    };
    return (
        <div className="space-y-3">
            <div
                ref={gradientRef}
                onClick={handleGradientClick}
                className="w-full h-48 rounded-lg cursor-crosshair relative"
                style={{
                    background: `linear-gradient(to bottom, transparent, black), linear-gradient(to right, white, hsl(${hue}, 100%, 50%))`
                }}
            >
                <div
                    className="absolute w-5 h-5 border-2 border-white rounded-full shadow-lg -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                        left: `${saturation}%`,
                        top: `${100 - lightness}%`
                    }}
                />
            </div>
            <input
                type="range"
                min="0"
                max="360"
                value={hue}
                onChange={handleHueChange}
                className="w-full h-3 rounded-lg cursor-pointer appearance-none"
                style={{
                    background: 'linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)'
                }}
            />
        </div>
    );
}
export default function AddAvatarModal({ isOpen, onClose, apiEndpoint, categoryName = 'Item', onSave }: AddAvatarModalProps) {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [backgroundColor, setBackgroundColor] = useState('#7C3AED');
    const [backgroundColor2, setBackgroundColor2] = useState('#EC4899');
    const [gradientAngle, setGradientAngle] = useState(135);
    const [isGradient, setIsGradient] = useState(false);
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [showColorPicker2, setShowColorPicker2] = useState(false);
    const [loading, setLoading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const gradientStyle = isGradient
        ? { background: `linear-gradient(${gradientAngle}deg, ${backgroundColor}, ${backgroundColor2})` }
        : { backgroundColor };
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleSave = async () => {
        if (!title || !image) return;

        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('icon', image)
            const colors = [
                backgroundColor.replace('#', ''),
                backgroundColor2.replace('#', ''),
                backgroundColor.replace('#', '')
            ];
            colors.forEach((color, index) => {
                formData.append(`colors[${index}]`, color);
            });
            const response = await api.post(apiEndpoint, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Success:', response.data);
            if (onSave) {
                onSave({ title, image, colors });
            }
            toast.success(`${categoryName} created successfully!`);
            handleClose();
        } catch (error: any) {
            console.error(`Error creating ${categoryName}:`, error);
            toast.error(error.response?.data?.message || `Failed to create ${categoryName}. Please try again.`);
        } finally {
            setLoading(false);
        }
    };
    const handleClose = () => {
        setTitle('');
        setImage(null);
        setImagePreview(null);
        setBackgroundColor('#7C3AED');
        setBackgroundColor2('#EC4899');
        setGradientAngle(135);
        setIsGradient(false);
        setShowColorPicker(false);
        setShowColorPicker2(false);
        setLoading(false);
        onClose();
    };
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between p-5 border-b border-gray-100 sticky top-0 bg-white z-10">
                    <h2 className="text-lg font-semibold text-gray-900">Add {categoryName}</h2>
                    <button
                        onClick={handleClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>
                <div className="p-5 space-y-5">
                    <div className="flex flex-col items-center">
                        <div
                            className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg mb-2 overflow-hidden"
                            style={gradientStyle}
                        >
                            {imagePreview ? (
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <CameraOff className="text-white opacity-70" size={40} strokeWidth={1.5} />
                            )}
                        </div>
                        <p className="text-xs text-gray-500 text-center">
                            {imagePreview ? 'Image with gradient background' : 'Upload image to preview'}
                        </p>
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1.5">
                            Title
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter title"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-sm placeholder:text-gray-400"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1.5">
                            Avatar Image
                        </label>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                        <div
                            onClick={() => fileInputRef.current?.click()}
                            className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-purple-400 hover:bg-purple-50/30 transition-all"
                        >
                            <Upload className="mx-auto text-gray-400 mb-1.5" size={28} strokeWidth={1.5} />
                            <p className="text-xs text-gray-600">Click to upload image</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <label className="block text-xs font-medium text-gray-700">
                                Background Color
                            </label>
                            <button
                                onClick={() => setIsGradient(!isGradient)}
                                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${isGradient
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                {isGradient ? 'Gradient Mode' : 'Solid Mode'}
                            </button>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => {
                                        setShowColorPicker(!showColorPicker);
                                        setShowColorPicker2(false);
                                    }}
                                    className="w-12 h-12 rounded-lg border-2 border-gray-300 hover:border-purple-400 transition-all shadow-sm hover:scale-105"
                                    style={{ backgroundColor }}
                                />
                                {/* <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-700">{backgroundColor}</p>
                                    <p className="text-xs text-gray-500">{isGradient ? 'Color 1' : 'Background Color'}</p>
                                </div> */}
                            </div>
                            {showColorPicker && (
                                <div className="mb-3">
                                    <ColorPicker color={backgroundColor} onChange={setBackgroundColor} />
                                </div>
                            )}
                            {isGradient && (
                                <>
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => {
                                                setShowColorPicker2(!showColorPicker2);
                                                setShowColorPicker(false);
                                            }}
                                            className="w-12 h-12 rounded-lg border-2 border-gray-300 hover:border-purple-400 transition-all shadow-sm hover:scale-105"
                                            style={{ backgroundColor: backgroundColor2 }}
                                        />
                                        {/* <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-700">{backgroundColor2}</p>
                                            <p className="text-xs text-gray-500">Color 2</p>
                                        </div> */}
                                    </div>
                                    {showColorPicker2 && (
                                        <div className="mb-3">
                                            <ColorPicker color={backgroundColor2} onChange={setBackgroundColor2} />
                                        </div>
                                    )}
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-2">
                                            Gradient Angle: {gradientAngle}°
                                        </label>
                                        <input
                                            type="range"
                                            min="0"
                                            max="360"
                                            value={gradientAngle}
                                            onChange={(e) => setGradientAngle(parseInt(e.target.value))}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                        />
                                    </div>
                                </>
                            )}
                            <div
                                className="w-full h-12 rounded-lg shadow-sm"
                                style={gradientStyle}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-2.5 px-5 pb-5 sticky bottom-0 bg-white pt-3">
                    <button
                        onClick={handleClose}
                        className="px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={!title || !image || loading}
                        className="px-5 py-2 text-sm bg-gradient-to-r from-[#9458E8] via-[#A43EE7] to-[#CA00E5] text-white rounded-lg hover:opacity-90 transition-opacity font-medium shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Saving...' : 'Save'}
                    </button>
                </div>
            </div>
        </div>
    );
}

