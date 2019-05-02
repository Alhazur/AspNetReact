//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using AspNetReact.Models.Classes;
//using AspNetReact.Models.Interfaces;
//using Microsoft.AspNetCore.Mvc;

//namespace AspNetReact.Controllers
//{
//    public class CarController : Controller
//    {
//        private readonly ICarService _carService;

//        public CarController(ICarService carService)
//        {
//            _carService = carService;
//        }

//        public IActionResult Index()
//        {
//            return View();
//        }
//        [HttpGet]
//        public IActionResult Create()
//        {
//            return View();
//        }

//        [HttpPost]
//        public IActionResult Create(Car car)
//        {
//            if (ModelState.IsValid)
//            {
//                car = _carService.CreateCar(car.Name, car.Brand, car.Year);
//                return RedirectToAction("Index");
//            }
//            return View(car);
//        }

//        [HttpGet]
//        public IActionResult Edit(int? id)
//        {
//            if (id == null)
//            {
//                return NotFound;
//            }
//            var car = _carService.FindCar((int)id);

//            if (car == null)
//            {
//                return NotFound;
//            }
//            return View(car);
//        }

//        [HttpPost]
//        public IActionResult Edit(Car car)
//        {
//            if (ModelState.IsValid)
//            {
//                _carService.UpdateCar(car);
//                return RedirectToAction("Index");
//            }
//            return View(car);
//        }

//        public IActionResult Delete(int? id)
//        {
//            if (id != null)
//            {
//                _carService.DeleteCar((int)id);
//                return RedirectToAction("Index");
//            }
//            return Content("");
//        }

//        public IActionResult Details(int? id)
//        {
//            if (id == null)
//            {
//                return NotFound();
//            }

//            var car = _carService.FindCar((int)id);

//            if (car == null)
//            {
//                return NotFound();
//            }
//            return View(car);
//        }
//    }
//}