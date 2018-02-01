using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace StrawHats.Controllers {

    [Route("api/[controller]")]
    public class StrawHatsUploadsController : Controller {
        
        [HttpPost]
        public IActionResult Create(IFormFile file){
            return new NoContentResult();            
        }
    }
}