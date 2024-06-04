using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using WebApplicationD.DBContext;
using WebApplicationD.Dto;
using WebApplicationD.Models;

namespace WebApplicationD.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DriverController : ControllerBase
    {
        private readonly Quality_and_Transport_testContext _dbContext;
        private readonly IMapper _mapper;

        public DriverController(Quality_and_Transport_testContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        [HttpGet]
        [Route(":id")]
        public ActionResult<Driver> GetDriver(int id)
        {
            var driver = _dbContext.Drivers.SingleOrDefault(x => x.UserId == id);

            if (driver == null)
                return NotFound();

            var driverDto = _mapper.Map<DriverDto>(driver);

            return Ok(driverDto);
        }

        [HttpPut]
        [Route(":id")]
        public ActionResult<Driver> UpdateDriver(int id, DriverDto driverDto)
        {
            var driver = _mapper.Map<Driver>(driverDto);

            var driverUp = _dbContext.Drivers.SingleOrDefault(x => x.UserId == id);

            if (driverUp == null)
                return NotFound();

            driverUp = driver;
            _dbContext.SaveChanges();

            return Ok();
        }


    }
}
