
import UseCounter from "../Hooks/UseCounter";
import UseCurrentTime from "../Hooks/UseCurrentTime";
import UsePlayTicker from "../Hooks/UsePlayTicker";

function convertToSeconds(dateValue) {
  // This guard is needed due to the API discrepancies in handling dates
  return typeof dateValue === "string"
    ? Math.round(Date.parse(dateValue) / 1000)
    : dateValue;
}

export default function MainDetail({
  selectedCrypto: { id, name, current_price, last_updated, symbol },
  updateCryptoData
}) {
  
 const [counter, setCounter] = UseCounter()
 const [playTicker, setPlayTicker] =  UsePlayTicker(setCounter)
 const  [currTime, convertToSeconds] = UseCurrentTime()
 



  return (
    <>
      <section className="main-detail__central">
        <div className="main-detail__update">
          <p>
            {playTicker &&
              `next update ${counter ? `in ${counter}` : "about to happen"}`}
          </p>
          <button
            className="main-detail__button"
            onClick={() => setPlayTicker((val) => !val)}
          >
            {playTicker ? "Pause" : "Start"} update
          </button>
        </div>
        <div className="main-detail__name">
          <h2>{name}</h2>
          <p>
            <span className="small">a.k.a </span>
            {symbol}
          </p>
        </div>
        <div className="main-detail__price">
          <p>£{current_price}</p>
          <p>Updated {currTime - convertToSeconds(last_updated)} seconds ago</p>
        </div>
      </section>
    </>
  );
}
