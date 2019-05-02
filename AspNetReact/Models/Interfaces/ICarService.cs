using AspNetReact.Models.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetReact.Models.Interfaces
{
    public interface ICarService
    {
        Car CreateCar(string name, string brand, int year);

        List<Car> Allcars();

        Car FindCar(int id);

        bool UpdateCar(Car car);

        bool DeleteCar(int id);
    }
}
