# Elmish.WPF

## How to get started with a new Elmish.WPF application

This material is based on Visual Studio 2019 version 16.10.3, .NET 5, and Elmish.WPF 4.0.0-beta-41, which is a preview version. The latest version 3.* will also probably work.

The name for the demo will be Elmer. (Hey, it has to be named something!)

A new solution Elmer will be created, with the two projects needed for an Elmish.WPF application. The target platform for the projects will be .NET 5. It is also of course possible to add the two projects to an existing solution.

Create a new solution named Elmer, with a C# WPF application named Elmer.

Add a second project to the solution. This will be an F# class library project named Elmer.Core.

Let project Elmer reference project Elmer.Core.

Rename Library.fs to Program.fs

From NuGet, library Elmer.Core will reference Elmish.WPF 4.0.0-beta-41 (the latest prerelease version), Serilog, Serilog.Extensions.Logging and Serilog.Sinks.Console.

A couple of lines will be removed from Elmer.Core.fsproj, and a couple of lines will be added. The file will now look like this.

###### Elmer.Core.fsproj

```
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>net5.0-windows</TargetFramework>
    <TreatWarningsAsErrors>true</TreatWarningsAsErrors>
    <WarningLevel>4</WarningLevel>
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

The demo SingleCounter from Elmish.WPF will be used as a starting point.