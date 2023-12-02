# TimezoneMate

TimezoneMate is a React application that helps you manage time zones effortlessly. It detects the user's time zone and allows you to format dates accordingly using the Dayjs library.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Customization](#customization)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/tu-usuario/tu-proyecto.git
```

2. Navigate to the project directory:

```bash
cd tu-proyecto
```

3. Install dependencies:

```bash
npm install
```

## Usage

1. Import the `useTimeZone` hook in your component:

```jsx
import useTimeZone from "./hooks/useTimezone";
```

2. Use the `useTimeZone` hook in your component:

```jsx
function App() {
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

export default App;
```

3. Run the application:

```bash
npm run dev
```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Components

### TimeZoneProvider

The `TimeZoneProvider` component is a context provider that initializes the time zone information using the `useTimezone` hook.

```jsx
import { TimeZoneProvider } from "./hooks/TimeZoneContext";

function App() {
  return (
    <TimeZoneProvider>{/* Your components here */}</TimeZoneProvider>
  );
}
```

### useTimezone Hook

The `useTimezone` hook provides information about the user's time zone and a function to format dates.

```jsx
import useTimeZone from "./hooks/useTimezone";

function YourComponent() {
  const { isLoading, formatWithUserTimeZone } = useTimeZone();

  // Your component logic here
}
```

## Customization

The application uses Dayjs for date formatting. You can customize the date format in the `formatWithUserTimeZone` function.

```jsx
const currentDay = formatWithUserTimeZone(
  false,
  new Date(),
  "YYYY-MM-DD"
)?.toString();
```

Feel free to explore and customize the application based on your needs!
