export const FormatString = [
  {
    title: "position",
    content: "The position method finds the position of the **first occurrence** of a substring in a string. It supports multibyte functionality, ensuring proper handling of UTF-8 and other encodings. If your environment does not support multibyte string functions, it provides a polyfill.",
    args: "Takes a substring `$needle` to search for, an optional `$offset` to define where to start searching, and an optional `$encoding` to specify the character encoding.",
    code: `
$user = Traverse::value(["email" => "john.doe@gmail.com"]);

echo $user->email->strPosition('.'); 

// Result: 4

`
  },
  {
    title: "positionLast",
    content: "The positionLast method finds the position of the **last occurrence** of a substring in a string. It supports multibyte functionality, ensuring proper handling of UTF-8 and other encodings. If your environment does not support multibyte string functions, it provides a polyfill.",
    args: "Takes a substring `$needle` to search for, an optional `$offset` to define where to start searching, and an optional `$encoding` to specify the character encoding.",
    code: `
$user = Traverse::value(["email" => "john.doe@gmail.com"]);

echo $user->email->strPositionLast('.');

// Result: 14

`
  },
  {
    title: "substr",
    content: "The substr method extracts a portion of a string starting from a given position. It supports multibyte functionality, ensuring proper handling of UTF-8 and other encodings. If your environment does not support multibyte string functions, it provides a polyfill.",
    args: "Takes a starting position $start, an optional $length to define how many characters to extract, and an optional $encoding to specify the character encoding.",
    code: `
$user = Traverse::value(["email" => "john.doe@gmail.com"]);

echo $user->email->strSubstr(0, 4);  

// Result: john

`
  },
  {
    title: "strlen",
    content: "The strlen method returns the length of a string. It supports multibyte functionality, ensuring proper handling of UTF-8 and other encodings. If your environment does not support multibyte string functions, it provides a polyfill.",
    args: "Takes an optional $encoding to specify the character encoding.",
    code: `
$user = Traverse::value(["username" => "johndoe"]);

echo $user->username->strStrlen();  

// Result: 7

`
  },
  {
    title: "contains",
    content: "The contains method checks if a string contains a given substring and returns true or false.",
    args: "Takes a substring `$needle` to search for.",
    code: `
$user = Traverse::value(["email" => "john.doe@gmail.com"]);

echo $user->email->strContains('@gmail.com');  

// Result: true

`
  },
  {
    title: "startsWith",
    content: "The startsWith method checks if a string starts with a given substring and returns true or false.",
    args: "Takes a substring `$needle` to check against the beginning of the string.",
    code: `
$user = Traverse::value(["email" => "john.doe@gmail.com"]);

echo $user->email->strStartsWith('john');  

// Result: true

`
  },
  {
    title: "endsWith",
    content: "The endsWith method checks if a string ends with a given substring and returns true or false.",
    args: "Takes a substring `$needle` to check against the end of the string.",
    code: `
$user = Traverse::value(["email" => "john.doe@gmail.com"]);

echo $user->email->strEndsWith('@gmail.com');  

// Result: true

`
  },
  {
    title: "getContains",
    content: "The getContains method checks if a string contains a given substring. If found, it returns the substring; otherwise, it returns false.",
    args: "Takes a substring `$needle` to search for.",
    code: `
$user = Traverse::value(["email" => "john.doe@gmail.com"]);

echo $user->email->strGetContains('@gmail.com');  

// Result: @gmail.com

`
  },
  {
    title: "getStartsWith",
    content: "The getStartsWith method checks if a string starts with a given substring. If found, it returns the substring; otherwise, it returns false.",
    args: "Takes a substring $needle to check against the beginning of the string.",
    code: `
$user = Traverse::value(["email" => "john.doe@gmail.com"]);

echo $user->email->strGetStartsWith('john');

// Result: john

`
  },
  {
    title: "getEndsWith",
    content: "The getEndsWith method checks if a string ends with a given substring. If found, it returns the substring; otherwise, it returns false.",
    args: "Takes a substring `$needle` to check against the end of the string.",
    code: `
$user = Traverse::value(["email" => "john.doe@gmail.com"]);

echo $user->email->strGetEndsWith('@gmail.com');  

// Result: @gmail.com

`
  },
  {
    title: "excerpt",
    content: "The excerpt method shortens a string to a specified length and optionally appends an ending if the text is truncated. It supports multibyte functionality, ensuring proper handling of UTF-8 and other encodings.",
    args: "Takes a `$length` to define the total character limit, an optional `$ending` to append if the text is shortened, and an optional `$encoding` to specify the character encoding.",
    code: `
$user = Traverse::value(["bio" => "John is a software developer with over 10 years of experience in web development."]);

echo $user->bio->strExcerpt(40);  

// Result: John is a software developer with over...

`
  },
  {
    title: "nl2br",
    content: "The nl2br method converts new line characters (\\n) in a string to HTML <br> tags, making it suitable for rendering in HTML.",
    args: "",
    code: `
$user = Traverse::value(["bio" => "John is a developer.\\nHe loves coding."]);

echo $user->bio->strNl2br();  

// Result: John is a developer.<br>He loves coding.

`
  },
  {
    title: "addTrailingSlash",
    content: "The addTrailingSlash method ensures that a string always ends with a trailing slash (/). It only adds the slash if it does not already exist.",
    args: "",
    code: `
$user = Traverse::value(["path" => "https://example.com"]);

echo $user->path->strAddTrailingSlash();  

// Result: https://example.com/
`
  },
  {
    title: "trimTrailingSlash",
    content: "The trimTrailingSlash method removes a trailing slash (/) from the end of a string if it exists.",
    args: "",
    code: `
$user = Traverse::value(["path" => "https://example.com/"]);

echo $user->path->strTrimTrailingSlash();  

// Result: https://example.com

`
  },
  {
    title: "stripTags",
    content: "The `stripTags` method removes HTML tags from a string while optionally allowing specific tags to be retained.",
    args: "Takes an optional `$whitelist` containing allowed HTML tags (e.g., `<em><strong>`). If empty, all tags are removed.",
    code: `
$user = Traverse::value(["bio" => "<strong>John</strong> is a <em>developer</em>."]);

echo $user->bio->strStripTags("<em>");  

// Result: John is a <em>developer</em>.
`
  },
  {
    title: "encode",
    content: "The `encode` method converts special characters to HTML entities, preventing HTML injection and ensuring safe output.",
    args: "Takes an optional `$flag` to specify encoding behavior (default: `ENT_QUOTES`) and an optional `$encoding` to define the character encoding (default: `UTF-8`).",
    code: `
$user = Traverse::value(["comment" => "<script>alert('XSS');</script>"]);

echo $user->comment->strEncode();  

// Result: &lt;script&gt;alert(&#039;XSS&#039;);&lt;/script&gt;
`
  },
  {
    title: "decode",
    content: "The `decode` method converts HTML entities back to their corresponding characters.",
    args: "Takes an optional `$flag` to specify decoding behavior (default: `ENT_QUOTES`).",
    code: `
$user = Traverse::value(["comment" => "&lt;strong&gt;Hello&lt;/strong&gt;"]);

echo $user->comment->strDecode();  

// Result: <strong>Hello</strong>
`
  },
  {
    title: "sanitizeIdentifiers",
    content: "The `sanitizeIdentifiers` method removes any character that is not a letter, number, underscore, or dash. It can be used to sanitize SQL identifiers that should be enclosed in backticks.",
    args: "",
    code: `
$user = Traverse::value(["column" => "user-name!@#"]);

echo $user->column->strSanitizeIdentifiers();  

// Result: user-name
`
  },
  {
    title: "clearBreaks",
    content: "The `clearBreaks` method removes soft breaks, including line breaks (`\\n`), carriage returns (`\\r`), form feed (`\\f`), and vertical tabs (`\\v`).",
    args: "",
    code: `
$user = Traverse::value(["bio" => "John Doe\\nSoftware Developer\\r\\nLoves coding."]);

echo $user->bio->strClearBreaks();  

// Result: John Doe Software Developer Loves coding.
`
  },
  {
    title: "normalizeSpaces",
    content: "The `normalizeSpaces` method removes all excessive whitespace, including spaces, tabs, newlines, carriage returns, and form feed characters, replacing them with a single space.",
    args: "",
    code: `
$user = Traverse::value(["bio" => "John    Doe\\tSoftware    Developer\\nLoves   coding."]);

echo $user->bio->strNormalizeSpaces();  

// Result: John Doe Software Developer Loves coding.
`
  },
  {
    title: "normalizeSeparators",
    content: "The `normalizeSeparators` method replaces multiple spaces, hyphens, and underscores with a single space, ensuring clean and consistent word separation.",
    args: "",
    code: `
$user = Traverse::value(["title" => "John---Doe__Software    Developer"]);

echo $user->title->strNormalizeSeparators();  

// Result: John Doe Software Developer
`
  },
  {
    title: "entityEncode",
    content: "The `entityEncode` method converts special characters to HTML entities, making the text safe for rendering in an HTML document.",
    args: "Takes an optional `$flags` parameter (default: `ENT_QUOTES | ENT_SUBSTITUTE`), an optional `$encoding` for character encoding, and a `$doubleEncode` flag to determine whether already-encoded entities should be re-encoded (default: `true`).",
    code: `
$user = Traverse::value(["comment" => "<strong>Hello & Welcome!</strong>"]);

echo $user->comment->strEntityEncode();  

// Result: &lt;strong&gt;Hello &amp; Welcome!&lt;/strong&gt;
`
  },
  {
    title: "entityDecode",
    content: "The `entityDecode` method converts HTML entities back to their corresponding characters.",
    args: "Takes an optional `$flags` parameter (default: `ENT_QUOTES | ENT_SUBSTITUTE`) and an optional `$encoding` for character encoding.",
    code: `
$user = Traverse::value(["comment" => "&lt;strong&gt;Hello &amp; Welcome!&lt;/strong&gt;"]);

echo $user->comment->strEntityDecode();  

// Result: <strong>Hello & Welcome!</strong>
`
  },
  {
    title: "trim",
    content: "The `trim` method removes specified characters from the beginning and end of a string.",
    args: "Takes an optional `$characters` parameter defining which characters to trim (default: spaces, newlines, tabs, vertical tabs, and null bytes).",
    code: `
$user = Traverse::value(["input" => "   Hello World!   "]);

echo $user->input->strTrim();  

// Result: Hello World!
`
  },
  {
    title: "ltrim",
    content: "The `ltrim` method removes specified characters from the beginning of a string.",
    args: "Takes an optional `$characters` parameter defining which characters to trim (default: spaces, newlines, tabs, vertical tabs, and null bytes).",
    code: `
$user = Traverse::value(["input" => "   Hello World!"]);

echo $user->input->strLtrim();  

// Result: Hello World!
`
  },
  {
    title: "rtrim",
    content: "The `rtrim` method removes specified characters from the end of a string.",
    args: "Takes an optional `$characters` parameter defining which characters to trim (default: spaces, newlines, tabs, vertical tabs, and null bytes).",
    code: `
$user = Traverse::value(["input" => "Hello World!   "]);

echo $user->input->strRtrim();  

// Result: Hello World!
`
  },
  {
    title: "toLower",
    content: "The `toLower` method converts all characters in a string to lowercase.",
    args: "",
    code: `
$user = Traverse::value(["name" => "John Doe"]);

echo $user->name->strToLower();  

// Result: john doe
`
  },
  {
    title: "toUpper",
    content: "The `toUpper` method converts all characters in a string to uppercase.",
    args: "",
    code: `
$user = Traverse::value(["name" => "John Doe"]);

echo $user->name->strToUpper();  

// Result: JOHN DOE
`
  },
  {
    title: "ucWords",
    content: "The `ucWords` method capitalizes the first letter of every word in a string.",
    args: "",
    code: `
$user = Traverse::value(["title" => "john doe, software developer"]);

echo $user->title->strUcWords();  

// Result: John Doe, Software Developer
`
  },
  {
    title: "ucFirst",
    content: "The `ucFirst` method capitalizes the first letter of a string.",
    args: "",
    code: `
$user = Traverse::value(["sentence" => "hello world!"]);

echo $user->sentence->strUcFirst();  

// Result: Hello world!
`
  },
  {
    title: "pad",
    content: "The `pad` method pads a string to a specified length using a given string.",
    args: "Takes a required `$length` to define the total string length, an optional `$padString` to specify the padding characters (default: space), and an optional `$padType` to determine the padding direction (`STR_PAD_RIGHT` by default).",
    code: `
$user = Traverse::value(["code" => "42"]);

echo $user->code->strPad(5, "0", STR_PAD_LEFT);  

// Result: 00042
`
  },
  {
    title: "leadingZero",
    content: "The `leadingZero` method ensures a string is at least two characters long by padding it with a leading zero if necessary.",
    args: "",
    code: `
$user = Traverse::value(["day" => "5"]);

echo $user->day->strLeadingZero();  

// Result: 05
`
  },
  {
    title: "replaceSpaces",
    content: "The `replaceSpaces` method replaces all spaces in a string with the specified replacement character.",
    args: "Takes an optional `$replaceWith` parameter to define the replacement character (default: `-`).",
    code: `
$user = Traverse::value(["title" => "Hello World"]);

echo $user->title->strReplaceSpaces("_");  

// Result: Hello_World
`
  },
  {
    title: "formatEmail",
    content: "The `formatEmail` method trims whitespace, normalizes accents, and converts the email address to lowercase for consistency.",
    args: "",
    code: `
$user = Traverse::value(["email" => "  Jôhn.Dœ@GMAIL.com  "]);

echo $user->email->strFormatEmail();  

// Result: john.doe@gmail.com
`
  },
  {
    title: "slug",
    content: "The `slug` method converts a string into a URL-friendly format by removing unwanted characters, normalizing accents, and replacing spaces with hyphens.",
    args: "",
    code: `
$user = Traverse::value(["title" => "  Héllo Wôrld! Welcome to PHP.  "]);

echo $user->title->strSlug();  

// Result: hello-world-welcome-to-php
`
  },
  {
    title: "normalizeAccents",
    content: "The `normalizeAccents` method replaces accented and special characters with their ASCII counterparts for better consistency in text processing.",
    args: "",
    code: `
$user = Traverse::value(["name" => "Jörg Åström"]);

echo $user->name->strNormalizeAccents();  

// Result: Jorg Astrom
`
  },
  {
    title: "urlDecode",
    content: "The `urlDecode` method decodes a URL-encoded string, converting percent-encoded characters back to their original form.",
    args: "",
    code: `
$user = Traverse::value(["url" => "Hello%20World%21"]);

echo $user->url->strUrlDecode();  

// Result: Hello World!
`
  },
  {
    title: "urlEncode",
    content: "The `urlEncode` method encodes a string for use in a URL by converting special characters into percent-encoded format.",
    args: "",
    code: `
$user = Traverse::value(["query" => "Hello World!"]);

echo $user->query->strUrlEncode();  

// Result: Hello%20World%21
`
  },
  {
    title: "rawUrlEncode",
    content: "The `rawUrlEncode` method encodes a string for use in a URL, similar to `urlEncode`, but preserves spaces as `%20` instead of `+`.",
    args: "",
    code: `
$user = Traverse::value(["query" => "Hello World!"]);

echo $user->query->strRawUrlEncode();  

// Result: Hello%20World%21
`
  },
  {
    title: "rawUrlDecode",
    content: "The `rawUrlDecode` method decodes a raw URL-encoded string, converting percent-encoded characters back to their original form.",
    args: "",
    code: `
$user = Traverse::value(["url" => "Hello%20World%21"]);

echo $user->url->strRawUrlDecode();  

// Result: Hello World!
`
  },
  {
    title: "replace",
    content: "The `replace` method replaces occurrences of a given string or array of strings with a specified replacement value.",
    args: "Takes `$find` as the value(s) to search for and `$replace` as the value(s) to replace with.",
    code: `
$user = Traverse::value(["text" => "Hello World"]);

echo $user->text->strReplace("World", "PHP");  

// Result: Hello PHP
`
  },
  {
    title: "normalizeUrlEncoding",
    content: "The `normalizeUrlEncoding` method decodes and then re-encodes a URL string to ensure consistent URL encoding format.",
    args: "",
    code: `
$user = Traverse::value(["url" => "Hello%2BWorld%21"]);

echo $user->url->strNormalizeUrlEncoding();  

// Result: Hello%20World%21
`
  },
  {
    title: "explodeCamelCase",
    content: "The `explodeCamelCase` method splits a camelCase or PascalCase string into an array of words.",
    args: "",
    code: `
$user = Traverse::value(["variable" => "helloWorldExample"]);

echo json_encode($user->variable->strExplodeCamelCase());  

// Result: ["hello", "World", "Example"]
`
  },
  {
    title: "getUrlPath",
    content: "The `getUrlPath` method extracts the path component from a given URL.",
    args: "",
    code: `
$user = Traverse::value(["url" => "https://example.com/blog/article?query=123"]);

echo $user->url->strGetUrlPath();  

// Result: /blog/article
`
  },
  {
    title: "getUrlScheme",
    content: "The `getUrlScheme` method extracts the scheme (protocol) from a given URL.",
    args: "",
    code: `
$user = Traverse::value(["url" => "https://example.com/blog/article"]);

echo $user->url->strGetUrlScheme();  

// Result: https
`
  },
  {
    title: "getUrlHost",
    content: "The `getUrlHost` method extracts the host (domain) from a given URL.",
    args: "",
    code: `
$user = Traverse::value(["url" => "https://sub.example.com/blog/article"]);

echo $user->url->strGetUrlHost();  

// Result: sub.example.com
`
  },
  {
    title: "getUrlPort",
    content: "The `getUrlPort` method extracts the port number from a given URL. If no port is specified, it returns an empty string.",
    args: "",
    code: `
$user = Traverse::value(["url" => "https://example.com:8080/blog/article"]);

echo $user->url->strGetUrlPort();  

// Result: 8080
`
  },
  {
    title: "getUrlUser",
    content: "The `getUrlUser` method extracts the username from a given URL if authentication credentials are present.",
    args: "",
    code: `
$user = Traverse::value(["url" => "https://john@example.com/blog/article"]);

echo $user->url->strGetUrlUser();  

// Result: john
`
  },
  {
    title: "getUrlPassword",
    content: "The `getUrlPassword` method extracts the password from a given URL if authentication credentials are present.",
    args: "",
    code: `
$user = Traverse::value(["url" => "https://john:secret@example.com/blog/article"]);

echo $user->url->strGetUrlPassword();  

// Result: secret
`
  },
  {
    title: "getUrlQuery",
    content: "The `getUrlQuery` method extracts the query string from a given URL.",
    args: "",
    code: `
$user = Traverse::value(["url" => "https://example.com/blog/article?search=php&sort=asc"]);

echo $user->url->strGetUrlQuery();  

// Result: search=php&sort=asc
`
  },
  {
    title: "getUrlFragment",
    content: "The `getUrlFragment` method extracts the fragment (anchor) from a given URL.",
    args: "",
    code: `
$user = Traverse::value(["url" => "https://example.com/blog/article#comments"]);

echo $user->url->strGetUrlFragment();  

// Result: comments
`
  },
  {
    title: "getUrlParts",
    content: "The `getUrlParts` method extracts multiple specified parts from a given URL and returns them as an array.",
    args: "Takes an array `$parts` specifying which URL components to extract (e.g., `['scheme', 'host', 'path']`).",
    code: `
$user = Traverse::value(["url" => "https://john:secret@example.com:8080/blog/article?search=php#comments"]);

echo json_encode($user->url->strGetUrlParts(['scheme', 'host', 'path']));  

// Result: ["https", "example.com", "/blog/article"]
`
  },
  {
    title: "getDirname",
    content: "The `getDirname` method extracts the directory path from a given file path.",
    args: "",
    code: `
$user = Traverse::value(["path" => "/var/www/html/index.php"]);

echo $user->path->strGetDirname();  

// Result: /var/www/html
`
  },
  {
    title: "escape",
    content: "The `escape` method protects against XSS by escaping special characters in a string.",
    args: "",
    code: `
$user = Traverse::value(["comment" => "<script>alert('XSS');</script>"]);

echo $user->comment->strEscape();  

// Result: &lt;script&gt;alert(&#039;XSS&#039;);&lt;/script&gt;
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
