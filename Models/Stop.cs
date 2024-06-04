using System;
using System.Collections.Generic;

namespace WebApplicationD.Models
{
    public partial class Stop
    {
        public Stop()
        {
            RouteStops = new HashSet<RouteStop>();
        }

        public int StopId { get; set; }
        public string StopName { get; set; } = null!;
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public string? StopAddress { get; set; }
        public string? Note { get; set; }

        public virtual ICollection<RouteStop> RouteStops { get; set; }
    }
}
