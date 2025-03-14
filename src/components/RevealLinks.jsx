import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            className="relative block overflow-hidden whitespace-nowrap text-5xl font-bold sm:text-6xl md:text-6xl lg:text-7xl tracking-tight leading-tight font-sans text-black dark:text-white"
            style={{
                lineHeight: 1.3,
            }}
        >
            <div>
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: "-100%" },
                        }}
                        className="inline-block"
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute left-0 top-0">
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: { y: "100%" },
                            hovered: { y: 0 },
                        }}
                        className="inline-block"
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.a>
    );
};

const FlipLink2 = ({ children, href }) => {
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            className="relative block overflow-hidden whitespace-nowrap text-5xl font-bold sm:text-6xl md:text-6xl lg:text-6xl tracking-tight leading-tight font-sans text-[#E76F51]"
            style={{
                lineHeight: 1.3,
            }}
        >
            <div>
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: "-100%" },
                        }}
                        className="inline-block"
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute left-0 top-0">
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: { y: "100%" },
                            hovered: { y: 0 },
                        }}
                        className="inline-block"
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.a>
    );
};

const RevealLinks = () => {
    const handleClick = () => {
        navigate("/hizmetlerimiz");
    };
    return (
        <div className="flex flex-col bg-transparent text-black">
            <div className="flex gap-4">
                <FlipLink>DİJİTAL</FlipLink>
                <FlipLink>ÇAĞDA</FlipLink>
            </div>

            <div className="flex gap-4">
                <FlipLink>GÜVENİLİR</FlipLink>
                <FlipLink>İŞ</FlipLink>
            </div>

            <div className="flex">
                <FlipLink>ORTAĞINIZ</FlipLink>
            </div>

            <div className="flex gap-4">
                <FlipLink2>ENGİN</FlipLink2>
                <FlipLink2>TASARIM</FlipLink2>
            </div>
            <p data-aos-delay="300" className="text-xl text-gray-700 dark:text-gray-400 font-poppins mt-3 text-start">
                Kurumsal yazılım çözümleri, B2B e-ticaret sistemleri ve özel web projeleriyle
                markanızı dijital dünyada güçlendiriyoruz.
            </p>
        </div>
    );
};

export default RevealLinks;