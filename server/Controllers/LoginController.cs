using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using server.Dto;

namespace server.Controllers;


[EnableCors("IonicCors")]
[ApiController]
[Route("[controller]/[action]")]
public class LoginController : ControllerBase
{
    private readonly ILogger<LoginController> _logger;

    public LoginController(ILogger<LoginController> logger)
    {
        _logger = logger;
    }


    [HttpPost]
    public async Task<JsonResult> Auth([FromBody] AuthDto authDto)
    {
        return new JsonResult(new { ok = Utils.IsAuth(authDto.name, authDto.pass) });
    }
    


}
