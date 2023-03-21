import { useState } from "react";
import Counter from "./Counter";
import Matrix from "./Matrix";

function Container() {
  const [size, setSize] = useState(4);

  const handleIncreaseSize = (_e) => setSize((prevSize) => ++prevSize);
  const handleDecreaseSize = (_e) =>
    setSize((prevSize) => {
      return prevSize >= 1 ? --prevSize : 0;
    });

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Counter
        size={size}
        addOne={handleIncreaseSize}
        subtractOne={handleDecreaseSize}
      />
      <Matrix size={size} />
    </div>
  );
}

export default Container;
