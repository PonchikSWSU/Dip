using System;
using System.Collections.Generic;

namespace WebApplicationD.Models
{
    public partial class RouteStop
    {
        public int RouteStopId { get; set; }
        public int RouteId { get; set; }
        public int StopId { get; set; }
        public int StopOrder { get; set; }
        public bool? StartPoint { get; set; }
        public bool? EndPoint { get; set; }

        public virtual UrbanRoute Route { get; set; } = null!;
        public virtual Stop Stop { get; set; } = null!;
    }
}
