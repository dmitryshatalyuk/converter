import arrow from "../../images/arrows.svg";
import { useState } from "react";

export function ConversionHistory({ conversionHistory }) {
  const [conversionH, clearHistory] = useState([]);

  function handleClear() {
    clearHistory([]);
  }

  return (
    <div className="converter-box ch-box">
      <div className="ch-head">
        <h3 className="section-title">Історія конвертації</h3>
        <button className="btn default-btn" onClick={handleClear}>
          Очистити історію
        </button>
      </div>
      <div className="ch-body">
        <ul className="ch-list">
          {conversionHistory.map((item, index) => {
            return (
              <li key={index} className="ch-item">
                <p className="ch-item__date ch-text">{item.date}</p>
                <p className="ch-item__from ch-text">
                  {item.from} {item.fromCurrency}
                </p>
                <img src={arrow} alt="to" />
                <p className="ch-item__to ch-text">
                  {item.to} {item.toCurrency}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
