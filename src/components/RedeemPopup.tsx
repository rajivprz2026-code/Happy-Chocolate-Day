import { motion } from "framer-motion";

export default function RedeemPopup({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="popup-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="popup-box"
        initial={{ scale: 0.6, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <h2>💌 Sweet Promise 💌</h2>
        <p>
          You couldn’t meet him today…<br />
          Next time, he’ll bring you the chocolates you love 🍫💖
        </p>

        <button onClick={onClose}>Close</button>
      </motion.div>
    </motion.div>
  );
}
