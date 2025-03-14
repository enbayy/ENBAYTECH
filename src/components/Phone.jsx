import { useState } from "react";
import { motion } from "framer-motion";

const PhoneCard = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isMoving, setIsMoving] = useState(false);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 10;
        const y = (e.clientY - top - height / 2) / 10;

        setPosition({ x, y });
        setIsMoving(true);
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
        setIsMoving(false);
    };

    return (
        <div className="flex items-center justify-center h-[60vh] p-6">
            <motion.div
                className="relative w-64 h-[500px] bg-gray-900 rounded-[40px] border-4 border-gray-700 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-center p-4"
                animate={{ x: isMoving ? position.x * 1.5 : 0, y: isMoving ? position.y * 1.5 : 0, rotateX: position.y, rotateY: -position.x }}
                transition={{ type: "spring", stiffness: 80, damping: 10 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div className="absolute left-[-6px] top-24 w-1.5 h-16 bg-gray-700 rounded-md"></div>
                <div className="absolute top-20 left-[-5px] w-1 h-12 bg-gray-700 rounded-full"></div>
                <div className="absolute top-32 left-[-5px] w-1 h-8 bg-gray-700 rounded-full"></div>

                <div className="absolute top-28 right-[-5px] w-1 h-16 bg-gray-700 rounded-full"></div>

                <div className="absolute top-2 w-20 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                </div>
                <motion.div
                    className="w-[90%] h-[90%] bg-[#1c1c1c] rounded-[30px] flex items-center justify-center text-white text-xl shadow-lg border-2 border-gray-600 relative"
                    animate={{ x: isMoving ? position.x * 2 : 0, y: isMoving ? position.y * 2 : 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                >
                    <div className="text-center w-full">
                        <p className="text-white text-lg font-semibold">PixmartReady</p>
                        <p className="text-sm text-white">Toptancıların Cep Kataloğu!</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-4 bg-gray-800 rounded-b-[20px]"></div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default PhoneCard;