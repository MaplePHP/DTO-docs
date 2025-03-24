---
sidebar_position: 1
---

# Darn Tidy Object (DTO)

DTO stands for **Darn Tidy Object**, a playful twist on the traditional Data Transfer Object. But this isn’t your average DTO. It’s a fully-loaded toolkit for **traversing, transforming, and tidying up structured data** in PHP with style, power, and simplicity.


## 📦 Installation

```bash
composer require maplephp/dto
```


## Why DTO?

Working with structured data in PHP often means:

- Deep arrays
- Missing keys
- Manual transformations
- Repetitive helper functions
- And a sprinkle of `isset()` nightmares...

DTO eliminates all of that with:

- ✅ **Fluent, chainable data access** – Traverse deeply nested arrays like a pro.
- ✅ **Built-in transformation helpers** – Strings, numbers, dates, and even DOM elements.
- ✅ **Automatic fallbacks** – No more boilerplate `isset()` or `array_key_exists()` logic.
- ✅ **Optional immutability** – Keep your original data safe when needed.
- ✅ **Multibyte-safe polyfills** – Works reliably across all PHP environments.
- ✅ **More than a DTO** – Think: lightweight data object meets utility powerhouse.

---

## How It Works

DTO wraps your data arrays into a powerful, fluent object structure. Instead of cluttered array access, your code becomes expressive and self-documenting.

### Before DTO

```php
$name = isset($data['user']['profile']['name'])
    ? ucfirst(strip_tags($data['user']['profile']['name']))
    : 'Guest';
```

### With DTO

```php
$name = $obj->user->profile->name
    ->strStripTags()
    ->strUcFirst()
    ->fallback('Guest')
    ->get();
```

Much tidier, right?

---

## ✨ Core Features

### Smart Data Traversal

Access deeply nested data without ever worrying about undefined keys.

```php
echo $obj->article->tagline->strToUpper();  
// Result: 'HELLO WORLD'

echo $obj->article->content->strExcerpt()->strUcFirst();  
// Result: 'Lorem ipsum dolor sit amet...'
```

[Explore collections](/docs/traverse)

---

### Built-In Data Transformation

Transform values directly using built-in helpers like:

#### Strings (`str`)

```php
echo $obj->title->strSlug();  
// Result: 'my-awesome-title'
```

[Explore string formats](/docs/format-string)

#### Numbers (`num`)

```php
echo $obj->filesize->numToFilesize();  
// Result: '1.95 kb'

echo $obj->price->numRound(2)->numToCurrency("USD");  
// Result: $1,999.99
```

[Explore number formats](/docs/format-number)

#### Dates (`clock`)

```php
echo $obj->created_at->clockFormat('d M, Y', 'sv_SE');  
// Result: '21 augusti 2025'

echo $obj->created_at->clockIsToday();  
// Result: true
```

[Explore clock formats](/docs/format-clock)

#### HTML DOM Builder (`dom`)

```php
echo $obj->heading->domTag("h1.title");  
// Result: <h1 class="title">My Heading</h1>
```

Or nest elements with ease:

```php
echo $obj->title->domTag("h1.title")->domTag("header");  
// Result: <header><h1 class="title">Hello</h1></header>
```

[Explore DOM formats](/docs/format-dom)

---

### Built-In Collection Support

Work with arrays of objects just as cleanly:

```php
foreach ($obj->users->fetch() as $user) {
    echo $user->firstName->strUcFirst();
}
```

---

### Modify Data on the Fly

Change values directly without verbose conditionals:

```php
$updated = $obj->shoppingList->replace([0 => 'Shampoo']);
print_r($updated->toArray());
```

---

Now go forth, write cleaner code, and let DTO handle the messy parts.