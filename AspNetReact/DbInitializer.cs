using AspNetReact.DataBase;
using AspNetReact.Models.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetReact
{
    public class DbInitializer
    {
        internal static void Initialize(CarDbContext context)
        {
            context.Database.EnsureCreated();

            if (!context.Cars.Any())
            {
                var cars = new List<Car>();
                {
                    cars.Add(new Car() { Name = "AMG C63", Brand = "Mercedes", Year = 2019 });
                    cars.Add(new Car() { Name = "M5 F90", Brand = "Bmw", Year = 2018 });
                    cars.Add(new Car() { Name = "RS7", Brand = "Audi", Year = 2017 });
                }
                context.Cars.AddRange(cars);

                context.SaveChanges();
            }
        }
    }
}
