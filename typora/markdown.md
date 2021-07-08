## Markdown experiments

This page contains my experiments in markdown.

Guide : https://guides.github.com/features/mastering-markdown/

Example of table.

First | Second
----- | ------
A | 1
B | 2

This is some F# source.

```fsharp
let s = "This is a string."
```

![This is an image](C:\test.png)

And now a footnote!

[^]: This is a footnote!

And a link,

[]: github.com	"Link to GitHub"

A horizontal line.

------

Some source code:

```fsharp
let x =
	myList
	|> List.filter (fun x -> x.Id < 10)
```

Some math:
$$
y = x^2 + y
$$
A table of contents:

[TOC]
