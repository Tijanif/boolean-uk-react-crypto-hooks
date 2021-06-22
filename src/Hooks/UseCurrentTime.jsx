import { useEffect, useState } from "react";



const UseCurrentTime = () => {
 function currentTime() {
  return Math.round(Date.now() / 1000);
}

function convertToSeconds(dateValue) {
  // This guard is needed due to the API discrepancies in handling dates
  return typeof dateValue === "string"
    ? Math.round(Date.parse(dateValue) / 1000)
    : dateValue;
}
 const [currTime, setCurrTime] = useState(currentTime())
   useEffect(() => {
    const timer = setInterval(() => {
      setCurrTime((current) => current + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [setCurrTime]);

  return [currTime, setCurrTime, convertToSeconds]
}

export default UseCurrentTime