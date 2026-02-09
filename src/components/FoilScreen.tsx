import { motion } from "framer-motion";

export default function FoilScreen({ onUnwrap }: { onUnwrap: () => void }) {
  return (
    <div className="foil-bg" onClick={onUnwrap}>
      <motion.div
        className="foil-text"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <h1>✨ Premium Love ✨</h1>
        <p>Tap to unwrap 💝</p>
      </motion.div>
    </div>
  );
}
