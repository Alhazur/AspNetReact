using AspNetReact.Models.Classes;
using AspNetReact.Models.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace AspNetReact.Controllers
{
    [Route("api/[controller]")]
    public class CarController : Controller
    {
        private readonly ICarService _car;

        public CarController(ICarService car)
        {
            _car = car;
        }

        public IActionResult Index()
        {
            return View(_car.Allcars());
        }
        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        //[HttpPost]
        //public IActionResult Create(Car car)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        car = _car.CreateCar(car.Name, car.Brand, car.Year);
        //        return RedirectToAction("Index");
        //    }
        //    return View(car);
        //}

        [HttpPost]
        public JsonResult Create(Car car)
        {
            if (ModelState.IsValid)
            {
                car = _car.CreateCar(car.Name, car.Brand, car.Year);
                return Json(car);
            }
            return Json("");
        }

        [HttpGet]
        public IActionResult Edit(int? id)
        {
            var car = _car.FindCar((int)id);
            
            return View(car);
        }

        [HttpPost]
        public IActionResult Edit(Car car)
        {
            if (ModelState.IsValid)
            {
                _car.UpdateCar(car);
                return RedirectToAction("Index");
            }
            return View(car);
        }

        public IActionResult Delete(int? id)
        {
            if (id != null)
            {
                _car.DeleteCar((int)id);
                return RedirectToAction("Index");
            }
            return Content("");
        }

        public IActionResult Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var car = _car.FindCar((int)id);

            if (car == null)
            {
                return NotFound();
            }
            return View(car);
        }
    }
}