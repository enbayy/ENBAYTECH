import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TrueFocus = ({
    sentence = "ENBAYTECH",
    manualMode = false,
    blurAmount = 5,
    borderColor = "green",
    glowColor = "rgba(0, 255, 0, 0.6)",
    animationDuration = 0.5,
    pauseBetweenAnimations = 1,
}) => {
    const letters = sentence.split("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [blurred, setBlurred] = useState(Array(letters.length).fill(true));
    const containerRef = useRef(null);
    const letterRefs = useRef([]);
    const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

    useEffect(() => {
        if (!manualMode) {
            setBlurred((prev) => {
                const updated = [...prev];
                updated[0] = false;
                return updated;
            });

            letters.forEach((_, i) => {
                setTimeout(() => {
                    setCurrentIndex(i);
                    setBlurred((prev) => {
                        const updated = [...prev];
                        updated[i] = false;
                        return updated;
                    });
                }, i * (animationDuration + pauseBetweenAnimations) * 1000);
            });
            setTimeout(() => {
                setCurrentIndex(-1);
                setFocusRect({ x: 0, y: 0, width: 0, height: 0 });
            }, letters.length * (animationDuration + pauseBetweenAnimations) * 1000);
        }
    }, [manualMode, animationDuration, pauseBetweenAnimations, letters.length]);


    useEffect(() => {
        if (!letterRefs.current[currentIndex] || !containerRef.current) return;

        const parentRect = containerRef.current.getBoundingClientRect();
        const activeRect = letterRefs.current[currentIndex].getBoundingClientRect();

        setFocusRect({
            x: activeRect.left - parentRect.left,
            y: activeRect.top - parentRect.top,
            width: activeRect.width,
            height: activeRect.height,
        });
    }, [currentIndex]);

    return (
        <div className="relative flex gap-2 justify-center items-center flex-wrap" ref={containerRef}>
            {letters.map((letter, index) => {
                const isActive = index === currentIndex;
                const isBlurred = blurred[index];

                return (
                    <span
                        key={index}
                        ref={(el) => (letterRefs.current[index] = el)}
                        className="relative text-[1.5rem] font-black cursor-default"
                        style={{
                            filter: isBlurred ? `blur(${blurAmount}px)` : "blur(0px)",
                            transition: `filter ${animationDuration}s ease`,
                        }}
                    >
                        {letter}
                    </span>
                );
            })}

            {currentIndex >= 0 && (
                <motion.div
                    className="absolute top-0 left-0 pointer-events-none box-border border-0"
                    animate={{
                        x: focusRect.x,
                        y: focusRect.y,
                        width: focusRect.width,
                        height: focusRect.height,
                        opacity: 1,
                    }}
                    transition={{
                        duration: animationDuration,
                    }}
                    style={{
                        "--border-color": borderColor,
                        "--glow-color": glowColor,
                    }}
                >
                    <span
                        className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] left-[-10px] border-r-0 border-b-0"
                        style={{
                            borderColor: "var(--border-color)",
                            filter: "drop-shadow(0 0 4px var(--border-color))",
                        }}
                    />
                    <span
                        className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] right-[-10px] border-l-0 border-b-0"
                        style={{
                            borderColor: "var(--border-color)",
                            filter: "drop-shadow(0 0 4px var(--border-color))",
                        }}
                    />
                    <span
                        className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] left-[-10px] border-r-0 border-t-0"
                        style={{
                            borderColor: "var(--border-color)",
                            filter: "drop-shadow(0 0 4px var(--border-color))",
                        }}
                    />
                    <span
                        className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] right-[-10px] border-l-0 border-t-0"
                        style={{
                            borderColor: "var(--border-color)",
                            filter: "drop-shadow(0 0 4px var(--border-color))",
                        }}
                    />
                </motion.div>
            )}
        </div>
    );
};

export default TrueFocus;