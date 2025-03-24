export const FormatDom = [
  {
    title: "tag",
    tags: ["html", "dom"],
    content: "The `tag` method creates an HTML tag. You can optionally define an ID or class by using `#` or `.` suffixes (e.g., `'h1.title'` or `'h1#title'`). Multiple tags can be nested by chaining `domTag`.",
    args: "Takes a required `$tag` string for the HTML tag name (optionally suffixed with `.class` or `#id`), and an optional `$attr` array for additional HTML attributes.",
    code: `
$obj = Traverse::value([
    "title" => "Hello"
]);

echo $obj->title->domTag("h1.title");  

// Result: <h1 class="title">Hello</h1>

echo $obj->title->domTag("h1.title")->domTag("header");

// Result: <header><h1 class="title">Hello</h1></header>
`
  },
  {
    title: "build",
    tags: ["html", "dom"],
    content: "The `build` method allows you to construct a DOM element using a fluent chain inside a callable. Useful for applying multiple tag modifications in a single block.",
    args: "Takes a `$call` which is a callable function that receives the current DOM instance and returns the modified version.",
    code: `
$obj = Traverse::value([
    "title" => "Hello"
]);

echo $obj->title->domBuild(function($dom) {
    return $dom->tag("h1")->class("title")->id("hello-world")->attr(["title" => "Welcome"]);
});

// Result: <h1 class="title" id="hello-world" title="Welcome">Hello</h1>
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
