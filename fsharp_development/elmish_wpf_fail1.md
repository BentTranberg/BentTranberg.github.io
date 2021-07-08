# Elmish.WPF

This material is based on Visual Studio 2019 version 16.10.3, .NET 5, and Elmish.WPF 4.0.0-beta-41, which is a preview version. The latest version 3.* will also probably work.

# How to create a new project

For this demonstration a new solution will be created, but the two projects involved can just as well be added to an existing solution.

In Visual Studio's menu, use File / New / Project ... to create a new solution with a new project. The first project in the solution will be a WPF Application. The names of the solution and the first project will both be Elmer. (It's gotta be something!) The target framework will be .NET 5.0

In Visual Studio's menu, use File / Add / New Project ... to add another project to the solution. The second project will be an F# class library. The name will be Elmer.Core. The target framework will be .NET 5.0

In Solution Explorer, right click on Dependencies, select Add Project Reference ... from the popup menu, check Elmer.Core from the list (which has one item only), and click OK.

Rename Library.fs to Program.fs

Google "Elmish.WPF" or go directly to https://github.com/elmish/Elmish.WPF

Click on the folder named "src". Click on the folder named "Samples". The simplest demo of them all will be used to build a working sample template for our Elmer. The demo consists of the two folders SingleCounter.Core and SingleCounter.

First click on folder SingleCounter.Core, and then click on Program.fs, select all the text in that file, and then paste it into Program.fs back in Visual Studio.

Change the top line to

```fsharp
module Elmer.Core.Program
```

There are quite a few errors in the source now.

In the Solution Explorer, click on Elmer.Core. In the project file, change the TargetFramework to this.

```
<TargetFramework>net5.0-windows</TargetFramework>
```

In the Solution Explorer, right click on Solution Elmer, and select Manage NuGet Packages for Solution ..., then click on Browse in the package manager that opens. Type Elmish.WPF. Now make sure Include prerelease is checked, so that the version listed is 4.0.0-beta-41

Select Elmish.WPF from the list. Check Elmer.Core in the list of projects. Click on Install.

Remove the check for Include prerelease.

In the package name field, replace "Elmish.WPF" with "Serilog". Select and install, one by one, the three packages Serilog, Serilog.Extensions.Logging, and Serilog.Sinks.Console.

Remove these two lines from the Elmer.Core project file.

    <GenerateDocumentationFile>true</GenerateDocumentationFile>
    <WarnOn>3390;$(WarnOn)</WarnOn>

Insert these two lines

    <WarningLevel>4</WarningLevel>
    <TreatWarningsAsErrors>true</TreatWarningsAsErrors>

so that the Elmer.Core.fsproj file now looks like this.

```
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>net5.0-windows</TargetFramework>
    <WarningLevel>4</WarningLevel>
    <TreatWarningsAsErrors>true</TreatWarningsAsErrors>
  </PropertyGroup>

  <ItemGroup>
    <Compile Include="Program.fs" />
  </ItemGroup>

  <ItemGroup>
    <PackageReference Include="Elmish.WPF" Version="4.0.0-beta-41" />
    <PackageReference Include="Serilog" Version="2.10.0" />
    <PackageReference Include="Serilog.Extensions.Logging" Version="3.0.1" />
    <PackageReference Include="Serilog.Sinks.Console" Version="3.1.1" />
  </ItemGroup>

</Project>
```

After some tidying up of indents, Program.fs looks like this

```fsharp
module Elmer.Core.Program

open Serilog
open Serilog.Extensions.Logging
open Elmish.WPF

type Model =
    {
        Count: int
        StepSize: int
    }

type Msg =
    | Increment
    | Decrement
    | SetStepSize of int
    | Reset

let init =
    {
        Count = 0
        StepSize = 1
    }

let canReset = (<>) init

let update msg m =
    match msg with
    | Increment -> { m with Count = m.Count + m.StepSize }
    | Decrement -> { m with Count = m.Count - m.StepSize }
    | SetStepSize x -> { m with StepSize = x }
    | Reset -> init

let bindings () : Binding<Model, Msg> list = [
    "CounterValue" |> Binding.oneWay (fun m -> m.Count)
    "Increment" |> Binding.cmd Increment
    "Decrement" |> Binding.cmd Decrement
    "StepSize" |> Binding.twoWay((fun m -> float m.StepSize), int >> SetStepSize)
    "Reset" |> Binding.cmdIf(Reset, canReset)
    ]

let designVm = ViewModel.designInstance init (bindings ())

let main window =

	let logger =
        LoggerConfiguration()
            .MinimumLevel.Override("Elmish.WPF.Update", Events.LogEventLevel.Verbose)
            .MinimumLevel.Override("Elmish.WPF.Bindings", Events.LogEventLevel.Verbose)
            .MinimumLevel.Override("Elmish.WPF.Performance", Events.LogEventLevel.Verbose)
            .WriteTo.Console()
            .CreateLogger()

    WpfProgram.mkSimple (fun () -> init) update bindings
    |> WpfProgram.withLogger (new SerilogLoggerFactory(logger))
    |> WpfProgram.startElmishLoop window
```

If there is a problem because project Elmer can't find FSharp.Core, then add FSharp.Core from NuGet to project Elmer. Use the same version of FSharp.Core that project Elmer.Core uses.

Modify App.xaml.cs so that it looks like this

```csharp
using System;
using System.Windows;

namespace Elmer
{
    public partial class App : Application
    {
        public App()
        {
            this.Activated += StartElmish;
        }

        private void StartElmish(object sender, EventArgs e)
        {
            this.Activated -= StartElmish;
            Elmer.Core.Program.main(MainWindow);
        }
    }
}
```

Modify MainWindow.xaml so that it looks like this.

