export const temperatureConverter = (temperature, isCelsius) => {
  let returnTemp = temperature;
  if (!isCelsius) {
    returnTemp = (temperature * 9) / 5 + 32;
  }
  return Math.round(returnTemp);
};

export const milesToKm = (dist, isKm) => {
  let returnDist = dist;
  if (isKm) {
    returnDist = dist * 1.609;
  }
  return Math.round(returnDist);
};
