using System;
using System.Collections.Generic;

namespace WebApplicationD.Models
{
    public partial class Flight
    {
        public Flight()
        {
            FlightsStatuses = new HashSet<FlightsStatus>();
        }

        public int FlightId { get; set; }
        public int DriverId { get; set; }
        public int RouteId { get; set; }
        public int VehicleId { get; set; }
        public DateTime? ActualTimeToGetOnTheLine { get; set; }
        public DateTime? ActualTimeOfDepartureFromTheLine { get; set; }

        public virtual Driver Driver { get; set; } = null!;
        public virtual UrbanRoute Route { get; set; } = null!;
        public virtual Vehicle Vehicle { get; set; } = null!;
        public virtual ICollection<FlightsStatus> FlightsStatuses { get; set; }
    }
}
