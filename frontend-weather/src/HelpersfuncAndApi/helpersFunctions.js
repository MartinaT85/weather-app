export const API_URL = `https://www.metaweather.com/api/location/44418/`;

export const temperatureConverter = (temperature, isCelsius) => {
  let returnTemp = temperature;
  if (!isCelsius) {
    returnTemp = (temperature * 9) / 5 + 32;
  }
  return Math.round(returnTemp);
};

export const formatDate = (date) => {
  date.toLocaleDateString(undefined, { day: "numeric", month: "long" });
};
