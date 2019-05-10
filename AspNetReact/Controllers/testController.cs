using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AspNetReact.DataBase;
using AspNetReact.Models.Classes;
using AspNetReact.Models.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AspNetReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {        
        private readonly ICarService _car;

        public TestController(ICarService car)
        {
            _car = car;
        }

        // GET: api/Test
        [HttpGet]
        public List<Car> Get()
        {
            List<Car> Cars = _car.Allcars();

            return new List<Car>(Cars);
        }

        // GET: api/test/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/test
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/test/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
