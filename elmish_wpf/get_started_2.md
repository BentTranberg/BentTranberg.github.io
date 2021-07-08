# How to create an Elmish.WPF application - part 2

Part 1 explained how to build an Elmish.WPF application from scratch. That application's functionality was snipped from the SingleCounter example from the Elmish.WPF repository on GitHub.

In order to proceed with development, there are a few things that should be improved.

* Change name of executable
* Add application icon (not yet written)
* Separate startup code and code for main window.
* Use mkProgram instead of mkSimple
* Log to other destination (not yet written)

## Change name of executable

The executable produced from the Elmer.Views project is named Elmer.Views.exe. What we want is to name it Elmer.exe, plain and simple. The fix is very simple. Right click on Elmer.Views in Solution Explorer. Change the assembly name from Elmer.Views to just Elmer. On the next compilation, the executable and certain other files will have changed names accordingly.

Why didn't we name this project just Elmer from the start? Because it's nice to not use the top namespace Elmer for any entity at all, but rather only use the two subspaces Elmer.Views and Elmer.Models. However, if you want to use just Elmer instead of Elmer.Views next time you run through these lessons, that should not be a problem.

## Add application icon

This is easy to do, but I need to find a nice free ico-file I can use for the example, before I can demonstrate this in source.

## Separate startup code and code for main window

Add file MainWindow.fs above Program.fs (Right click on Program.fs and select Add Above/Add New Item... from the popup menu. Select F# Source File, and name it MainWindow.fs)

Copy the content of Program.fs into MainWindow.fs, and then edit the content of each file so that they look like this. The complete content of MainWindow.fs is not shown, but the changes needed are only in these few lines at the top, and also remove the bottom part that is now supposed to be left behind in Program.fs

###### MainWindow.fs

```fsharp
module Elmer.Models.MainWindow

open Elmish.WPF

type Model =

( ... complete content not shown ... )

let designVm = ViewModel.designInstance init (bindings ())
```

###### Program.fs

```fsharp
module Elmer.Models.Program

open Serilog
open Serilog.Extensions.Logging
open Elmish.WPF

let main window =

    let logger =
        LoggerConfiguration()
            .MinimumLevel.Override("Elmish.WPF.Update", Events.LogEventLevel.Verbose)
            .MinimumLevel.Override("Elmish.WPF.Bindings", Events.LogEventLevel.Verbose)
            .MinimumLevel.Override("Elmish.WPF.Performance", Events.LogEventLevel.Verbose)
            .WriteTo.Console()
            .CreateLogger()
    
    WpfProgram.mkSimple (fun () -> MainWindow.init) MainWindow.update MainWindow.bindings
    |> WpfProgram.withLogger (new SerilogLoggerFactory(logger))
    |> WpfProgram.startElmishLoop window
```

One line in MainWindow.xaml must be modified.

```
d:DataContext="{x:Static vm:MainWindow.designVm}">
```

That's it.

## Use mkProgram instead of mkSimple

In order to gain access to certain functionality of Elmish.WPF from MainWindow.fs, it is necessary to change from mkSimple to mkProgram. These are the changes that are needed.

In Program.fs, the line with mkSimple will look like this instead.

```
WpfProgram.mkProgram MainWindow.init MainWindow.update MainWindow.bindings
```

and the complete MainWindow.fs will look like this.

###### MainWindow.fs

```fsharp
module Elmer.Models.MainWindow

open Elmish
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

let init () : Model * Cmd<Msg> =
    {
        Count = 0
        StepSize = 1
    }, Cmd.none

let update (msg: Msg) (m: Model) : Model * Cmd<Msg> =
    match msg with
    | Increment -> { m with Count = m.Count + m.StepSize }, Cmd.none
    | Decrement -> { m with Count = m.Count - m.StepSize }, Cmd.none
    | SetStepSize x -> { m with StepSize = x }, Cmd.none
    | Reset -> init ()

let canReset = (<>) (fst (init ()))

let bindings () : Binding<Model, Msg> list = [
    "CounterValue" |> Binding.oneWay (fun m -> m.Count)
    "Increment" |> Binding.cmd Increment
    "Decrement" |> Binding.cmd Decrement
    "StepSize" |> Binding.twoWay((fun m -> float m.StepSize), int >> SetStepSize)
    "Reset" |> Binding.cmdIf(Reset, canReset)
    ]

let designVm = ViewModel.designInstance (fst (init ())) (bindings ())
```

The explicit use of types in init and update is not needed, but I have found it effective in order to get better compiler messages in the long run. Type inference can actually be counterproductive if used as much as possible. It pays to nail down types in strategic places, so that the compiler won't tell you there's a problem on the other side of town when you type something wrong and the problem is here.

So why this change? So far only Cmd.none is used in init and update. We'll want to use Cmd.ofMsg, Cmd.ofSub, Cmd.OfAsync.either, and more. What these do is that they kick the state machine to the next step in various ways. More about that in later articles. You can also study the FileDialogs sample in the Elmish.WPF repository.

