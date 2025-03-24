---
title: Format Number
sidebar_position: 4
---

import DynamicSections from '@site/src/components/DynamicSections';
import { FormatNumber } from "@site/src/data/FormatNumber";

# Full Number Format List
The Number Format functionality in DTO provides a simple and consistent way to work with numeric values. Whether you need to convert, format, round, clamp, or prepare numbers for display, these built-in methods make the process effortless while keeping your data clean and structured.
#### How It Works

#### With Traverse Collection
```php
echo $product->price->numToCurrency("USD");
// Result: $9.99
```

#### As Singleton Helper
```php
use MaplePHP\DTO\Format\Num;

echo Num::value(9.99)->toCurrency("USD");
// Result: $9.99
```
_For more transformation options like numClamp, numRound, and numToFilesize, check the Transformation section in the navigation below._

#### Full Feature List

<DynamicSections sections={FormatNumber} />
