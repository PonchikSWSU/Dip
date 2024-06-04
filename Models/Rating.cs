using System;
using System.Collections.Generic;

namespace WebApplicationD.Models
{
    public partial class Rating
    {
        public int RatingId { get; set; }
        public int PassengerId { get; set; }
        public int DriverId { get; set; }
        public int ResponsibleEmployee { get; set; }
        public decimal PassengerRating { get; set; }
        public string PassengerFeedback { get; set; } = null!;
        public string? CommentOnTheRating { get; set; }
        public string? PhotoMaterials { get; set; }
        public string? VideoMaterials { get; set; }
        public DateTime DateOfTheIncident { get; set; }
        public DateTime DateOfDispatch { get; set; }
        public bool? PublishedEntry { get; set; }
        public DateTime? DateOfPublication { get; set; }

        public virtual Driver Driver { get; set; } = null!;
        public virtual Passenger Passenger { get; set; } = null!;
        public virtual staff ResponsibleEmployeeNavigation { get; set; } = null!;
    }
}
