import { ParallaxBanner } from "react-scroll-parallax";
import "./ParallaxSection.css";
import foto from "../assets/foto1.jpg";
import { useNavigate } from "react-router-dom";

const ParallaxSection = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/iletisim")
    }
    return (
        <ParallaxBanner
            layers={[
                { image: foto, speed: -20 },
                {
                    speed: -15,
                    children: (
                        <div className="parallax-overlay">
                            <div className="black-overlay" />
                            <div className="cta-text">
                                <h1 className="font-inter">ENBAYTECH ile Dijital Gücünüzü Artırın</h1>
                                <p className="font-poppins">
                                    Modern yazılım çözümleri, estetik tasarımlar ve güçlü dijital stratejilerle markanızı bir adım öne taşıyoruz.
                                </p>
                                <button onClick={handleClick} className="cta-button inline-block px-6 py-3 sm:px-10 sm:py-3 md:px-14 md:py-4 border-2 border-white dark:border-[#e0f2f1] rounded-full font-semibold text-white dark:text-[#e0f2f1] hover:bg-[#10b981] hover:text-white dark:hover:bg-[#10b981] dark:hover:text-[#1a1f1c] transition duration-300 ease-in-out text-sm sm:text-base font-inter">
                                    Bize Ulaşın
                                </button>
                            </div>
                        </div>
                    ),
                },
            ]}
            className="parallax-section"
        />
    );
};

export default ParallaxSection;