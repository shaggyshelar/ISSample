using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ISSample.Web.Startup))]
namespace ISSample.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
