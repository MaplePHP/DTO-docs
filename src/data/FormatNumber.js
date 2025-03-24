export const FormatNumber = [
  {
    title: "float",
    content: "The `float` method converts a numeric value to a float.",
    args: "",
    code: `
$price = Traverse::value(["amount" => "199.99"]);

echo $price->amount->numFloat();  

// Result: 199.99
`
  },
  {
    title: "int",
    content: "The `int` method converts a numeric value to an integer.",
    args: "",
    code: `
$order = Traverse::value(["quantity" => "42"]);

echo $order->quantity->numInt();  

// Result: 42
`
  },
  {
    title: "round",
    content: "The `round` method rounds a float to a specified precision.",
    args: "Takes an optional `$precision` to define the number of decimal places (default: `0`) and an optional `$mode` to control the rounding behavior (default: `PHP_ROUND_HALF_UP`).",
    code: `
$invoice = Traverse::value(["total" => 99.5678]);

echo $invoice->total->numRound(2);  

// Result: 99.57
`
  },
  {
    title: "floor",
    content: "The `floor` method rounds a float down to the nearest whole number.",
    args: "",
    code: `
$invoice = Traverse::value(["total" => 99.99]);

echo $invoice->total->numFloor();  

// Result: 99
`
  },
  {
    title: "ceil",
    content: "The `ceil` method rounds a float up to the nearest whole number.",
    args: "",
    code: `
$invoice = Traverse::value(["total" => 99.01]);

echo $invoice->total->numCeil();  

// Result: 100
`
  },
  {
    title: "abs",
    content: "The `abs` method returns the absolute value of a number, removing any negative sign.",
    args: "",
    code: `
$transaction = Traverse::value(["balance" => -150.75]);

echo $transaction->balance->numAbs();  

// Result: 150.75
`
  },
  {
    title: "numberFormat",
    content: "The `numberFormat` method formats a number with grouped thousands and custom decimal/thousand separators.",
    args: "Takes an optional `$decimals` for the number of decimal places (default: `0`), a `$decimalSeparator` (default: `.`), and a `$thousandsSeparator` (default: `,`).",
    code: `
$invoice = Traverse::value(["total" => 1234567.89]);

echo $invoice->total->numNumberFormat(2, ',', ' ');  

// Result: 1 234 567,89
`
  },
  {
    title: "leadingZero",
    content: "The `leadingZero` method pads a number with leading zeros to ensure it reaches a specified length.",
    args: "Takes a required `$length` to define the total desired length of the number (default: `2`).",
    code: `
$order = Traverse::value(["item" => 7]);

echo $order->item->numLeadingZero(3);  

// Result: 007
`
  },
  {
    title: "clamp",
    content: "The `clamp` method restricts a number to stay within a specified minimum and maximum range.",
    args: "Takes a `$min` and `$max` value to define the allowed range.",
    code: `
$score = Traverse::value(["value" => 120]);

echo $score->value->numClamp(0, 100);  

// Result: 100
`
  },
  {
    title: "isEven",
    content: "The `isEven` method checks if a number is even, returning a boolean value.",
    args: "",
    code: `
$number = Traverse::value(["value" => 42]);

echo $number->value->numIsEven();  

// Result: true
`
  },
  {
    title: "isOdd",
    content: "The `isOdd` method checks if a number is odd, returning a boolean value.",
    args: "",
    code: `
$number = Traverse::value(["value" => 33]);

echo $number->value->numIsOdd();  

// Result: true
`
  },
  {
    title: "percentToDecimal",
    content: "The `percentToDecimal` method converts a percentage value into its decimal form (e.g., `45%` becomes `0.45`).",
    args: "",
    code: `
$tax = Traverse::value(["rate" => "45"]);

echo $tax->rate->numPercentToDecimal();  

// Result: 0.45
`
  },
  {
    title: "toPercent",
    content: "The `toPercent` method converts a decimal value into a percentage by multiplying it by 100 and rounding to the specified precision.",
    args: "Takes an optional `$precision` to define the number of decimal places (default: `2`).",
    code: `
$progress = Traverse::value(["completed" => 0.4567]);

echo $progress->completed->numToPercent(1);  

// Result: 45.7
`
  },
  {
    title: "toKb",
    content: "The `toKb` method converts a byte value to kilobytes, rounded to two decimal places.",
    args: "",
    code: `
$file = Traverse::value(["size" => 20480]);

echo $file->size->numToKb();  

// Result: 20
`
  },
  {
    title: "toFilesize",
    content: "The `toFilesize` method formats a byte value into a human-readable file size using appropriate units (kb, mb, g, t).",
    args: "",
    code: `
$file = Traverse::value(["size" => 1048576]);

echo $file->size->numToFilesize();  

// Result: 1 mb
`
  },
  {
    title: "toBytes",
    content: "The `toBytes` method converts a human-readable size string (e.g., '5mb', '1 g') into its byte equivalent.",
    args: "",
    code: `
$file = Traverse::value(["size" => "5mb"]);

echo $file->size->numToBytes();  

// Result: 5242880
`
  },
  {
    title: "toCurrency",
    content: "The `toCurrency` method converts a number to a localized currency string using the specified currency code.",
    args: "Takes a required `$currency` (e.g., 'USD', 'SEK'), an optional `$decimals` to define decimal precision (default: `2`), and an optional `$roundingMode` for rounding behavior (default: `NumberFormatter::ROUND_HALFUP`).",
    code: `
$payment = Traverse::value(["amount" => 1234.5]);

echo $payment->amount->numToCurrency("USD");  

// Result: $1,234.50
`
  },
  {
    title: "getCurrencySymbol",
    content: "The `getCurrencySymbol` method returns the localized symbol for a given currency code (e.g., 'kr' for SEK or '$' for USD).",
    args: "Takes a required `$currency` code (e.g., 'USD', 'SEK') to retrieve its corresponding symbol.",
    code: `
$payment = Traverse::value(["amount" => 0]);

echo $payment->amount->numGetCurrencySymbol("SEK");  

// Result: kr
`
  },
  {
    title: "toCurrencyIso",
    content: "The `toCurrencyIso` method formats a number as a currency string using the ISO currency code as a prefix (e.g., 'SEK 1,000.00').",
    args: "Takes a required `$currency` ISO code (e.g., 'SEK', 'USD') and an optional `$decimals` for decimal precision (default: `2`).",
    code: `
$payment = Traverse::value(["amount" => 1000]);

echo $payment->amount->numToCurrencyIso("SEK");  

// Result: SEK 1,000.00
`
  },
  {
    title: "setLocale",
    content: "The `setLocale` method initializes a NumberFormatter instance with the specified locale and formatting type.",
    args: "Takes a required `$locale` (e.g., 'en_US', 'sv_SE') and an optional `$type` for formatting style (default: `NumberFormatter::CURRENCY`).",
    code: `
$price = Traverse::value(["amount" => 1000]);

echo $price->amount->numSetLocale("sv_SE")->numToCurrency("SEK");  

// Result: 1 000,00 kr
`
  },
  {
    title: "setDefaultLocale",
    content: "The `setDefaultLocale` method sets a global default NumberFormatter instance used across all formatting operations when no local instance is specified.",
    args: "Takes a required `$locale` (e.g., 'en_US', 'sv_SE') and an optional `$type` for formatting style (default: `NumberFormatter::CURRENCY`).",
    code: `
Num::setDefaultLocale("sv_SE");

$price = Traverse::value(["amount" => 2500]);

echo $price->amount->numToCurrency("SEK");  

// Result: 2 500,00 kr
`
  },
  {
    title: "getNumFormatter",
    content: "The `getNumFormatter` method retrieves the current NumberFormatter instance. If no local instance is set, it falls back to the default. Throws an exception if none is available.",
    args: "",
    code: `
// First, set a default locale for formatting
Num::setDefaultLocale("en_US");

$price = Traverse::value(["amount" => 1234.56]);

echo $price->amount->getNumFormatter()->formatCurrency(1234.56, "USD");  

// Result: $1,234.56
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
