---
title: Format String
sidebar_position: 3
---

import DynamicSections from '@site/src/components/DynamicSections';
import { FormatString } from "@site/src/data/FormatString";

# Full String Format List
The String Format functionality in DTO provides an easy way to modify and transform strings without extra hassle. Whether you need to clean up text, adjust capitalization, or apply formatting, these built-in methods let you do it seamlessly while keeping everything structured and consistent.

#### How It Works

#### With Traverse Collection
```php
echo $user->firstname->strTrim()->strUcFirst();
// Result: John
```

#### As Singleton Helper
```php
use MaplePHP\DTO\Format\Str;

echo Str::value('john')->trim()->ucFirst();
// Result: John
```
_For more transformation options like  `strStripTags` and `strUcFirst`, check the Transformation section in the navigation below._

#### Full Feature List

<DynamicSections sections={FormatString} />
