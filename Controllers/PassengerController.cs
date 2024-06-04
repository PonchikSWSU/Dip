using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplicationD.DBContext;
using WebApplicationD.Dto;
using WebApplicationD.Models;

namespace WebApplicationD.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PassengerController : ControllerBase
    {
        private readonly Quality_and_Transport_testContext _dbContext;
        private readonly IMapper _mapper;

        public PassengerController(Quality_and_Transport_testContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        [HttpGet]
        [Route(":id")]
        public ActionResult<Passenger> GetPassenger(int id)
        {
            var passenger = _dbContext.Passengers.SingleOrDefault(x => x.UserId == id);

            if (passenger == null)
                return NotFound();

            var passengerDto = _mapper.Map<PassengerDto>(passenger);

            return Ok(passengerDto);
        }

        [HttpPut]
        [Route(":id")]
        public ActionResult<Passenger> UpdatePassenger(int id, PassengerDto passengerDto)
        {
            var passenger = _mapper.Map<Passenger>(passengerDto);

            var passengerUp = _dbContext.Passengers.SingleOrDefault(x => x.UserId == id);

            if (passengerUp == null)
                return NotFound();

            passengerUp = passenger;
            _dbContext.SaveChanges();

            return Ok();
        }

    }
}
