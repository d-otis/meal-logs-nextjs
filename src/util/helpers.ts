import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatCurrentDate = () => {
  return dayjs().tz("America/Chicago").format("YYYY-MM-DD");
};

export const capitalize = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const mealsInitialState = {
  breakfast: "",
  lunch: "",
  dinner: "",
};
