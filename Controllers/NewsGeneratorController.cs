using Microsoft.AspNetCore.Mvc;
using WebApplicationD.DBContext;
using WebApplicationD.Models;

namespace WebApplicationD.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NewsGeneratorController : ControllerBase
    {
        private readonly Quality_and_Transport_testContext _dbContext;

        public NewsGeneratorController(Quality_and_Transport_testContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public ActionResult<List<Rating>> GetAllRatings()
        {
            return Ok(_dbContext.Ratings.ToList());
        }

        [HttpGet]
        [Route(":id")]
        public ActionResult<Rating> GetRating(int id)
        {
            var rating = _dbContext.Ratings.SingleOrDefault(x => x.RatingId == id);

            if (rating == null)
                return NotFound();

            return Ok(rating);
        }

        [HttpGet]
        [Route("noPublished")]
        public ActionResult<List<Rating>> GetAllRatingsNoPublished()
        {
            return Ok(_dbContext.Ratings.Where(x => x.PublishedEntry == false).ToList());
        }

        [HttpPost]
        public ActionResult AddRating(Rating rating)
        {
            _dbContext.Ratings.Add(rating);
            _dbContext.SaveChanges();

            return Ok();
        }

        [HttpPut]
        public ActionResult<Rating> UpdateRating(Rating rating)
        {
            var ratingUp = _dbContext.Ratings.SingleOrDefault(x => x.RatingId == rating.RatingId);

            if (ratingUp == null)
                return NotFound();

            ratingUp = rating;
            _dbContext.SaveChanges();

            return Ok();
        }


        [HttpDelete]
        [Route(":id")]
        public ActionResult<Rating> DeleteRating(int id)
        {
            var rating = _dbContext.Ratings.SingleOrDefault(x => x.RatingId == id);

            if (rating == null)
                return NotFound();

            _dbContext.Ratings.Remove(rating);

            return Ok();
        }
    }
}