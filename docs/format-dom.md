---
title: Format Dom
sidebar_position: 6
---

import DynamicSections from '@site/src/components/DynamicSections';
import { FormatDom } from "@site/src/data/FormatDom";

# Full Dom Format List
The Dom functionality in DTO provides a fluent and elegant way to generate HTML elements directly from your data. Whether you're rendering basic tags, chaining nested elements, or attaching attributes, this library simplifies HTML generation in structured PHP applications.

#### How It Works

#### With Traverse Collection
```php
echo $obj->title->domTag("h1.title");
// Result: <h1 class="title">Hello</h1>

echo $obj->title->fallback("Hello World")->domTag("h1.title")->domTag("header#top");
// Result: <header id="top"><h1 class="title">Hello World</h1></header>
```

#### As Singleton Helper
```php
use MaplePHP\DTO\Format\Dom;

echo Dom::value("Hello")->tag("h1.title");
// Result: <h1 class="title">Hello</h1>
```
_For more transformation options like clockIsToday, clockWeekday, and clockToTimezone, check the Transformation section in the navigation below._

#### Full Feature List

<DynamicSections sections={FormatDom} />
