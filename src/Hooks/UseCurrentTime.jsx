import { useEffect, useState } from "react";



const UseCurrentTime = () => {
 function currentTime() {
  return Math.round(Date.now() / 1000);
}


 const [currTime, setCurrTime] = useState(currentTime())
   useEffect(() => {
    const timer = setInterval(() => {
      setCurrTime((current) => current + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [setCurrTime]);

  return [currTime]
}

export default UseCurrentTime