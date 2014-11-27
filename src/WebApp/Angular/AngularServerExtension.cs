namespace WebApp.Angular
{
    using System;

    using Microsoft.AspNet.Builder;
    using Microsoft.AspNet.FileSystems;
    using Microsoft.AspNet.Http;
    using Microsoft.AspNet.StaticFiles;

    public static class AngularServerExtension
    {
        public static IApplicationBuilder UseAngularServer(this IApplicationBuilder builder, string rootPath, string entryPath)
        {
            var options = new AngularServerOptions()
            {
                FileServerOptions = new FileServerOptions()
                {
                    EnableDirectoryBrowsing = false,
                    // TODO: Fix for Core CLR - AppDomain isn't available.
                    ////            FileSystem = new PhysicalFileSystem(System.IO.Path.Combine(AppDomain.CurrentDomain.BaseDirectory, rootPath))
                },
                EntryPath = new PathString(entryPath)
            };

            builder.UseDefaultFiles(options.FileServerOptions.DefaultFilesOptions);

            return builder.Use(next => new AngularServerMiddleware(next, env, options).Invoke);
        }
    }
}