# F# development

I have almost always worked in small teams that didn't at all have a proper development setup until I came along, so that it fell upon me to get things in order. That has given me a lot of experience. These days I work solo, and I get to choose everything about my development myself.

I am a reasonably smart developer, but not too smart, so one of my secrets is to use tools and libraries that are _simple and effective_, so I can get my job done in spite of being lazy and not too smart. I can't stand it when some puffed up manager insists that we use Team Foundation because it's from Microsoft. Then I'll leave. I am always on the lookout for more effective tools, and switch as soon as it pays off. That's also why I use F#, and not C#.

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
