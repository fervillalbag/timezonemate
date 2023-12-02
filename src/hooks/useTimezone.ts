import { useEffect, useState } from "react";
import jstz from "jstz";
import dayjs, { Dayjs } from "dayjs";

import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

export interface TimeZoneHookResult {
  userTimeZone: string;
  isLoading: boolean;
  formatWithUserTimeZone: (
    nativeFormat: boolean,
    date: string | Date,
    formatString: string
  ) => Dayjs | null | string;
}

const useTimeZone = (): TimeZoneHookResult => {
  const [userTimeZone, setUserTimeZone] = useState<string>("");

  useEffect(() => {
    const detectUserTimeZone = async () => {
      try {
        const detectedTimeZone = jstz.determine();
        setUserTimeZone(detectedTimeZone.name());
      } catch (error) {
        console.log(error, "TIMEZONE_CONTEXT");
      }
    };

    detectUserTimeZone();
  }, []);

  const formatWithUserTimeZone = (
    nativeFormat: boolean,
    date: string | Date,
    formatString: string
  ): Dayjs | null | string => {
    if (!userTimeZone) return null;

    if (nativeFormat) {
      return dayjs(date, { locale: "es" }).tz(userTimeZone);
    }

    return dayjs(date)
      .tz(userTimeZone)
      .format(formatString)
      .toString();
  };

  return {
    isLoading: !userTimeZone,
    userTimeZone,
    formatWithUserTimeZone,
  };
};

export default useTimeZone;
