import { useState } from "react";
import ChocolatePiece from "./ChocolatePiece";
import FinalPopup from "./FinalPopup";
import RedeemPopup from "./RedeemPopup";
import ChocolateRain from "./ChocolateRain";
import { messages } from "../data/messages";

interface ChocolateBarProps {
  onReset: () => void; // <- prop to go back to first page
}

export default function ChocolateBar({ onReset }: ChocolateBarProps) {
  const [visible, setVisible] = useState<boolean[]>(Array(12).fill(true));
  const [text, setText] = useState<string | null>(null);
  const [showRedeemPopup, setShowRedeemPopup] = useState(false);

  const allGone = visible.every(v => !v);

  const handleClick = (index: number) => {
    if (!visible[index]) return;

    const copy = [...visible];
    copy[index] = false; // only the clicked piece disappears
    setVisible(copy);
    setText(messages[index]);
  };

  return (
    <div className="choco-container">
      <ChocolateRain />

      <div className="chocolate-bar">
        {visible.map((v, i) => (
          <ChocolatePiece
            key={i}
            visible={v}
            onClick={() => handleClick(i)}
          />
        ))}
      </div>

      {text && !allGone && <div className="choco-message">{text}</div>}

      {allGone && !showRedeemPopup && (
        <FinalPopup onClose={() => setShowRedeemPopup(true)} />
      )}

      {showRedeemPopup && (
        <RedeemPopup onClose={onReset} /> 
      )}
    </div>
  );
}
