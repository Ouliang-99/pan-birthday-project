"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isDrawingComplete, setIsDrawingComplete] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("bg-black");
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isVectorAnimationComplete, setIsVectorAnimationComplete] =
    useState(false);
  const [fireworkPositions, setFireworkPositions] = useState([]);

  useEffect(() => {
    setFireworkPositions(
      Array.from({ length: 20 }, () => ({
        left: `${Math.random() * 100}vw`,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsDrawingComplete(true);
      setIsTextVisible(true);
      setBackgroundColor("bg-gradient-to-b from-pink-300 to-blue-500");
    }, 5000);

    setTimeout(() => {
      setIsVectorAnimationComplete(true);
    }, 8000);
  }, []);

  return (
    <div
      className={`${backgroundColor} min-h-screen text-white p-4 relative overflow-hidden`}
    >
      <div className="flex flex-col items-center justify-center space-y-4 relative">
        {isTextVisible && (
          <motion.h2
            className="text-xl font-bold mt-10 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: isDrawingComplete ? 1 : 0 }}
            transition={{ duration: 2 }}
          >
            🎉 สุขสันต์วันเกิดต้าวแพนน้อย 🎉
          </motion.h2>
        )}
      </div>

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 1 }}
        animate={{ opacity: isDrawingComplete ? 0 : 1 }}
        transition={{ duration: 5 }}
      >
        <motion.path
          d="M 50 30 Q 65 10, 80 30 Q 90 50, 50 70 Q 10 50, 20 30 Q 35 10, 50 30 Z"
          fill="transparent"
          stroke="white"
          strokeWidth="2"
          initial={{ strokeDasharray: 0, strokeDashoffset: 100 }}
          animate={{ strokeDasharray: 100, strokeDashoffset: 0 }}
          transition={{ duration: 5, ease: "easeInOut" }}
        />
      </motion.svg>

      {isDrawingComplete && (
        <>
          {["🎆", "❤️", "✨"].map((emoji, i) => (
            <motion.div
              key={`effect-${i}`}
              className="absolute text-yellow-400 text-4xl"
              initial={{
                opacity: 0,
                scale: 0.5,
                x: `${Math.random() * 100}vw`,
                y: `${Math.random() * 100}vh`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
                x: `${Math.random() * 100}vw`,
                y: `${Math.random() * 100}vh`,
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            >
              {emoji}
            </motion.div>
          ))}
          <motion.div
            className="transform -translate-x-1/2 -translate-y-1/2 text-lg text-center mt-[75vh]"
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            เลื่อนลงๆๆๆ ❤️
          </motion.div>
          <div
            id="messageSection"
            className="flex flex-col items-center space-y-4 mt-[40vh]"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={
                isDrawingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 1 }}
              className="text-xl max-w-[220px] font-semibold text-center"
            >
              ขอให้ปีนี้รำรวยเงินทอง มีความสุขมากๆนะ อยู่กับเค้าไปนานๆนะ
              <div className="flex justify-center items-center mt-8">
                <motion.div
                  className="relative"
                  initial={{ scale: 0.9, rotate: 0 }}
                  animate={{
                    scale: [0.9, 1.1, 0.9],
                    rotate: [0, 3, -3, 0],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  <Image
                    src="/pan.jpg"
                    alt="Pan"
                    width={200}
                    height={100}
                    className="rounded-lg shadow-lg"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-lg border-4 border-pink-400 opacity-50"
                    initial={{ scale: 1, opacity: 0.7 }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 0.3, 0.7],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  ></motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
      <div className="mt-[20vh] "></div>
      {isVectorAnimationComplete && (
        <motion.div
          className="absolute bottom-10 text-lg text-center text-white left-1/2 transform -translate-x-1/2 w-[250px] "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          ปีนี้เค้าไม่มีของขวัญให้นอกจากเว็บนี้กับเค้ก
          ปีหน้าเค้าจะหาที่ดีกว่านี้ให้นะ รักจุ๊บ ❤️
        </motion.div>
      )}

      {isVectorAnimationComplete &&
        fireworkPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0"
            style={{
              left: pos.left,
            }}
            initial={{
              y: 0,
              scale: 0.5,
              opacity: 0.5,
            }}
            animate={{
              y: [-10, -200, -400],
              scale: [0.5, 1.2, 0],
              opacity: [0.8, 0.8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: pos.delay,
            }}
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          </motion.div>
        ))}
    </div>
  );
}
