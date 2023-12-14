export const calculateCurrentTimeWithTimeZone = (timezone: number) => {
  const nowInLocalTime = new Date().toUTCString() + 1000 * timezone;
  const localTime = new Date(nowInLocalTime).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return localTime
    .replace(/[,.]/g, "")
    .replace("a.m", "AM")
    .replace("p.m", "PM");
};
