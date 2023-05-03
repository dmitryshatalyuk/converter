import { useState } from "react";

import "./converter.css";

import { ConversionHistory } from "./ConversionHistory";

export function ConvertBlock() {
  const apiKey = "PEdrSyMDZLhvymuviFm92KA9GKQCgP19";

  const [conversionHistory, setConversionHistory] = useState([]);

  function handleChange(evt) {
    console.log(evt.target.id, evt.target.value);
    const fromValue = document.getElementById("from");
    const fromCurrency = document.getElementById("fromCurrency");
    const toValue = document.getElementById("to");
    const toCurrency = document.getElementById("toCurrency");
    const date = document.getElementById("date");

    var myHeaders = new Headers();
    myHeaders.append("apikey", "PEdrSyMDZLhvymuviFm92KA9GKQCgP19");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    if (fromValue.value.length > 0 && date) {
      fetch(
        `https://api.apilayer.com/exchangerates_data/${date.value}?symbols=${toCurrency.value}&base=${fromCurrency.value}`,
        requestOptions
      )
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          toValue.value = (
            fromValue.value * result.rates[`${toCurrency.value}`]
          ).toFixed(2);
        })
        .catch((error) => console.log("error", error));
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    const formData = Object.fromEntries(new FormData(evt.target).entries());

    let historyItem = {
      date: `${formData.time.split("-")[2]}.${formData.time.split("-")[1]}.${
        formData.time.split("-")[0]
      }`,
      from: formData.from,
      fromCurrency: formData.fromCurrency,
      to: formData.to,
      toCurrency: formData.toCurrency,
    };

    setConversionHistory([historyItem, ...conversionHistory]);
  }

  return (
    <>
      <section className="converter">
        <div className="converter-wrapper section-wrapper">
          {/* <ConverterBox /> */}
          <div className="converter-box">
            <h2 className="converter-box__title section-title">
              Конвертер валют
            </h2>
            <form
              className="converter-form"
              onChange={handleChange}
              onSubmit={handleSubmit}
            >
              <div>
                <p className="converter-form__text">В мене є:</p>

                <fieldset className="converter-form__field">
                  <input
                    className="input"
                    type="number"
                    name="from"
                    id="from"
                  />
                  <select
                    className="input select"
                    name="fromCurrency"
                    id="fromCurrency"
                  >
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                    <option value="PLN">PLN</option>
                  </select>
                  <input
                    className="input date-input"
                    type="date"
                    id="date"
                    name="time"
                  />
                </fieldset>
              </div>
              <button className="change-btn">
                {/* <img src={arrow} /> */}
              </button>
              <div>
                <p className="converter-form__text">Хочу придбати:</p>
                <fieldset className="converter-form__field">
                  <input
                    className="input"
                    type="number"
                    name="to"
                    id="to"
                    readOnly
                  />
                  <select className="input" name="toCurrency" id="toCurrency">
                    <option value="UAH">UAH</option>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                    <option value="PLN">PLN</option>
                  </select>
                  <button type="submit" className="btn default-btn">
                    Зберегти результат
                  </button>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="converter conversion-history">
        <div className="conversion-history-wrapper section-wrapper">
          {/* <ConversionHistory /> */}
          <ConversionHistory conversionHistory={conversionHistory} />
        </div>
      </section>
    </>
  );
}
