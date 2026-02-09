import { useState } from "react";
import FoilScreen from "./components/FoilScreen";
import ChocolateBar from "./components/ChocolateBar";

export default function App() {
  const [showChocolatePage, setShowChocolatePage] = useState(false);

  return (
    <>
      {!showChocolatePage && (
        <FoilScreen onUnwrap={() => setShowChocolatePage(true)} />
      )}
      {showChocolatePage && (
        <ChocolateBar onReset={() => setShowChocolatePage(false)} />

      )}
    </>
  );
}
