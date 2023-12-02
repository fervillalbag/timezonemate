import useTimeZone from "./hooks/useTimezone";

export default function App() {
  const { isLoading, formatWithUserTimeZone } = useTimeZone();

  const currentDay = formatWithUserTimeZone(
    false,
    new Date(),
    "YYYY-MM-DD"
  )?.toString();

  return (
    <div className="p-5">
      <h1 className="text-lg font-semibold">Timezonemate!</h1>
      <span>{isLoading ? "Loading.." : currentDay}</span>
    </div>
  );
}
