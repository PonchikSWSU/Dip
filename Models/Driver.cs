using System;
using System.Collections.Generic;

namespace WebApplicationD.Models
{
    public partial class Driver
    {
        public Driver()
        {
            CategoriesOfDriverSLicenses = new HashSet<CategoriesOfDriverSLicense>();
            DriverStatuses = new HashSet<DriverStatus>();
            Flights = new HashSet<Flight>();
            Ratings = new HashSet<Rating>();
        }

        public int DriverId { get; set; }
        public string FullName { get; set; } = null!;
        public string Photo { get; set; } = null!;
        public string LicenseSeries { get; set; } = null!;
        public string LicenseNumber { get; set; } = null!;
        public DateTime DateOfIssueOfTheFirstDriverSLicense { get; set; }
        public string PhoneNumber { get; set; } = null!;
        public string EmailAddress { get; set; } = null!;
        public int UserId { get; set; }

        public virtual User User { get; set; } = null!;
        public virtual ICollection<CategoriesOfDriverSLicense> CategoriesOfDriverSLicenses { get; set; }
        public virtual ICollection<DriverStatus> DriverStatuses { get; set; }
        public virtual ICollection<Flight> Flights { get; set; }
        public virtual ICollection<Rating> Ratings { get; set; }
    }
}
