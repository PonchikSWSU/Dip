using System;
using System.Collections.Generic;

namespace WebApplicationD.Models
{
    public partial class CategoriesOfDriverSLicense
    {
        public int EntityId { get; set; }
        public int DriverId { get; set; }
        public string Category { get; set; } = null!;
        public DateTime DateOfIssue { get; set; }
        public DateTime EndDate { get; set; }

        public virtual Driver Driver { get; set; } = null!;
    }
}
