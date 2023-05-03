const apiKey = "PEdrSyMDZLhvymuviFm92KA9GKQCgP19";

export function handleChange(evt) {
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

export const conversionHistory = [];

export function handleSubmit(evt) {
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

  conversionHistory.unshift(historyItem);
}
