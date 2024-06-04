using System;
using System.Collections.Generic;

namespace WebApplicationD.Models
{
    public partial class staff
    {
        public staff()
        {
            EmployeeStatuses = new HashSet<EmployeeStatus>();
            Ratings = new HashSet<Rating>();
        }

        public int EmployeeId { get; set; }
        public string FullName { get; set; } = null!;
        public string EmployeePosition { get; set; } = null!;
        public string PlaceOfWork { get; set; } = null!;
        public string PhoneNumber { get; set; } = null!;
        public string EmailAddress { get; set; } = null!;
        public int UserId { get; set; }

        public virtual User User { get; set; } = null!;
        public virtual ICollection<EmployeeStatus> EmployeeStatuses { get; set; }
        public virtual ICollection<Rating> Ratings { get; set; }
    }
}
