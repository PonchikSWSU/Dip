using System;
using System.Collections.Generic;

namespace WebApplicationD.Models
{
    public partial class FlightsStatus
    {
        public int StatusId { get; set; }
        public int FlightId { get; set; }
        public string Status { get; set; } = null!;
        public DateTime? StartDatetime { get; set; }
        public DateTime? EndDatetime { get; set; }
        public string? Note { get; set; }

        public virtual Flight Flight { get; set; } = null!;
    }
}
