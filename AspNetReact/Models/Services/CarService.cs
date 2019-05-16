using AspNetReact.DataBase;
using AspNetReact.Models.Classes;
using AspNetReact.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace AspNetReact.Models.Services
{
    public class CarService : ICarService
    {
        readonly CarDbContext _carDbcontext;

        public CarService(CarDbContext carDbContext)
        {
            _carDbcontext = carDbContext;
        }

        public List<Car> Allcars()
        {
            return _carDbcontext.Cars.ToList();
        }

        public Car CreateCar(string name, BrandOfCars brand, int year)
        {
            Car car = new Car() { Name = name, Brand = brand, Year = year };

            _carDbcontext.Cars.Add(car);
            _carDbcontext.SaveChanges();
            return car;
        }

        public bool DeleteCar(int id)
        {
            bool stay = false;

            Car car = _carDbcontext.Cars.SingleOrDefault(c => c.Id == id);

            if (car == null)
            {
                return stay;
            }

            _carDbcontext.Cars.Remove(car);
            _carDbcontext.SaveChanges();
            return stay;
        }

        public Car FindCar(int id)
        {
            return _carDbcontext.Cars.SingleOrDefault(c => c.Id == id);
        }

        public bool UpdateCar(Car car)
        {
            bool stay = false;

            Car original = _carDbcontext.Cars.SingleOrDefault(u => u.Id == car.Id);

            if (original != null)
            {
                original.Name = car.Name;
                original.Brand = car.Brand;
                original.Year = car.Year;

                _carDbcontext.SaveChanges();
                stay = true;
            }

            return stay;
        }
    }
}
