using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AspNetReact.Models.Classes;
using AspNetReact.Models.Interfaces;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace AspNetReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandController : Controller
    {
        
        public IActionResult Index()
        {
            return View();
        }
        
        [HttpGet]
        public JsonResult GetBrands()
        {
            return Json(Enum.GetNames(typeof(BrandOfCars)));
        }
    }
}