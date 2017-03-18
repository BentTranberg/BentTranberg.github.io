hmLoadTopic({
hmKeywords:"",
hmTitle:"Create F# WPF Code Behind Application",
hmPrevLink:"fsharp-wpf-code-behind-application.html",
hmNextLink:"add-a-user-control.html",
hmParentLink:"fsharp-wpf-code-behind-application.html",
hmBreadCrumbs:"<a href=\"fsharp-wpf-code-behind-application.html\">F# WPF Code Behind Application<\/a>",
hmTitlePath:"F# WPF Code Behind Application > Create F# WPF Code Behind Application",
hmHeader:"<h1 class=\"p_Heading1\" style=\"page-break-after: avoid;\"><span class=\"f_Heading1\">Create F# WPF Code Behind Application<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">Create an F# console application.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Change the <span style=\"font-weight: bold;\">Output type<\/span> of the application to <span style=\"font-style: italic;\">Windows Application<\/span>.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Add the <span style=\"font-weight: bold;\">FsXaml<\/span> NuGet package.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Add these four source files.<br \/>\n\r&nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-weight: bold;\">MainWindow.xaml<\/span><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<div style=\"text-align: left; text-indent: 0px; padding: 0px 0px 0px 0px; margin: 0px 0px 0px 0px;\"><table style=\"background-color:#f8f8f8; border:solid thin #c0c0c0; border-spacing:0px;\">\n\r<tr style=\"text-align:left;vertical-align:top;\">\n\r<td style=\"vertical-align:top; padding:0.4375rem; border:none\"><p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">&lt;<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #a31515;\">Window<\/span><\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp; <\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #ff0000;\"> xmlns<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">=&quot;http:\/\/schemas.microsoft.com\/winfx\/2006\/xaml\/presentation&quot;<\/span><\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp; <\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #ff0000;\"> xmlns<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">:<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #ff0000;\">x<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">=&quot;http:\/\/schemas.microsoft.com\/winfx\/2006\/xaml&quot;<\/span><\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp; <\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #ff0000;\"> Title<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">=&quot;First Demo&quot;<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #ff0000;\"> Height<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">=&quot;200&quot;<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #ff0000;\"> Width<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">=&quot;300&quot;&gt;<\/span><\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp;  <\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">&lt;<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #a31515;\">Canvas<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">&gt;<\/span><\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp; &nbsp; &nbsp;  <\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">&lt;<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #a31515;\">Button<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #ff0000;\"> Name<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">=&quot;btnTest&quot;<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #ff0000;\"> Content<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">=&quot;Test&quot;<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #ff0000;\"> Canvas.Left<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">=&quot;10&quot;<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #ff0000;\"> Canvas.Top<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">=&quot;10&quot;<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #ff0000;\"> Height<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">=&quot;28&quot;<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #ff0000;\"> Width<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">=&quot;72&quot;\/&gt;<\/span><\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp;  <\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">&lt;\/<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #a31515;\">Canvas<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">&gt;<\/span><\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">&lt;\/<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #a31515;\">Window<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">&gt;<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-weight: bold;\">MainWindow.fs<\/span><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<div style=\"text-align: left; text-indent: 0px; padding: 0px 0px 0px 0px; margin: 0px 0px 0px 0px;\"><table style=\"background-color:#f8f8f8; border:solid thin #c0c0c0; border-spacing:0px;\">\n\r<tr style=\"text-align:left;vertical-align:top;\">\n\r<td style=\"vertical-align:top; padding:0.4375rem; border:none\"><p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">namespace<\/span><span style=\"font-size: 0.82rem; font-family: Consolas;\"> First<\/span><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">type<\/span><span style=\"font-size: 0.82rem; font-family: Consolas;\"> MainWindowXaml = FsXaml.XAML&lt;<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #a31515;\">&quot;MainWindow.xaml&quot;<\/span><span style=\"font-size: 0.82rem; font-family: Consolas;\">&gt;<\/span><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">type<\/span><span style=\"font-size: 0.82rem; font-family: Consolas;\"> MainWindow() <\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">as<\/span><span style=\"font-size: 0.82rem; font-family: Consolas;\"> this =<\/span><\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp;  <\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">inherit<\/span><span style=\"font-size: 0.82rem; font-family: Consolas;\"> MainWindowXaml()<\/span><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp;  <\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">let<\/span><span style=\"font-size: 0.82rem; font-family: Consolas;\"> whenLoaded _ =<\/span><\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp; &nbsp; &nbsp; &nbsp;()<\/span><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp;  <\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">let<\/span><span style=\"font-size: 0.82rem; font-family: Consolas;\"> whenClosing _ =<\/span><\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp; &nbsp; &nbsp; &nbsp;()<\/span><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp;  <\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">let<\/span><span style=\"font-size: 0.82rem; font-family: Consolas;\"> whenClosed _ =<\/span><\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp; &nbsp; &nbsp; &nbsp;()<\/span><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp;  <\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">let<\/span><span style=\"font-size: 0.82rem; font-family: Consolas;\"> btnTestClick _ =<\/span><\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp; &nbsp; &nbsp; &nbsp;this.Title <\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">&lt;-<\/span><span style=\"font-size: 0.82rem; font-family: Consolas;\"> <\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #a31515;\">&quot;Yup, it works!&quot;<\/span><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp;  <\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">do<\/span><\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp; &nbsp; &nbsp; &nbsp;this.Loaded.Add whenLoaded<\/span><\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp; &nbsp; &nbsp; &nbsp;this.Closing.Add whenClosing<\/span><\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp; &nbsp; &nbsp; &nbsp;this.Closed.Add whenClosed<\/span><\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp; &nbsp; &nbsp; &nbsp;this.btnTest.Click.Add btnTestClick<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-weight: bold;\">App.xaml<\/span><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<div style=\"text-align: left; text-indent: 0px; padding: 0px 0px 0px 0px; margin: 0px 0px 0px 0px;\"><table style=\"background-color:#f8f8f8; border:solid thin #c0c0c0; border-spacing:0px;\">\n\r<tr style=\"text-align:left;vertical-align:top;\">\n\r<td style=\"vertical-align:top; padding:0.4375rem; border:none\"><p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">&lt;<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #a31515;\">Application<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #ff0000;\"> xmlns<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">=&quot;http:\/\/schemas.microsoft.com\/winfx\/2006\/xaml\/presentation&quot;<\/span><\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #ff0000;\"> xmlns<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">:<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #ff0000;\">x<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">=&quot;http:\/\/schemas.microsoft.com\/winfx\/2006\/xaml&quot;&gt;<\/span><\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp;  <\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">&lt;<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #a31515;\">Application.Resources<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">&gt;<\/span><\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp;  <\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">&lt;\/<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #a31515;\">Application.Resources<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">&gt;<\/span><\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">&lt;\/<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #a31515;\">Application<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">&gt;<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-weight: bold;\">App.fs<\/span><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<div style=\"text-align: left; text-indent: 0px; padding: 0px 0px 0px 0px; margin: 0px 0px 0px 0px;\"><table style=\"background-color:#f8f8f8; border:solid thin #c0c0c0; border-spacing:0px;\">\n\r<tr style=\"text-align:left;vertical-align:top;\">\n\r<td style=\"vertical-align:top; padding:0.4375rem; border:none\"><p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">namespace<\/span><span style=\"font-size: 0.82rem; font-family: Consolas;\"> First<\/span><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">open<\/span><span style=\"font-size: 0.82rem; font-family: Consolas;\"> System<\/span><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">type<\/span><span style=\"font-size: 0.82rem; font-family: Consolas;\"> App = FsXaml.XAML&lt;<\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #a31515;\">&quot;App.xaml&quot;<\/span><span style=\"font-size: 0.82rem; font-family: Consolas;\">&gt;<\/span><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">module<\/span><span style=\"font-size: 0.82rem; font-family: Consolas;\"> Main =<\/span><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp; &nbsp;[&lt;STAThread; EntryPoint&gt;]<\/span><\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp;  <\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">let<\/span><span style=\"font-size: 0.82rem; font-family: Consolas;\"> main _ =<\/span><\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp; &nbsp; &nbsp;  <\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">let<\/span><span style=\"font-size: 0.82rem; font-family: Consolas;\"> app = App()<\/span><\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp; &nbsp; &nbsp;  <\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">let<\/span><span style=\"font-size: 0.82rem; font-family: Consolas;\"> mainWindow = <\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #0000ff;\">new<\/span><span style=\"font-size: 0.82rem; font-family: Consolas;\"> MainWindow()<\/span><\/p>\n\r<p class=\"p_Normal\"><span style=\"font-size: 0.82rem; font-family: Consolas;\"> &nbsp; &nbsp; &nbsp; &nbsp;app.Run(mainWindow) <\/span><span style=\"font-size: 0.82rem; font-family: Consolas; color: #008000;\">\/\/ Returns application\'s exit code.<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Delete the <span style=\"font-weight: bold;\">Program.fs<\/span> file from the project.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Change the <span style=\"font-weight: bold;\">Build Action<\/span> to <span style=\"font-style: italic;\">Resource<\/span> for the two xaml files.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Add a reference to the .NET assembly <span style=\"font-weight: bold;\">UIAutomationTypes<\/span>. The compiler will give an error message until this is done.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Arrange the files so that App.fs is the last of the F# source files. The order shown here is tidy.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\"><img alt=\"orderFirst\" style=\"margin:0;width:10.5000rem;height:11.7500rem;border:none\" src=\".\/images\/orderfirst.png\"\/><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Compile and run.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">You can\'t use the designer to add event handlers, but that\'s not a problem at all. Simply add them manually in the code behind, like you see with the three handlers in this example, including the handler for the test button.<\/p>\n\r"
})
