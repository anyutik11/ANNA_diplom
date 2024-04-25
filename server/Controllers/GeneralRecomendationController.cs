using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using server.Dto;
using server.Model;

namespace server.Controllers;


[EnableCors("IonicCors")]
[ApiController]
[Route("[controller]/[action]")]
public class GeneralRecomendationController : ControllerBase
{
    private readonly ILogger<GeneralRecomendationController> _logger;

    public GeneralRecomendationController(ILogger<GeneralRecomendationController> logger)
    {
        _logger = logger;
    }


    [HttpPost]
    public async Task<IActionResult> List([FromBody] AuthDto authDto)
    {
        if (!Utils.IsAuth(authDto.name, authDto.pass))
            return BadRequest("Неизвестный пользователь");

        List<BaseRecomendation> res = new()
        {
             new BaseRecomendation { id = "id01", name = "All Первая рекомендация", subTitle = "Растяжка", detail = "Делать зарядку по утрам, каждый день и в выходные" },
             new BaseRecomendation { id = "id02", name = "All Вторая рекомендация", subTitle = "Растяжка", detail = "Делать две зарядки по утрам, каждый день и в выходные" },
             new BaseRecomendation { id = "id03", name = "All Третья рекомендация", subTitle = "Растяжка", detail = "Делать три зарядки по утрам, каждый день и в выходные" },
             new BaseRecomendation { id = "id04", name = "All Четвертая рекомендация", subTitle = "Сила", detail = "Делать четыре зарядки по утрам, каждый день и в выходные" },
             new BaseRecomendation { id = "id05", name = "All Пятая рекомендация", subTitle = "Сила", detail = "Делать пять зарядки по утрам, каждый день и в выходные" },
             new BaseRecomendation { id = "id06", name = "All Шестая рекомендация", subTitle = "Сила", detail = "Делать шесть зарядки по утрам, каждый день и в выходные" },
             new BaseRecomendation { id = "id07", name = "All Седьмая рекомендация", subTitle = "Реакция", detail = "Делать семь зарядки по утрам, каждый день и в выходные" },
             new BaseRecomendation { id = "id08", name = "All Восьмая рекомендация", subTitle = "Реакция", detail = "Делать восемь зарядки по утрам, каждый день и в выходные" },
        };

        return new JsonResult(res);
    }


}
