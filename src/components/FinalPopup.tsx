import { motion } from "framer-motion";

export default function FinalPopup({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="popup-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <motion.div
        className="popup-box"
        initial={{ scale: 0.6, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "16px",
          maxWidth: "300px",
          textAlign: "center",
          overflow: "visible",
        }}
      >
        <h2>💝 100% Pure Love 💝</h2>

        {/* Direct GIF */}
        <img
          src="https://media.tenor.com/7MX8dRJmnAAAAAAj/milk-and-mocha.gif"
          alt="Milk and Mocha"
          style={{
            width: "200px",
            height: "auto",
            display: "block",
            margin: "10px auto",
          }}
        />

        <p>
          All chocolates are gone…<br />
          Guess what’s left?<br />
          <strong>You & Me 😘</strong>
        </p>

        <button
          onClick={onClose}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            borderRadius: "12px",
            border: "none",
            background: "#ff4d88",
            color: "white",
            cursor: "pointer",
          }}
        >
          Appuu, Chocolate Chaiyo?😅
        </button>
      </motion.div>
    </motion.div>
  );
}
