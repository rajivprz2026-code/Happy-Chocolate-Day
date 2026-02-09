import { motion } from "framer-motion";

type Props = {
  visible: boolean;
  onClick: () => void;
};

export default function ChocolatePiece({ visible, onClick }: Props) {
  if (!visible) return <div className="choco-placeholder" />;

  return (
    <motion.div
      className="choco-piece"
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      <span className="heart">♥</span>
      <span className="shine" />
    </motion.div>
  );
}
