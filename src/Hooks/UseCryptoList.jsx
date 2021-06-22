import { useState,useEffect } from "react"
import { CRIPTO_LIST } from "../constants"

const UseCryptoList = () => {
  const [cryptoList, setCryptoList] = useState([]);
   useEffect(() => {
    fetch(CRIPTO_LIST)
      .then((resp) => resp.json())
      .then(setCryptoList);
  }, [setCryptoList]);
  return [cryptoList, setCryptoList]
}

export default UseCryptoList