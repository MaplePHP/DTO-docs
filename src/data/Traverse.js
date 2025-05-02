export const Traverse = [
    {
        title: "fetch",
        priority: 1,
        content: "The `fetch` method **retrieves and transforms each element in an array** while maintaining traversal capabilities. If a **callback function** is provided, each element is passed to it, allowing for **custom manipulation**. If no callback is given, it simply **returns each item as a DTO object**.",
        args: "It takes an optional callback (`$callback`) function that receives each row as a Traverse object, along with its key, original value, and index. If the callback returns false, iteration stops early.",
        code: `
$users = Traverse::value([
    ["id" => 1, "name" => "<b>Alice</b>"],
    ["id" => 2, "name" => "<i>bob</i>"],
    ["id" => 3, "name" => "Charlie"]
]);

foreach($users->fetch() as $user) {
    echo $user->name->strStripTags()->strUcFirst();
}

`,
        result: `
Alice
Bob
Charlie
        `
    },
    {
        title: "each",
        priority: 1,
        content: "The `each` method **retrieves and transforms each element in an array** while maintaining traversal capabilities. If a **callback function** is provided, each element is passed to it, allowing for **custom manipulation**. If no callback is given, it simply **returns each item as a DTO object**.",
        args: "It takes an optional callback (`$callback`) function that receives each row as a Traverse object, along with its key, original value, and index. If the callback returns false, iteration stops early.",
        code: `
$users = Traverse::value([
    ["id" => 1, "name" => "<b>Alice</b>"],
    ["id" => 2, "name" => "<i>bob</i>"],
    ["id" => 3, "name" => "Charlie"]
]);

$transformed = $users->each(function ($user, $key) {
    // It's perfectly fine to print the result directly here too!
    return [
        "id" => $user->id->get(),
        "name" => $user->name->strStripTags()->strUcFirst()->get()
    ];
});

print_r($transformed);
`,
        result: `
Array
(
    [0] => Array ( [id] => 1, [name] => Alice )
    [1] => Array ( [id] => 2, [name] => Bob )
    [2] => Array ( [id] => 3, [name] => Charlie )
)
        `
    },
    {
        title: "toArray",
        priority: 1,
        content: "The toArray method converts the DTO collection into a native PHP array, making it useful when passing structured data to functions that do not support DTO objects.",
        args: "It takes an optional callback function that allows modification of each element during conversion.",
        code: `
$users = Traverse::value([
    ["name" => "Alice", "active" => 1],
    ["name" => "Bob", "active" => 0]
]);

echo "Example 1: <br>";
$arrayA = $data->toArray();

echo "Example 2: <br>";
$arrayB = $users->toArray(function ($row) {
    $row['active'] = $row['active'] ? "Enabled" : "Disabled";
    return $row;
});

print_r($array);
print_r($arrayB);

`,
        result: `
Example 1:
Array
(
    [0] => Array ( [name] => Alice, [active] => 1 )
    [1] => Array ( [name] => Bob, [active] => 0 )
)

Example 2:
Array
(
    [0] => Array ( [name] => Alice, [active] => Enabled )
    [1] => Array ( [name] => Bob, [active] => Disabled )
)
`
    },
    {
        title: "toString",
        priority: 1,
        content: "📌 **Note:** The Traverse collection automatically calls `get()` method when used in a string context, thanks to its built-in to string functionality. This means you can use it without explicitly calling `get()` in many cases.",
        args: "",
        code: `
$user = Traverse::value([
    "firstname" => "John"
]);

echo "User: " . $user->eq("firstname");
// echo "User: " . $user->eq("firstname")->toString(); // This is the same as above

`,
        result: `
User: John
`
    },
    {
        title: "get",
        priority: 1,
        content: "The get method retrieves the current value from the collection. It will always return the right data type, if you echo out without get it will use toString() which will return the value as a string. This is useful when working with complex data structures that may contain multiple types of values, such as arrays, objects, or even nested collections.",
        args: "It takes an optional $fallback argument, which will be returned if the stored value is null.",
        code: `
$user = Traverse::value([
    "organization" => "MaplePHP",
    "orgNr" => 198207123,
]);

echo "Number (int): " . $user->eq("orgNr")->get();

echo "Number (string): " . $user->eq("orgNr");

`,
        result: `
Number (int): 198207123
Number (string): 198207123
`
    },
    {
        title: "toInt",
        content: "The toInt method converts the current value into an integer. This is useful when working with numerical values that may be stored as strings but need to be used as integers in calculations or comparisons.",
        args: "",
        code: `
$price = Traverse::value("1999.99");

$integerPrice = $price->toInt();

echo "Price: " . $integerPrice;

`,
        result: `
Price: 1999

`
    },
    {
        title: "toFloat",
        content: "The toFloat method converts the current value into a floating-point number. This is useful when dealing with numeric values that may be stored as strings but require decimal precision.",
        args: "",
        code: `
$price = Traverse::value("1999.99");

$floatPrice = $price->toFloat();

echo "Price: " . $floatPrice;

`,
        result: `
Price: 1999.99

`
    },
    {
        title: "toBool",
        content: "The toBool method converts the current value into a boolean. This ensures that any value—whether it's a string, number, or other data type—can be interpreted as true or false logically.",
        args: "",
        code: `
$values = Traverse::value([
    "is_active" => "true",
    "is_verified" => "0",
    "has_access" => 5,
    "is_deleted" => "false",
]);

$active = $values->eq("is_active")->toBool();
$verified = $values->eq("is_verified")->toBool();
$access = $values->eq("has_access")->toBool();
$deleted = $values->eq("is_deleted")->toBool();

echo "Active: " . ($active ? "Yes" : "No") . "\\n";
echo "Verified: " . ($verified ? "Yes" : "No") . "\\n";
echo "Has Access: " . ($access ? "Yes" : "No") . "\\n";
echo "Deleted: " . ($deleted ? "Yes" : "No") . "\\n";

`,
        result: `
Active: Yes
Verified: No
Has Access: Yes
Deleted: No
`
    },
    {
        title: "toJson",
        priority: 1,
        content: "The toJson method converts any given value into its JSON representation. This is useful when storing structured data, sending responses in APIs, or debugging complex objects.",
        args: "It takes a value to convert, an optional set of JSON encoding flags (default 0), and an optional depth limit (default 512).",
        code: `
$data = Traverse::value([
    "name" => "Alice",
    "email" => "alice@example.com",
    "roles" => ["admin", "editor"]
]);

echo $data->toJson();

`,
        result: `
{"name":"Alice","email":"alice@example.com","roles":["admin","editor"]}
`
    },
    {
      title: "acceptType",
      priority: 1,
      content: "The acceptType method validates that the raw value matches one of the allowed data types. If the value matches, it is returned; otherwise, an exception is thrown.",
      args: "Takes an array $validDataType with accepted type strings such as \"string\", \"array\", \"object\", \"int\", \"bool\", \"null\", etc.",
      code: `
$user = Traverse::value(["meta" => ["age" => 30]]);

$data = $user->meta->acceptType(["array"]);

print_r($data);

`,
      result: `
 ['age' => 30]
`
    },
    {
        title: "dump",
        priority: 1,
        content: "The dump method outputs the current collection in a human-readable format. This is useful for debugging and inspecting data during development.",
        args: "",
        code: `
$data = Traverse::value([
    "user" => ["id" => 1, "name" => "Alice"],
    "settings" => ["theme" => "dark", "notifications" => true]
]);

$data->dump();

`,
        result: `
Traverse {
    array:2 [
        user => array:2 [
            id => 1
            name => 'Alice'
        ]
        settings => array:2 [
            theme => 'dark'
            notifications => true
        ]
    ]
}
`
    },
    {
        title: "count",
        priority: 1,
        content: "The count method returns the number of elements in the collection if it is an array. If the collection is not an array, it returns 0. This is useful when validating data before using methods like fetch.",
        args: "",
        code: `
$users = Traverse::value([
    ["id" => 1, "name" => "Alice"],
    ["id" => 2, "name" => "Bob"]
]);

echo "Total users: " . $users->count();

`,
        result: `
Total users: 2

`
    },
    {
        title: "isset",
        priority: 1,
        content: "The isset method checks if the collection has a value set. If the value exists, it returns the value itself; otherwise, it returns false. This is useful for determining whether data is present before attempting further operations.",
        args: "",
        code: `
$user = Traverse::value([
    "name" => "Alice",
    "email" => "alice@example.com"
]);

echo $user->email->isset() ? "Email is set." : "Email is missing.";

`,
        result: `
Email is set.

`
    },
    {
        title: "map",
        content: "The map method applies a callback function to each element in the array and returns a new transformed collection. It is useful for modifying data in bulk, such as formatting strings, adjusting numerical values, or applying transformations to a dataset.",
        code: `
 $obj = Traverse::value([
    "people" => [
        ["firstname" => "Alice", "lastname" => "Johnson"],
        ["firstname" => "Bob", "lastname" => "smith"],
        ["firstname" => "Charlie", "lastname" => "Brown"]
    ]
]);

$lastNames = $obj->people->map(function ($person) {
    return $person->lastname->strUcFirst();
});

print_r($lastNames->toArray());
`,
        result: `
[
    [0] => Johnson
    [1] => Smith
    [2] => Brown
]
        `
    },
    {
        title: "filter",
        content: "The filter method removes elements from a collection based on a callback function. If no callback is provided, it will remove all empty (falsy) values from the collection.",
        code: `
$obj = Traverse::value([
    "users" => [
        "user1" => ["name" => "Alice", "status" => 1],
        "user2" => ["name" => "Bob", "status" => 0],
        "user3" => ["name" => "Charlie", "status" => 1]
    ]
]);

$activeUsers = $obj->users->filter(function ($user) {
    return $user->status->get() === 1;
});

print_r($activeUsers->toArray());
`,
        result: `
[
    "user1" => ["name" => "Alice", "status" => 1],
    "user3" => ["name" => "Charlie", "status" => 1]
]
        `
    },
    {
        title: "reduce",
        content: "The reduce method iterates over the collection and reduces it to a single value using a callback function. It is useful for summarizing data, such as calculating totals, concatenating values, or aggregating results.",
        args: "It takes a callable `$callback`, which receives `$carry` (the accumulated value) and $item (the current element). An optional `$initial` value can be provided, defaulting to `null`.",
        code: `
$obj = Traverse::value([
    "employees" => [
        "emp1" => ["name" => "Alice", "salary" => 40000],
        "emp2" => ["name" => "Bob", "salary" => 50000],
        "emp3" => ["name" => "Charlie", "salary" => 60000]
    ]
]);

$totalSalary = $obj->employees->reduce(function ($carry, $employee) {
    // Get method is used to retrieve the value in right data type
    return $carry + $employee->salary->get();
}, 0);

echo $totalSalary->get();

`,
        result: `
150000
        `
    },
    {
        title: "fallback",
        priority: 1,
        content: "The fallback method sets a default value when the current value is empty, null, 0, or false. This ensures that your collection always returns a meaningful value instead of empty or missing data.",
        args: "It takes a single argument, `$fallback`, which is the value that will be used when the current value is empty, null, 0, or false.",
        code: `
$user = Traverse::value([
    "name" => "Alice",
    "email" => null
]);

$email = $user->email->fallback("No email provided");

echo $email->get();

`,
        result: `
No email provided

`
    },
    {
        title: "chunk",
        content: "The chunk method splits a collection into smaller groups of a specified size. This is useful when processing large datasets in smaller parts, paginating data, or organizing elements into fixed-sized traverse.",
        args: "It takes a chunk size (`$length`) to define the number of elements per group and an optional `$preserveKeys` flag to maintain original array keys.",
        code: `
$obj = Traverse::value([
    "apple", "banana", "grape", "orange", "mango", "kiwi", "strawberry", "blueberry", "pineapple"
]);

$chunks = $obj->chunk(3);

print_r($chunks->toArray());

`,
        result: `
[
    ["apple", "banana", "grape"],
    ["orange", "mango", "kiwi"],
    ["strawberry", "blueberry", "pineapple"]
]

        `
    },
    {
        title: "flatten",
        content: "The flatten method converts a multi-dimensional collection into a single-level array, making nested data easier to work with. This is useful when dealing with deeply nested structures that need to be simplified.",
        args: "It takes an optional `$preserveKeys` flag. When true, it keeps the original array keys; otherwise, the keys are reset.",
        code: `
$obj = Traverse::value([
    "fruits" => [
        "citrus" => ["orange", "lemon"],
        "berries" => ["strawberry", "blueberry"],
        "tropical" => ["mango", "pineapple"]
    ]
]);

$flattened = $obj->fruits->flatten();

print_r($flattened->toArray());

`,
        result: `
["orange", "lemon", "strawberry", "blueberry", "mango", "pineapple"]

        `
    },
    {
        title: "flattenWithKeys",
        content: "The flattenWithKeys method flattens a multi-dimensional collection into a single-level array while preserving the original keys. This is useful when working with nested structures that need to be simplified without losing key associations.",
        args: "",
        code: `
$obj = Traverse::value([
    "users" => [
        "admin" => ["id" => 1, "name" => "Alice"],
        "editor" => ["id" => 2, "name" => "Bob"]
    ]
]);

$flattened = $obj->users->flattenWithKeys();

print_r($flattened->toArray());

`,
        result: `
["id" => 1, "name" => "Alice", "id" => 2, "name" => "Bob"]

        `
    },
    {
        title: "merge",
        content: "The merge method combines the current collection with another array or DTO. It allows appending or prepending new data while keeping the structure intact.",
        args: "It takes a collection or array (`$combine`) to merge and an optional boolean (`$before`) to decide whether the new data should be added before or after the existing collection.",
        code: `
$obj = Traverse::value([
    "shoppingList" => ["bread", "milk", "eggs"]
]);

$merged = $obj->shoppingList->merge(["butter", "cheese"]);

print_r($merged->toArray());

`,
        result: `
["bread", "milk", "eggs", "butter", "cheese"]
        `
    },
    {
        title: "append",
        content: "The append method adds new elements to the end of the collection. It functions as a shortcut for merge($combine, false), ensuring that the new data is always placed after the existing collection.",
        args: "",
        code: `
$obj = Traverse::value([
    "shoppingList" => ["bread", "milk", "eggs"]
]);

$updated = $obj->shoppingList->append(["butter", "cheese"]);

print_r($updated->toArray());

`,
        result: `
["bread", "milk", "eggs", "butter", "cheese"]

        `
    },
    {
        title: "prepend",
        content: "The prepend method adds new elements to the beginning of the collection. It functions as a shortcut for merge($combine, true), ensuring that the new data appears before the existing collection.",
        args: "",
        code: `
$obj = Traverse::value([
    "shoppingList" => ["bread", "milk", "eggs"]
]);

$updated = $obj->shoppingList->prepend(["butter", "cheese"]);

print_r($updated->toArray());

`,
        result: `
["butter", "cheese", "bread", "milk", "eggs"]

        `
    },
    {
        title: "splice",
        content: "The splice method removes a portion of the collection and optionally replaces it with new data. It allows modifying the collection in place while also returning the removed elements.",
        args: "It takes an offset (`$offset`) that determines where to start removing, an optional length (`$length`) that specifies how many elements to remove, and an optional replacement (`$replacement`) to insert in place of the removed items. The removed elements are stored in `$splicedResults`.",
        code: `
$obj = Traverse::value([
    "apple", "banana", "grape", "orange", "mango"
]);

$splicedResults = null;
$updated = $obj->splice(1, 2, ["pear", "peach"], $splicedResults);

print_r($updated->toArray());
print_r($splicedResults->toArray());

`,
        result: `
// Updated collection
["apple", "pear", "peach", "orange", "mango"]

// Removed elements
["banana", "grape"]

        `
    },
    {
        title: "slice",
        content: "The slice method extracts a portion of the collection without modifying the original data. It allows retrieving a subset of elements based on position while keeping the remaining collection intact.",
        args: "It takes an offset (`$offset`) to determine where to start slicing, an optional length (`$length`) to specify how many elements to extract, and an optional boolean (`$preserveKeys`) to decide whether to retain original array keys.",
        code: `
$obj = Traverse::value([
    "apple", "banana", "grape", "orange", "mango", "kiwi"
]);

$sliced = $obj->slice(0, 3);

print_r($sliced->toArray());

`,
        result: `
["apple", "banana", "grape"]

        `
    },
    {
        title: "diff",
        content: "The diff method returns elements from the collection that are not present in another array or collection. It is useful for finding unique values or determining what has changed between two datasets.",
        args: "It takes a collection or array (`$array`) to compare against, and returns a new collection with only the items that are not present in the provided array.",
        code: `
$obj = Traverse::value(["apple", "banana", "grape", "orange"]);

$filtered = $obj->diff(["banana", "orange"]);

print_r($filtered->toArray());

`,
        result: `
["apple", "grape"]

        `
    },
    {
        title: "diffAssoc",
        content: "The diffAssoc method compares both the values and keys of the collection against another array or collection. Unlike diff(), which only checks values, this method ensures that differences in both keys and values are taken into account.",
        args: "It takes a collection or array (`$array`) to compare against and returns a new collection containing only the elements that have a unique key-value pair.",
        code: `
$obj = Traverse::value([
    "a" => "apple",
    "b" => "banana",
    "c" => "cherry"
]);

$filtered = $obj->diffAssoc([
    "b" => "banana",
    "c" => "grape"
]);

print_r($filtered->toArray());

`,
        result: `
["a" => "apple", "c" => "cherry"]

        `
    },
    {
        title: "diffKey",
        content: "The diffKey method compares only the keys of the collection against another array or collection. It ignores values and returns elements whose keys do not exist in the provided collection.",
        args: "It takes a collection or array (`$array`) to compare against and returns a new collection containing only the elements with unique keys.",
        code: `
$obj = Traverse::value([
    "a" => "apple",
    "b" => "banana",
    "c" => "cherry"
]);

$filtered = $obj->diffKey([
    "b" => "random",
    "c" => "different"
]);

print_r($filtered->toArray());

`,
        result: `
["a" => "apple"]

        `
    },
    {
        title: "unique",
        content: "The unique method removes duplicate values from the collection, keeping only the first occurrence of each unique value. It is useful when working with lists that may contain repeated data.",
        args: "It takes an optional sorting flag (`$flags`), which determines how values are compared when checking for duplicates.",
        code: `
$obj = Traverse::value(["apple", "banana", "apple", "orange", "banana", "grape"]);

$unique = $obj->unique();

print_r($unique->toArray());

`,
        result: `
["apple", "banana", "orange", "grape"]

        `
    },
    {
        title: "duplicates",
        content: "The duplicates method returns only the values that appear more than once in the collection. Unlike unique(), which removes duplicates, this method extracts them, making it useful for finding repeated data in a dataset.",
        args: "",
        code: `
$obj = Traverse::value(["apple", "banana", "apple", "orange", "banana", "grape", "apple"]);

$duplicates = $obj->duplicates();

print_r($duplicates->toArray());

`,
        result: `
["apple", "banana"]

        `
    },
    {
        title: "flip",
        content: "The flip method swaps the keys and values in the collection. This is useful when you need to reverse mappings, such as converting labels into keys or restructuring data.",
        args: "",
        code: `
$obj = Traverse::value([
    "admin" => 101,
    "editor" => 102,
    "subscriber" => 103
]);

$flipped = $obj->flip();

print_r($flipped->toArray());

`,
        result: `
[101 => "admin", 102 => "editor", 103 => "subscriber"]

        `
    },
    {
        title: "unset",
        content: "The unset method removes one or more items from the collection by their keys. This is useful when you need to dynamically clean up data, exclude certain elements, or reset specific values.",
        args: "It takes one or multiple keys (`$keySpread`) that should be removed from the collection.",
        code: `
$obj = Traverse::value([
    "apple" => 1,
    "banana" => 2,
    "grape" => 3
]);

$updated = $obj->unset("banana");

print_r($updated->toArray());

`,
        result: `
It takes one or multiple keys ($keySpread) that should be removed from the collection.
        `
    },
    {
        title: "column",
        content: "The column method extracts all values from a specific column in a multi-dimensional collection, making it easy to work with structured datasets like database results, API responses, or tabular data.",
        args: "It takes a column key (`$columnKey`) to retrieve values from and an optional index key (`$indexKey`) that can be used as array keys in the result.",
        code: `
$obj = Traverse::value([
    ["id" => 1, "name" => "Alice", "email" => "alice@example.com"],
    ["id" => 2, "name" => "Bob", "email" => "bob@example.com"],
    ["id" => 3, "name" => "Charlie", "email" => "charlie@example.com"]
]);

$names = $obj->column("name");

print_r($names->toArray());

`,
        result: `
["Alice", "Bob", "Charlie"]

        `
    },
    {
        title: "pluck",
        content: "The pluck method is an alias for `column()`, providing a more intuitive name for retrieving values from a specific field in a multi-dimensional collection. It works the same way as `column()`, allowing you to extract data from a specific key while optionally setting another key as the array index.",
        args: "It takes a column key (`$columnKey`) to retrieve values from and an optional index key (`$indexKey`) to use as array keys.",
        code: `
$obj = Traverse::value([
    ["id" => 101, "username" => "alice", "email" => "alice@example.com"],
    ["id" => 102, "username" => "bob", "email" => "bob@example.com"],
    ["id" => 103, "username" => "charlie", "email" => "charlie@example.com"]
]);

$usernames = $obj->pluck("username");

print_r($usernames->toArray());

`,
        result: `
["alice", "bob", "charlie"]

        `
    },
    {
        title: "shift",
        content: "The shift method removes the first element from the collection and returns a new collection without it. If you pass a variable, it will store the removed value, allowing you to retrieve and modify the first item in one operation.",
        args: "It takes an optional variable (`$value`) where the removed item will be stored.",
        code: `
$obj = Traverse::value(["task1", "task2", "task3"]);

$removedTask = null;
$updatedQueue = $obj->shift($removedTask);

print_r($updatedQueue->toArray());
echo "Removed task: " . $removedTask;

`,
        result: `
["task2", "task3"]
Removed task: task1
        `
    },
    {
        title: "expMerge",
        content: "The expMerge method splits each item in the collection based on a given separator and then merges the resulting parts back into the same hierarchy. This is useful for breaking down concatenated data into separate elements within a collection.",
        args: "It takes a separator ($separator), which defines how each item should be split.",
        code: `
$obj = Traverse::value(["apple,banana", "grape,orange", "mango"]);

$expanded = $obj->expMerge(",");

print_r($expanded->toArray());
`,
        result: `
["apple", "banana", "grape", "orange", "mango"]
        `
    },
    {
        title: "pop",
        content: "The pop method removes the last element from the collection and returns a new collection without it. If you pass a variable, it will store the removed item, allowing you to retrieve and modify the last item while keeping the remaining collection intact.",
        args: "It takes an optional variable (`$value`) where the removed item will be stored.",
        code: `
$obj = Traverse::value(["task1", "task2", "task3"]);

$removedTask = null;
$updatedTasks = $obj->pop($removedTask);

print_r($updatedTasks->toArray());
echo "Removed task: " . $removedTask;

`,
        result: `
["task1", "task2"]
Removed task: task3

        `
    },
    {
        title: "unshift",
        content: "The unshift method adds one or more elements to the beginning of the collection, shifting the existing elements to make space. This is useful for inserting priority items, queue management, or modifying ordered lists.",
        args: "It takes one or more values (`$value`) to prepend to the collection.",
        code: `
$obj = Traverse::value(["task2", "task3", "task4"]);

$updatedTasks = $obj->unshift("task1");

print_r($updatedTasks->toArray());

`,
        result: `
["task1", "task2", "task3", "task4"]

        `
    },
    {
        title: "push",
        content: "The push method adds one or more elements to the end of the collection, preserving the existing order. This is useful for appending items to lists, queues, or dynamically growing arrays.",
        args: "It takes one or more values (`$value`) to add at the end of the collection.",
        code: `
$obj = Traverse::value(["task1", "task2", "task3"]);

$updatedTasks = $obj->push("task4");

print_r($updatedTasks->toArray());

`,
        result: `
["task1", "task2", "task3", "task4"]

        `
    },
    {
        title: "pad",
        content: "The pad method extends the collection to a specified length, filling the new slots with a given value. If the collection is already longer than the desired length, it remains unchanged. This is useful for ensuring a minimum array size, default value assignments, or structuring datasets.",
        args: "It takes a length (`$length`) to define the target size and a value (`$value`) to fill the empty slots.",
        code: `
$obj = Traverse::value(["Alice", "Bob"]);

$padded = $obj->pad(5, "Guest");

print_r($padded->toArray());

`,
        result: `
["Alice", "Bob", "Guest", "Guest", "Guest"]

        `
    },
    {
        title: "fill",
        content: "The fill method creates or replaces a collection with a specific number of elements, all set to the same value. This is useful for generating default values, pre-filling arrays, or creating placeholder data.",
        args: "It takes a starting index (`$startIndex`), a count (`$count`) to define the number of elements, and a value (`$value`) to fill the collection.",
        code: `
$obj = Traverse::value([]);

$filled = $obj->fill(0, 5, "Guest");

print_r($filled->toArray());

`,
        result: `
["Guest", "Guest", "Guest", "Guest", "Guest"]
        `
    },
    {
        title: "range",
        content: "The range method generates a collection of numbers or characters from a starting point to an ending point, with an optional step. This is useful for creating sequences, pagination numbers, alphabetical lists, and date ranges.",
        args: "It takes a starting value (`$start`), an ending value (`$end`), and an optional step (`$step`) that determines the increment between each value.",
        code: `
$obj = Traverse::value([]);

$numbers = $obj->range(1, 10);

print_r($numbers->toArray());

`,
        result: `
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

        `
    },
    {
        title: "shuffle",
        content: "The shuffle method randomizes the order of elements in the collection, making it useful for randomized lists, shuffling decks, selecting random elements, or creating unique orderings.",
        tags: ["random", "array"],
        args: "",
        code: `
$obj = Traverse::value(["Alice", "Bob", "Charlie", "David"]);

$shuffledPlayers = $obj->shuffle();

print_r($shuffledPlayers->toArray());

`,
        result: `
["Charlie", "Alice", "David", "Bob"]

        `
    },
    {
        title: "rand",
        content: "The rand method selects one or more random keys from the collection, making it useful for choosing random winners, selecting random questions, or picking random elements from a dataset.",
        args: "It takes an optional number of keys (`$num`) to retrieve. If no number is specified, it returns a single random key.",
        tags: ["random", "array"],
        code: `
$obj = Traverse::value(["Alice", "Bob", "Charlie", "David"]);

$randomKey = $obj->rand();
$winner = $obj->eq($randomKey);

echo "Winner: " . $winner->get();

`,
        result: `
Winner: Charlie

        `
    },
    {
        title: "replace",
        content: "The replace method updates values in the collection using values from one or more replacement arrays. If a key exists in both the original and the replacement, the value from the replacement is used. This is useful for overwriting default configurations, updating datasets, or modifying lists dynamically.",
        args: "It takes one or more replacement arrays (`$replacements`), which provide the new values.",
        code: `
$obj = Traverse::value([
    "name" => "Alice",
    "email" => "alice@example.com",
    "role" => "User"
]);

$updated = $obj->replace(["role" => "Admin", "email" => "admin@example.com"]);

print_r($updated->toArray());

`,
        result: `
[
    "name" => "Alice",
    "email" => "admin@example.com",
    "role" => "Admin"
]

        `
    },
    {
        title: "replaceRecursive",
        content: "The replaceRecursive method replaces values in a collection using values from one or more replacement arrays, but unlike replace, it applies replacements recursively to nested arrays. This is useful for deep merging configurations, updating multi-dimensional datasets, or modifying complex structures without losing data.",
        args: "It takes one or more replacement arrays (`$replacements`), which provide the new values.",
        code: `
$obj = Traverse::value([
    "user" => [
        "name" => "Alice",
        "preferences" => [
            "theme" => "light",
            "notifications" => ["email" => true, "sms" => false]
        ]
    ]
]);

$updated = $obj->replaceRecursive([
    "user" => [
        "preferences" => [
            "theme" => "dark",
            "notifications" => ["sms" => true]
        ]
    ]
]);

print_r($updated->toArray());

`,
        result: `
[
    "user" => [
        "name" => "Alice",
        "preferences" => [
            "theme" => "dark",
            "notifications" => ["email" => true, "sms" => true]
        ]
    ]
]

        `
    },
    {
        title: "reverse",
        content: "The reverse method reverses the order of elements in the collection, making it useful for flipping lists, reversing logs, or working with LIFO (Last In, First Out) structures.",
        args: "It takes an optional `$preserveKeys` argument (default: false). When true, the original array keys are retained; when false, keys are re-indexed.",
        code: `
$obj = Traverse::value(["Message 1", "Message 2", "Message 3"]);

$reversed = $obj->reverse();

print_r($reversed->toArray());

`,
        result: `
["Message 3", "Message 2", "Message 1"]

        `
    },
    {
        title: "searchFilter",
        content: "The searchFilter method removes items from the collection that match a given set of values. This is useful for excluding unwanted items, filtering lists dynamically, or refining datasets.",
        args: "It takes an array of values (`$needle`) to exclude and an optional strict mode (`$strict`). If strict is true, it checks both value and type.",
        code: `
$obj = Traverse::value(["apple", "banana", "grape", "orange", "kiwi"]);

$filtered = $obj->searchFilter(["banana", "kiwi"]);

print_r($filtered->toArray());

`,
        result: `
["apple", "grape", "orange"]

        `
    },
    {
        title: "searchMatch",
        content: "The searchMatch method filters the collection, keeping only the items that match a given set of values. This is useful for finding relevant items, narrowing down datasets, or extracting specific values.",
        args: "It takes an array of values (`$needle`) to keep and an optional strict mode (`$strict`). If strict is true, it checks both value and type.",
        code: `
$obj = Traverse::value(["apple", "banana", "grape", "orange", "kiwi"]);

$matched = $obj->searchMatch(["banana", "kiwi"]);

print_r($matched->toArray());

`,
        result: `
["banana", "kiwi"]

        `
    },
    {
        title: "select",
        content: "The select method retrieves specific key-value pairs from the collection based on the given keys. This is useful for extracting only the needed data from an array, filtering configuration settings, or working with structured datasets.",
        args: "It takes an array of keys (`$needle`) to keep and an optional strict mode (`$strict`). If strict is true, it checks both key value and type.",
        code: `
$obj = Traverse::value([
    "name" => "Alice",
    "email" => "alice@example.com",
    "role" => "Admin",
    "last_login" => "2024-03-12"
]);

$selected = $obj->select(["name", "email"]);

print_r($selected->toArray());

`,
        result: `
[
    "name" => "Alice",
    "email" => "alice@example.com"
]

        `
    },
    {
        title: "walk",
        content: "The walk method applies a user-defined function to each item in the collection, allowing for custom transformations, modifications, or operations on every element.",
        args: "It takes a callback function (`$call`), which is executed for each element, and an optional argument (`$arg`) that is passed to the callback.",
        code: `
$obj = Traverse::value(["apple", "banana", "grape"]);

$obj->walk(function ($value, $key) {
    echo $this->eq($key)->strToUpper() . "===" . strtoupper($value) "\\n";
});
`,
        result: `
APPLE===APPLE  
BANANA===BANANA  
GRAPE===GRAPE  

        `
    },
    {
        title: "eq",
        content: "The eq method retrieves an item from the collection by its key or index. This makes it useful for accessing specific elements in an array, extracting deeply nested values, or working with structured data.",
        args: "It takes a key (`$key`), which can be an integer, float, or string. If the key does not exist, it returns false. For nested keys, dot notation can be used to access deeply structured values.",
        code: `
$obj = Traverse::value([
    "name" => "Alice",
    "email" => "alice@example.com",
    "role" => "Admin",
    "preferences" => [
        "theme" => "dark",
        "language" => "en"
    ]
]);

echo $obj->eq("email") . ": " . $settings->eq("preferences.theme");

`,
        result: `
alice@example.com: dark

        `
    },
    {
        title: "walkRecursive",
        content: "The walkRecursive method applies a user-defined function to each element in a multi-dimensional collection, including nested arrays. This makes it useful for deep transformations, data sanitization, or modifying complex hierarchical structures.",
        args: "It takes a callback function (`$call`), which is executed for each element, and an optional argument (`$arg`) that can be passed to the callback.",
        code: `
$data = Traverse::value([
    "users" => [
        ["name" => "<b>Alice</b>", "email" => "<i>alice@example.com</i>"],
        ["name" => "<b>Bob</b>", "email" => "<i>bob@example.com</i>"]
    ]
]);

$data->walkRecursive(function (&$value) {
    $value = strip_tags($value);
});

print_r($data->toArray());

`,
        result: `
[
    "users" => [
        ["name" => "Alice", "email" => "alice@example.com"],
        ["name" => "Bob", "email" => "bob@example.com"]
    ]
]

        `
    },
    {
        title: "next",
        content: "The next method moves the internal pointer of the collection forward by one step. This is useful for iterating over elements without using a loop, stepping through datasets manually, or tracking progress in ordered lists.",
        args: "",
        code: `
$tasks = Traverse::value(["Wake up", "Brush teeth", "Have breakfast"]);
    
echo "Key:" . $tasks->next()->next()->key()->get();

`,
        result: `
Key: 2

        `
    },
    {
        title: "prev",
        content: "The prev method moves the internal pointer of the collection backward by one step, allowing you to navigate back through a dataset. This is useful for iterating manually, undoing a step in navigation, or accessing previous elements in an ordered collection.",
        args: "",
        code: `
$tasks = Traverse::value(["Wake up", "Brush teeth", "Have breakfast"]);

echo "Key:" . $tasks->end()->prev()->key()->get();

`,
        result: `
Key: 1

        `
    },
    {
        title: "keys",
        content: "The keys method returns all keys from the collection, making it useful for retrieving field names from an associative array, analyzing dataset structures, or working with dynamic configurations.",
        args: "",
        code: `
$user = Traverse::value([
    "name" => "Alice",
    "email" => "alice@example.com",
    "role" => "Admin"
]);

$keys = $user->keys();

print_r($keys->toArray());

`,
        result: `
["name", "email", "role"]

        `
    },
    {
        title: "implode",
        content: "The implode method joins all elements in the collection into a single string using a specified separator. This is useful for generating formatted lists, URLs, query strings, or any scenario where array values need to be combined into a single string.",
        args: "It takes one optional argument, `$separator`, which defines the string used to separate elements. If no separator is provided, the elements are joined without spaces.",
        code: `
$names = Traverse::value(["Alice", "Bob", "Charlie"]);

$formattedList = $names->implode(", ");

echo $formattedList->get();

`,
        result: `
Alice, Bob, Charlie

        `
    },
    {
        title: "wildcardMatchKeys",
        content: "The wildcardMatchKeys method filters the collection by matching keys using a wildcard pattern. This is useful for searching for dynamically named keys, filtering configurations, or extracting elements with a common prefix.",
        args: "It takes one argument, `$search`, which is a wildcard pattern (`*` and `?` supported) to match against the keys in the collection.",
        code: `
$config = Traverse::value([
    "db_host" => "localhost",
    "db_user" => "admin",
    "db_pass" => "secret",
    "cache_enabled" => true,
    "debug_mode" => false
]);

$databaseConfig = $config->wildcardMatchKeys("db_*");

print_r($databaseConfig->toArray());

`,
        result: `
[
    "db_host" => "localhost",
    "db_user" => "admin",
    "db_pass" => "secret"
]

        `
    },
    {
        title: "wildcardMatch",
        content: "The wildcardMatch method filters values (or keys) in the collection using a wildcard pattern. It is useful for finding specific patterns in logs, filtering datasets with dynamic naming, or extracting values that match a structured format (e.g., dates, invoice numbers, tags).",
        args: "It takes a `$search` string, which supports `*` for multiple characters and `?` for a single character. The optional `$searchByKey` argument (default: false) determines whether to search within the keys instead of the values.",
        code: `
$invoices = Traverse::value([
    "2024-INV001",
    "2025-INV002",
    "2025-INV003",
    "2026-INV004"
]);

$filteredInvoices = $invoices->wildcardMatch("2025-*");

print_r($filteredInvoices->toArray());

`,
        result: `
[
    "2025-INV002",
    "2025-INV003"
]
        `
    },
    {
        title: "find",
        content: "The find method searches the array for a given value and returns the first matching value as a collection. If no match is found, it returns null instead of false, maintaining a more structured approach when working with data. This is particularly useful when looking for specific elements within datasets while ensuring further operations can be performed on the result.",
        args: "It takes a `$needle`, which is the value being searched for, and an optional `$strict` argument (default: false) that determines whether the comparison should check for type as well.",
        code: `
$shoppingList = Traverse::value([
    ["id" => 1, "name" => "Mild", "type" => "Dairy"],
    ["id" => 2, "name" => "Banana", "type" => "Fruit"],
    ["id" => 3, "name" => "Cheese", "type" => "Dairy"]
]);

$list = $shoppingList->find('Banana')->strToUpper();

echo "Found the fruit: " . $list->get();
`,
        result: `
Found the fruit: BANANA
        `
    },
    {
        title: "search",
        content: "The search method searches the collection for a given value and returns the first matching key as a collection. If no match is found, it returns null instead of false, ensuring consistency when handling search results. This method is useful for retrieving the index or key associated with a specific value, making it easier to reference data within a dataset.",
        args: "It takes a `$needle`, which is the value to search for, and an optional `$strict` argument (default: false), which determines whether the comparison should check for both value and type.",
        code: `
$shoppingList = Traverse::value([
    "item_1" => "Milk",
    "item_2" => "Banana",
    "item_3" => "Cheese"
]);

$key = $shoppingList->search("Banana")->get();

Found at key: item_2
`,
        result: `
Found the fruit: BANANA
        `
    },
    {
        title: "validOrFallback",
        content: "The `validOrFallback` method **validates the current value using the [MaplePHP Validate](https://github.com/MaplePHP/Validate) library**. If the validation **passes**, the method continues to traverse and allows further transformations (like string modifications).",
        args: "It takes a `$method`, which is the name of the validation method to apply, an `$args` array for optional parameters required by the validation method, and an optional `$fallback` value that determines what should be returned if the validation fails.",
        code: `
$obj = Traverse::value([
    "id" => 101, 
    "username" => "alice", 
    "email" => "ALICE@example.com",
    "birthDate" => "1988-08-21"
]);

$email = $obj->email->validOrFallback("email")->strToLower();

$birthDate = $obj->birthDate->validOrFallback("age", [18], 'Is not of legal age');

if($email->get()) {
    // If is string then the object will automatically be converted to string
    echo "$email ($birthDate)";
}
`,
        result: `
alice@example.com (1988-08-21)
        `
    },
    {
        title: "sprint",
        content: "The sprint method formats the value using sprintf, allowing you to dynamically insert values into a formatted string. This is particularly useful for creating structured outputs, dynamic messages, or formatted numbers.",
        args: "It takes a single argument, $add, which is the format string where the current value will be inserted.",
        code: `
$user = Traverse::value([
    "name" => "Alice"
]);

$greeting = $user->name->sprint("Hello, %s! Welcome back.");

echo $greeting->get();

`,
        result: `
Hello, Alice! Welcome back.

`
    },
    {
        title: "sum",
        content: "The sum method calculates the total sum of all values in the array. This is useful for aggregating numerical data such as prices, scores, or quantities.",
        args: "",
        code: `
$cart = Traverse::value([
    "items" => [
        ["name" => "Laptop", "price" => 999.99],
        ["name" => "Mouse", "price" => 49.99],
        ["name" => "Keyboard", "price" => 79.99]
    ]
]);

$totalPrice = $cart->items->pluck("price")->sum();

echo "Total: $" . $totalPrice->get();

`,
        result: `
Total: $1129.97

`
    },
    {
        title: "valid",
        priority: 1,
        content: "The valid method checks whether the current value meets a specific validation rule. If the value is valid, it returns true; otherwise, it returns false. This is useful for ensuring data integrity before processing or transformation.",
        args: "The first argument is `$method`, which is the name of the validation rule from the MaplePHP Validate library. The second argument, `$args`, is an optional array of parameters passed to the validation method.",
        code: `
$obj = Traverse::value([
    "firstname" => "Alice",
    "lastname" => "Johnson",
    "age" => "1950-11-02"
]);

if ($obj->age->valid("age", [18])) {
    echo "Valid age";
} else {
    echo "Age out of range";
}

`,
        result: `
Valid age
`
    },
    {
        title: "add",
        content: "The add method dynamically adds a new item to the object and continues the method chain. This is useful when modifying or expanding data structures on the fly without breaking the traversal flow.",
        args: "The first argument, `$key`, defines the property name for the new item. The second argument, `$value`, sets the value of that property.",
        code: `
$user = Traverse::value([
    "firstname" => "John",
    "lastname" => "Doe"
]);

$user = $user->add("email", "john.doe@example.com");

echo "User email: " . $user->get();
`,
        result: `
User email: john.doe@example.com

`
    },
    {
        title: "with",
        content: "The with method creates a new Traverse collection from the given data. This allows you to quickly wrap any value into a DTO, making it easy to chain methods and perform transformations.",
        args: "It takes a `$data` argument, which is the value or collection that will be wrapped into a new `Traverse` instance.",
        code: `
$user = Traverse::value([
    "firstname" => "John",
    "lastname" => "Doe"
]);

$newUser = $user->with([
    "firstname" => "Jane",
    "lastname" => "Smith"
]);

echo "User: " . $newUser->eq("firstname");

`,
        result: `
User: Jane

`
    },
    {
        title: "first",
        content: "The first method retrieves the first item in the collection, ensuring that you always have access to the initial element when working with datasets.",
        args: "",
        code: `
$shoppingList = Traverse::value(["Milk", "Eggs", "Cheese", "Bread"]);

$firstItem = $shoppingList->first();

echo "First item: " . $firstItem->get();

`,
        result: `
First item: Milk

`
    },
    {
        title: "last",
        content: "The last method retrieves the last item in the collection, allowing you to access the final element efficiently.",
        args: "",
        code: `
$shoppingList = Traverse::value(["Milk", "Eggs", "Cheese", "Bread"]);

$lastItem = $shoppingList->last();

echo "Last item: " . $lastItem->get();

`,
        result: `
Last item: Bread

`
    },
    {
        title: "reset",
        content: "The reset method sets the internal pointer of the collection to its first element, making it useful when working with traversal methods like next(), prev(), and key(). It allows you to restart navigation from the beginning of the collection.",
        args: "It takes an optional reference argument $value, which will store the first element of the collection when called.",
        code: `
$formSteps = Traverse::value(["Personal Info", "Billing", "Review", "Submit"]);

$end = $formSteps->end();
$previousStep = $formSteps
    ->with($end)
    ->reset()
    ->eq($end->key()->toInt()-1)
    ->get();

echo "Going back to: " . $previousStep->get();

`,
        result: `
Going back to: Review

`
    },
    {
        title: "end",
        content: "The end method moves the internal pointer of the collection to the last element, allowing traversal operations to continue from the end. It does not modify the structure of the collection but adjusts the internal pointer.",
        args: "It takes an optional reference argument `$value`, which will store the last element of the collection when called.",
        code: `
$tasks = Traverse::value(["Wake up", "Brush teeth", "Have breakfast"]);

echo $tasks->end()->prev()->key()->get();

`,
        result: `
1
`
    },
    /*
    {
        title: "wwww",
        content: "wwww",
        args: "wwwww",
        code: `
wwww
`,
        result: `
www
`
    }
     */
];
