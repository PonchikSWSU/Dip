using System;
using System.Collections.Generic;

namespace WebApplicationD.Models
{
    public partial class Passenger
    {
        public Passenger()
        {
            Ratings = new HashSet<Rating>();
        }

        public int PassengerId { get; set; }
        public string FullName { get; set; } = null!;
        public DateTime DateOfBirth { get; set; }
        public string PhoneNumber { get; set; } = null!;
        public string EmailAddress { get; set; } = null!;
        public int UserId { get; set; }

        public virtual User User { get; set; } = null!;
        public virtual ICollection<Rating> Ratings { get; set; }
    }
}
