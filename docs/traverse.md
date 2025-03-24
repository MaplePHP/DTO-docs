---
title: Traverse Collection
sidebar_position: 2
---

import DynamicSections from '@site/src/components/DynamicSections';
import { Traverse } from "@site/src/data/Traverse";

# Full Traversal Collection List
The traverse functionality in DTO allows you to effortlessly work with collections of any data type, whether it's strings, objects, arrays, or something else. It seamlessly processes each item while giving you the ability to apply transformations along the way. This makes it easy to handle structured data without worrying about type inconsistencies or manual looping.

#### How It Works
```php
foreach($users->data->fetch() as $user) {
    echo $user->name->strStripTags()->strUcFirst();
}
```
_For more transformation options like  `strStripTags` and `strUcFirst`, check the Transformation section in the navigation._

#### Full Feature List

<DynamicSections sections={Traverse} />
