---
title: Format Clock
sidebar_position: 5
---

import DynamicSections from '@site/src/components/DynamicSections';
import { FormatClock } from "@site/src/data/FormatClock";

# Full Clock Format List
The Clock functionality in DTO makes it easy to work with dates and times using PHP’s DateTime object under the hood. Whether you're formatting timestamps, comparing dates, or localizing output, these built-in methods provide a clean and consistent approach for handling temporal data.
#### How It Works

#### With Traverse Collection
```php
echo $event->starts_at->clockSetLocale("sv_SE")->clockFormat("l, j F");
// Result: torsdag, 1 maj
```

#### As Singleton Helper
```php
use MaplePHP\DTO\Format\Clock;

echo Clock::value("2025-05-01 14:30")->clockSetTimezone("UTC")->format("Y-m-d H:i");
// Result: 2025-05-01 14:30
```
_For more transformation options like clockIsToday, clockWeekday, and clockToTimezone, check the Transformation section in the navigation below._

#### Full Feature List

<DynamicSections sections={FormatClock} />
