# Tools and libraries for F# development

If you are new not just to F#, but to programming in general, then some would have you believe it takes years of experience for you to be able to develop a professional application on your own, if not decades. Well, it does take time to learn the ropes, but don't let yourself be put down by defeatists. With the tools and resources available these days, you have a great chance of building good applications in record time.

## Always on the lookout

I am a reasonably smart developer, but not too smart, maybe just average among developers, so one of my secrets is to use tools and libraries that are _simple and effective_, so I can get my job done in spite of being lazy and not too smart. I can't stand it when some puffed up manager insists that our team of 3 developers use Team Foundation because it's from Microsoft. Then I'll leave. I am always on the lookout for more effective tools, and switch as soon as it pays off. That's also why I use F#, and not C#.

In fact, it's a common problem that many developers do not want to change their ways, and stagnate in old outdated habits and practices. They can be highly productive in the sense that they write a lot of code, but their productivity never increases.

- Learn to do things better and faster all the time.
- Don't keep on doing manual repetitive tasks. Automate them instead.
- Learn the basic practices of Agile Software Development. Many of these practices are contrary to what you might expect, and also contrary to what you might have been taught.

## Essential Tools

Tool | Description
---- | -----------
Visual Studio | My preferred IDE. Free for some uses.
VisualSVN | My preferred version control system. Free for some uses.
Araxis Merge | My preferred diff viewer. Not free, and not strictly needed.
FinalBuilder | Old workhorse for build scripting. Not free. I want to replace it with something that is free and that uses F#, but I don't like FAKE.
Help & Manual | Excellent tool for authoring online and offline help in various formats, including CHM, PDF and HTML. Not free.
LINQPad | Lightweight F# scripting IDE with great functionality.
MS-SQL Express Server | My pragmatic choice for database server. I don't really have much choice, and this is a workhorse in any case.
SchemaZen | Produces "schema scripts" from MS-SQL databases, and vice versa. I use this to keep databases aligned with version controlled source.
IconExperience | Great library of icons in various formats. Not free.
Inno Setup | Free install builder for Windows. Absolutely perfect! Don't bother looking for something else.
XMind | Free for some uses?
Zeta Resource Editor | Free tool for easier side-by-side language translations in standard resource files.
Pivotal Tracker | Issue tracking. I used TestTrack Pro some years ago, but it's far too expensive to hold on to, and the GUI has become a bit bloated.

## Essential Libraries

Library | Description
------- | -----------
SmartInspect | Not free but great logging tool and library. Unfortunately no longer available. Serilog recommended instead.
DevExpress WPF | Not free WPF Components. For those cases where the standard WPF components won't easily cut it.
BenchmarkDotNet | If you need accurate benchmarks.
Bolero | For building web servers/applications.
Dapper | Database access.
Dapper.Contrib | Add-on functionality for Dapper.
Elmish.WPF | For building WPF applications using MVC.
FluentFTP | Great library that wraps FTP functionality.
FsPickler | Fast binary serializer for F# types. Perfect for serializing F# type messages in your proprietary communication protocols.
GemBox.Spreadsheet | Not free. Library for handling Excel spreadsheet files. Not dependent on Office.
GemBox.Document | Not free. Library for handling Word files. Not dependent on Office.
LiteDB | Tiny database for use when you want to store slightly more comples information in a local file.
LiteDB.FSharp | F# API for LiteDB, but not the latest version. I want to phase this out.
Mono.Cecil | Not sure which other library that requires this to come along. DevExpress WPF?
NetCoreServer | TCP, UDP and other protocols wrapped in a way that I can tolerate.
NetMQ | Great library for making your own robust protocols for distributed applications.
Newtonsoft.Json | The most popular library on NuGet.
NodaTime | For more advanced time handling than DateTime can offer.
NUnit | Unit test framework. I am considering whether to replace this, but this is an old reliable workhorse.
NUnit3TestAdapter | Visual Studio GUI integration for NUnit test framework. Not strictly needed, but I would not want to be without it.
PeterKottas.DotNetCore.WindowsService | Easy wrapper around Windows Service functionality.
Serilog | Free logging library.
Serilog.* | Various sinks for Serilog.
TimePeriodLibrary.NET | Really great for handling time periods in all sorts of ways. What would I do without this...
Unquote | Tool to simplify test statements in NUnit. Probably works with other unit test libraries also.
ZXing.Net | For creation of barcodes.
