using Microsoft.AspNetCore.Mvc;
using System.Text;

namespace server.Controllers;


[ApiController]
[Route("[controller]")]
public class HomeController : ControllerBase
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }


    [HttpGet]
    public string Get()
    {
        //string s = Encoding.ASCII.GetString(new byte[] { 49, 50 , 51} );
        //return s;
        
        return "server: ok";
    }
}
