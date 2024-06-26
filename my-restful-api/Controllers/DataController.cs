using Microsoft.AspNetCore.Mvc;
using RestfulApi.Models;

namespace RestfulApi.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class DataController : ControllerBase
    {
        [HttpPost]
        public IActionResult Post([FromBody] DataModel data)
        {
            if (data == null || string.IsNullOrEmpty(data.InputData))
            {
                return BadRequest(new { message = "Invalid input data." });
            }
            return Ok(new { message = $"Received data: {data.InputData}" });
        }
    }
}
