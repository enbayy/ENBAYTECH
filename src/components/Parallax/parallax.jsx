import { ParallaxBanner } from "react-scroll-parallax";
import "./ParallaxSection.css";
import logo from "../../assets/enbayLogo.png";
import { useNavigate } from "react-router-dom";
import foto from "../../assets/foto1.jpg"

const ParallaxSection = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/iletisim");
    };

    return (
        <ParallaxBanner
            layers={[
                {
                    image: foto,
                    speed: -20,
                },
                {
                    speed: 0,
                    children: (
                        <div className="parallax-content">
                            <div className="content-wrapper">
                                <div className="image-container">
                                    <img src={logo} alt="Dijital Güç" className="masked-image" />
                                </div>
                                <div className="text-content">
                                    <h1 className="font-inter">
                                        <span className="text-[#2dffbd] font-inter">ENBAYTECH</span> ile Geleceğinizi Şekillendirin
                                    </h1>
                                    <p className="font-poppins">
                                        ENBAYTECH'in yenilikçi çözümleri, kullanıcı odaklı tasarımlar ve sürdürülebilir dijital projeleriyle işletmenizi büyütün.
                                    </p>
                                    <button onClick={handleClick} className="cta-button font-inter">
                                        Bize Ulaşın
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            ]}
            className="parallax-section"
        />
    );
};

export default ParallaxSection;