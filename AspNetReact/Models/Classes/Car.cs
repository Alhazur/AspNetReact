using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetReact.Models.Classes
{
    public class Car
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public BrandOfCars Brand { get; set; }
        [Required]
        public int Year { get; set; }

    }

    [JsonConverter(typeof(StringEnumConverter))]
    public enum BrandOfCars
    {
        Mercedes,
        Audi,
        Bmw,
        Pagani,
        Porsche,
        Lamborghini
    }
}
