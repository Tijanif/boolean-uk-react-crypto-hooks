import { useState } from "react";
import MainDetail from "./components/MainDetail";
import NewsFeed from "./components/NewsFeed";
import SideList from "./components/SideList";
import UseCryptoList from "./Hooks/UseCryptoList";

//////////////////////////////////////////////////
//                                              //
//  Don't forget to check all the code again!!  //
//                                              //
//////////////////////////////////////////////////

function App() {
  const [cryptoList, setCryptoList]=  UseCryptoList()
  const [selectedCrypto, setSelectedCripto] = useState(null);


  function selectCrypto(selectedId) {
    setSelectedCripto(selectedId);
  }

  function findCripto(criptoId) {
    return cryptoList.find(({ id }) => id === criptoId);
  }

  function updateCryptoData(data, id) {
    setCryptoList((cryptoList) =>
      cryptoList.map((crypto) =>
        crypto.id === id ? { ...crypto, ...data } : crypto
      )
    );
  }

  function isSelectedCrypto(id) {
    return selectedCrypto === id;
  }

  return (
    /* These (<> </>) are called React Fragments, and allow us to return more than one top element */
    <>
      <aside className="side-list">
        {/* No need to worry about SideList and it's children, you can safey ignore it! */}
        <SideList
          cryptoList={cryptoList}
          isSelectedCrypto={isSelectedCrypto}
          selectCrypto={selectCrypto}
        />
      </aside>
      <main className="main-detail">
        {selectedCrypto ? (
          // Let's have a look at MainDetail
          <MainDetail
            selectedCrypto={findCripto(selectedCrypto)}
            updateCryptoData={updateCryptoData}
          />
        ) : (
          "Select a coin bro!"
        )}
        <NewsFeed />
      </main>
    </>
  );
}

export default App;
