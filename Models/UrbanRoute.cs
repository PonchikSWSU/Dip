using System;
using System.Collections.Generic;

namespace WebApplicationD.Models
{
    public partial class UrbanRoute
    {
        public UrbanRoute()
        {
            Flights = new HashSet<Flight>();
            RouteStops = new HashSet<RouteStop>();
        }

        public int RouteId { get; set; }
        public int RouteNumber { get; set; }
        public string? RouteIndex { get; set; }
        public string RouteName { get; set; } = null!;
        public TimeSpan TimeToGetOnTheLine { get; set; }
        public TimeSpan TimeOfDepartureFromTheLine { get; set; }
        public int MovementInterval { get; set; }

        public virtual ICollection<Flight> Flights { get; set; }
        public virtual ICollection<RouteStop> RouteStops { get; set; }
    }
}
