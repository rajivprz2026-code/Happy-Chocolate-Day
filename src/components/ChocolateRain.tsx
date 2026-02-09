import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NUM_CHOCOLATES = 30;

type Chocolate = {
  id: number;
  left: number; // horizontal position in vw
  duration: number; // seconds
  size: number; // font size in px
  delay: number; // start delay
};

export default function ChocolateRain() {
  const [chocolates, setChocolates] = useState<Chocolate[]>([]);

  useEffect(() => {
    const initial = Array.from({ length: NUM_CHOCOLATES }, (_, i) => ({
      id: i,
      left: Math.random() * 90 + 5, // 5vw → 95vw
      duration: Math.random() * 5 + 5, // 5s → 10s
      size: Math.random() * 18 + 14, // 14px → 32px
      delay: Math.random() * 5,
    }));
    setChocolates(initial);
  }, []);

  return (
    <div className="choco-rain">
      {chocolates.map((choco) => (
        <motion.div
          key={choco.id}
          className="choco-emoji"
          style={{
            left: `${choco.left}vw`,
            fontSize: choco.size,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: '-120vh', opacity: [0, 1, 0] }} // ← move all the way up
          transition={{
            duration: choco.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: choco.delay,
          }}
        >
          🍫
        </motion.div>
      ))}
    </div>
  );
}
