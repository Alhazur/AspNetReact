using AspNetReact.Models.Classes;
using AspNetReact.Models.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace AspNetReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : Controller
    {
        private readonly ICarService _car;

        public CarController(ICarService car)
        {
            _car = car;
        }

        [HttpGet]
        public IEnumerable<Car> Get()
        {
            var cars = _car.Allcars();

            return cars;
        }
        

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


        [HttpPut("{id}")]
        public JsonResult Edit(Car car)
        {
            if (ModelState.IsValid)
            {
                _car.UpdateCar(car);
                return Json("Index");
            }
            return Json(car);
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int? id)
        {
            if (id != null)
            {
                _car.DeleteCar((int)id);
                return Json("Index");
            }
            return Json("");
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