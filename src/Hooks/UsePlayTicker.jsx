import { useEffect, useState } from "react";

const UsePlayTicker = (setCounter) => {
const [playTicker, setPlayTicker] = useState(false);

  useEffect(() => {
    const interval =
      playTicker &&
      setInterval(() => {
        setCounter((count) => count - 1);
      }, 1000);

    return () => clearInterval(interval);
  }, [setCounter, playTicker]);

  return [playTicker, setPlayTicker] 

}

export default UsePlayTicker