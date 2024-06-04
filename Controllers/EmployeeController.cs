using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using WebApplicationD.DBContext;
using WebApplicationD.Dto;
using WebApplicationD.Models;

namespace WebApplicationD.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly Quality_and_Transport_testContext _dbContext;
        private readonly IMapper _mapper;

        public EmployeeController(Quality_and_Transport_testContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        [HttpGet]
        [Route(":id")]
        public ActionResult<staff> GetEmployee(int id)
        {
            var employee = _dbContext.staff.SingleOrDefault(x => x.UserId == id);

            if (employee == null)
                return NotFound();

            var employeeDto = _mapper.Map<EmployeeDto>(employee);

            return Ok(employeeDto);
        }

        [HttpPut]
        [Route(":id")]
        public ActionResult<staff> UpdateEmployee(int id, EmployeeDto employeeDto)
        {
            var employee = _mapper.Map<staff>(employeeDto);

            var employeeUp = _dbContext.staff.SingleOrDefault(x => x.UserId == id);

            if (employeeUp == null)
                return NotFound();

            employeeUp = employee;
            _dbContext.SaveChanges();

            return Ok();
        }
    }
}
