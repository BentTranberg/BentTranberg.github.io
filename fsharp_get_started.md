# How to get started with professional F# development

I have almost always worked in small teams that didn't at all have a proper development setup until I came along, so that it fell
upon me to get things in order. That has given me a lot of experience. These days I work solo, and I get to choose everything about
my development myself. The techniques, tools and libraries I tell you about, represents decades of experience.

## Learning F#

There are plenty of books about F#, some good, some not so good. But what I lack from pretty much every book
that aims to teach F# from the ground up, is lazer-like focus on functional programming. That's unfortunate.
I didn't grok F# until I was lucky enough to stumble on the site [F# for fun and profit](https://fsharpforfunandprofit.com/), by
Scott Wlaschin. The site is practically a book, only on the web. (It's downloadable as a PDF.) I recommend
you start there, to avoid wandering about in the desert like I did for a year or two. I'm not saying a book
can't be useful too, but you just don't want to miss that site.

## Getting help with your issues

When you get going, you will likely want some instant help with issues that pop up all the time, so you're not slowed down.

StackOverflow is a good place to search for answers, and to ask if you don't find an answer. Take care to follow
the guidelines when asking questions on StackOverflow. It is not your regular discussion forum kind of site.

F# Slack is a discussion forum where you can discuss pretty much anything more or less F# related. There are
channels for various topics, e.g. #beginner and #web.

## Getting the right tools in place

### IDE

To get going at all, you'll want an IDE (Integrated Development Environment), like Visual Studio which is the
one I prefer. For professional development, you'll likely need the Professional version or higher. For just
trying out, as an individual, I believe the Visual Studio Community version is free and perfectly good for every need.
I use the Professional Version, but I am reasonaly sure that everything I demonstrate on this site can be done with
the Community version.

### VSC (Version Control System)

I also strongly recommend you start using a version control system as soon as possible. Perhaps you think this will
be an extra burden while just starting to learn, but I don't think so. It doesn't take much time to realize just how
efficient it is to be able to see what you've been doing in the current sesstion, be able to roll back mistakes, keep track
of various developments, and not least have a backup of every single step of your development.

I use VisualSVN for version control, because I don't quite like Git. If you plan to become a professional developer that
can work in any team, then Git is the way to go. On this site I will show how to use VisualSVN, since that's what I use and
is used to. I'm not at all comfortable enough with Git to teach it.

### So that's it

You don't need more than this to get a good start.

# Later

* To verify your coding, you should use unit tests, so you need a unit test framework for that.
* To be able to release products reliably and efficiently, you'll need a way to automate the build process.
* You also possibly need a way to create an installer, if the released product is to be distributed as installable software.

## Databases (SQL)

If you are going to develop software that deals with a database, you'll need libraries for that, or possibly not
if you decide to just use the basic functionality in .NET for that. Dapper is a very popular library, and the one
that I'm going to talk about here. You'll also need knowledge about SQL (Structured Query Language), and about
managing SQL servers. The SQL Express Server is free. I can demonstrate how to manage databases in that kind of
server.

## GUI (Graphical User Interface)

If you plan to develop software with a Windows user interface, then I strongly recommend Elmish.WPF, and I'll
explain how to get started with that.

## Web

If you plan to develop software with a Web interface, then Bolero is one of several options. I like it because
it's very clean and simple, and uses Elmish, just like Elmish.WPF. I will explain how to get going with that.

## Windows Service

If you plan to develop a plain Windows Service, I can explain how I do that using
PeterKottas.DotNetCore.WindowsService
