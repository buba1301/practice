export const convertDuration = (duretions) => {
  const hours = Math.floor(duretions / 60);
  const minutes = duretions - hours * 60;
  return `${hours}ч ${minutes}м`;
};

const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const addNull = (value) => {
  if (!list.includes(value)) {
    return value;
  }
  return `0${value}`;
};

export const convertFligthTime = (startTime, duration) => {
  const beginFlightTime = new Date(startTime);
  const beginFlightHours = beginFlightTime.getHours();
  const beginFlightMinutes = beginFlightTime.getMinutes();

  const endFlightTime = new Date(beginFlightTime.getTime() + duration * 60000);
  const endFlightHours = endFlightTime.getHours();
  const endFlightMinutes = endFlightTime.getMinutes();

  return `${addNull(beginFlightHours)}:${addNull(beginFlightMinutes)} - ${addNull(endFlightHours)}:${addNull(endFlightMinutes)}`;
};
