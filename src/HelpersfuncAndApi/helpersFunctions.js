export const API_URL = `https://www.metaweather.com/api/location/44418/2013/4/27/`;

export const temperatureConverter = (temperature, isCelsius) => {
  let returnTemp = temperature;
  if (!isCelsius) {
    returnTemp = (temperature - 32) * (5 / 9);
  }
  return Math.round(returnTemp);
};

export const formatDate = (date) => {
  date.toLocaleDateString(undefined, { day: "numeric", month: "long" });
};
