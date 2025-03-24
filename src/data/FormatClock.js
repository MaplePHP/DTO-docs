export const FormatClock = [
  {
    title: "setLocale",
    content: "The `setLocale` method sets the locale used for translating month and weekday names. It falls back to PHP’s IntlDateFormatter if static translations are not available.",
    args: "Takes a required `$localeCode` string (e.g., `'sv_SE'`, `'en_US'`) to define the language/region for date formatting.",
    code: `
$event = Traverse::value(["starts_at" => "2025-03-20"]);

echo $event->starts_at->clockSetLocale("sv_SE")->clockFormat("l, j F");  

// Result: torsdag, 20 mars
`
  },
  {
    title: "setDefaultLocale",
    content: "The `setDefaultLocale` method sets a global default locale used for translating month and weekday names if no local locale is specified.",
    args: "Takes a required `$localeCode` string (e.g., `'sv_SE'`, `'en_US'`) to set as the default language/region.",
    code: `
Clock::setDefaultLocale("sv_SE");

$event = Traverse::value(["starts_at" => "2025-03-20"]);

echo $event->starts_at->clockFormat("l, j F");  

// Result: torsdag, 20 mars
`
  },
  {
    title: "setTimezone",
    content: "The `setTimezone` method sets the timezone of the DateTime object.",
    args: "Takes a `$timezone` as either a `DateTimeZone` instance or a string (e.g., `'Europe/Stockholm'`).",
    code: `
$event = Traverse::value(["starts_at" => "2025-03-20 14:30:00"]);

echo $event->starts_at->clockSetTimezone("UTC")->clockFormat("Y-m-d H:i");  

// Result: 2025-03-20 13:30
`
  },
  {
    title: "setDefaultTimezone",
    content: "The `setDefaultTimezone` method sets the default timezone that will be used when no specific timezone is set on the DateTime object.",
    args: "Takes a `$timezone` as either a string (e.g., `'UTC'`, `'Europe/Stockholm'`) or a `DateTimeZone` instance.",
    code: `
Clock::setDefaultTimezone("Europe/Stockholm");

$event = Traverse::value(["starts_at" => "2025-03-20 14:30:00"]);

echo $event->starts_at->clockFormat("Y-m-d H:i");  

// Result: 2025-03-20 14:30
`
  },
  {
    title: "format",
    content: "The `format` method returns the date formatted as a string based on the given format. It also supports locale-based translation of month and weekday names if available.",
    args: "Takes an optional `$format` string using PHP's date format syntax (default: `'Y-m-d H:i:s'`), and an optional `$locale` for localized output.",
    code: `
$event = Traverse::value(["starts_at" => "2025-05-01 14:30"]);

echo $event->starts_at->clockFormat("Y-m-d H:i");  

// Result: 2025-05-01 14:30
`
  },
  {
    title: "iso",
    content: "The `iso` method returns the date and time in ISO 8601 format (e.g., `2025-03-20T14:30:00+01:00`).",
    args: "",
    code: `
$event = Traverse::value(["starts_at" => "2025-03-20 14:30:00"]);

echo $event->starts_at->clockIso();  

// Result: 2025-03-20T14:30:00+01:00
`
  },
  {
    title: "rfc",
    content: "The `rfc` method returns the date and time formatted according to RFC 2822 (e.g., `Thu, 20 Mar 2025 14:30:00 +0100`).",
    args: "",
    code: `
$event = Traverse::value(["starts_at" => "2025-03-20 14:30:00"]);

echo $event->starts_at->clockRfc();  

// Result: Thu, 20 Mar 2025 14:30:00 +0100
`
  },
  {
    title: "dateTime",
    content: "The `dateTime` method returns the full date and time in `Y-m-d H:i:s` format.",
    args: "",
    code: `
$event = Traverse::value(["starts_at" => "2025-03-20 14:30:00"]);

echo $event->starts_at->clockDateTime();  

// Result: 2025-03-20 14:30:00
`
  },
  {
    title: "date",
    content: "The `date` method returns only the date portion of the DateTime object in `Y-m-d` format.",
    args: "",
    code: `
$event = Traverse::value(["starts_at" => "2025-05-01 14:30"]);

echo $event->starts_at->clockDate();  

// Result: 2025-05-01
`
  },
  {
    title: "timestamp",
    content: "The `timestamp` method returns the Unix timestamp representation of the date and time.",
    args: "",
    code: `
$event = Traverse::value(["starts_at" => "2025-03-20 14:30:00"]);

echo $event->starts_at->clockTimestamp();  

// Result: 1742471400
`
  },
  {
    title: "year",
    content: "The `year` method returns the year of the date. You can choose between full (e.g., `2025`) or shorthand (e.g., `25`) format.",
    args: "Takes an optional `$shorthand` boolean to return the year in two-digit format if `true` (default: `false`).",
    code: `
$event = Traverse::value(["starts_at" => "2025-03-20"]);

echo $event->starts_at->clockYear();  

// Result: 2025
`
  },
  {
    title: "month",
    content: "The `month` method returns the numeric month of the date, with leading zero (e.g., `03` for March).",
    args: "",
    code: `
$event = Traverse::value(["starts_at" => "2025-03-20"]);

echo $event->starts_at->clockMonth();  

// Result: 03
`
  },
  {
    title: "monthName",
    content: "The `monthName` method returns the full name of the month (e.g., `January`).",
    args: "",
    code: `
$event = Traverse::value(["starts_at" => "2025-01-15"]);

echo $event->starts_at->clockMonthName();  

// Result: January
`
  },
  {
    title: "shortMonthName",
    content: "The `shortMonthName` method returns the abbreviated name of the month (e.g., `Jan`).",
    args: "",
    code: `
$event = Traverse::value(["starts_at" => "2025-01-15"]);

echo $event->starts_at->clockShortMonthName();  

// Result: Jan
`
  },
  {
    title: "day",
    content: "The `day` method returns the day of the month with leading zero (e.g., `05`).",
    args: "",
    code: `
$event = Traverse::value(["starts_at" => "2025-03-05"]);

echo $event->starts_at->clockDay();  

// Result: 05
`
  },
  {
    title: "dayOfWeek",
    content: "The `dayOfWeek` method returns the day of the week as a number (1 for Monday through 7 for Sunday).",
    args: "",
    code: `
$event = Traverse::value(["starts_at" => "2025-03-20"]);

echo $event->starts_at->clockDayOfWeek();  

// Result: 4
`
  },
  {
    title: "time",
    content: "The `time` method returns the time portion of the DateTime object in `H:i` format (24-hour clock).",
    args: "",
    code: `
$event = Traverse::value(["starts_at" => "2025-05-01 14:30"]);

echo $event->starts_at->clockTime();  

// Result: 14:30
`
  },
  {
    title: "time12Hour",
    content: "The `time12Hour` method returns the time in 12-hour format with an AM/PM suffix (e.g., `02:30 PM`).",
    args: "",
    code: `
$event = Traverse::value(["starts_at" => "2025-03-20 14:30:00"]);

echo $event->starts_at->clockTime12Hour();  

// Result: 02:30 PM
`
  },
  {
    title: "seconds",
    content: "The `seconds` method returns the seconds portion of the time, including leading zeros (e.g., `05`).",
    args: "",
    code: `
$event = Traverse::value(["starts_at" => "2025-05-01 14:30:05"]);

echo $event->starts_at->clockSeconds();  

// Result: 05
`
  },
  {
    title: "weekday",
    content: "The `weekday` method returns the full name of the weekday (e.g., `Monday`).",
    args: "",
    code: `
$event = Traverse::value(["starts_at" => "2025-03-17"]);

echo $event->starts_at->clockWeekday();  

// Result: Monday
`
  },
  {
    title: "shortWeekday",
    content: "The `shortWeekday` method returns the abbreviated name of the weekday (e.g., `Mon`).",
    args: "",
    code: `
$event = Traverse::value(["starts_at" => "2025-03-17"]);

echo $event->starts_at->clockShortWeekday();  

// Result: Mon
`
  },
  {
    title: "weekNumber",
    content: "The `weekNumber` method returns the ISO 8601 week number of the year.",
    args: "",
    code: `
$event = Traverse::value(["starts_at" => "2025-01-01"]);

echo $event->starts_at->clockWeekNumber();  

// Result: 1
`
  },
  {
    title: "isLeapYear",
    content: "The `isLeapYear` method checks if the year is a leap year and returns a boolean value.",
    args: "",
    code: `
$event = Traverse::value(["starts_at" => "2024-03-01"]);

echo $event->starts_at->clockIsLeapYear();  

// Result: true
`
  },
  {
    title: "diffInDays",
    content: "The `diffInDays` method returns the number of days between the given date and today. The result is negative for past dates and positive for future dates.",
    args: "",
    code: `
$event = Traverse::value(["starts_at" => "2025-04-01"]);

echo $event->starts_at->clockDiffInDays();  

// Result: 10
`
  },
  {
    title: "isToday",
    content: "The `isToday` method checks if the given date is today and returns a boolean value.",
    args: "",
    code: `
$event = Traverse::value(["starts_at" => date("Y-m-d H:i:s")]);

echo $event->starts_at->clockIsToday();  

// Result: true
`
  },
  /*
  {
      title: "wwww",
      content: "wwww",
      args: "wwwww",
      code: `
wwww
`
  }
  */
];
