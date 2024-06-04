using System;
using System.Collections.Generic;

namespace WebApplicationD.Models
{
    public partial class User
    {
        public User()
        {
            Drivers = new HashSet<Driver>();
            Passengers = new HashSet<Passenger>();
            staff = new HashSet<staff>();
        }

        public int UserId { get; set; }
        public string Login { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string RoleInTheSystem { get; set; } = null!;
        public bool? ConfirmedEntry { get; set; }
        public bool? ActiveUserAccount { get; set; }

        public virtual ICollection<Driver> Drivers { get; set; }
        public virtual ICollection<Passenger> Passengers { get; set; }
        public virtual ICollection<staff> staff { get; set; }
    }
}
