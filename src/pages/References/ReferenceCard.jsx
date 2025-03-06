import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReferenceCard = ({ id, imageUrl }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/referanslar/${id}`);
    };

    return (
        <div
            className="relative cursor-pointer rounded-lg overflow-hidden group transition-all duration-500 transform hover:scale-110 hover:shadow-2xl h-48 border border-black"
            onClick={handleCardClick}
            style={{
                background: "white",
                boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
            }}
        >
            <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            ></div>

            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-0 transition-all duration-500"></div>

            <div className="relative z-10 p-6 text-white transition-all duration-300 group-hover:bg-transparent group-hover:opacity-100">
            </div>
            <div
                className="absolute inset-0 border-2 border-transparent rounded-lg transition-all duration-300">
            </div>
        </div>
    );
};

export default ReferenceCard;