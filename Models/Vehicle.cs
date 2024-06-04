using System;
using System.Collections.Generic;

namespace WebApplicationD.Models
{
    public partial class Vehicle
    {
        public Vehicle()
        {
            Flights = new HashSet<Flight>();
        }

        public int VehicleId { get; set; }
        public string Brand { get; set; } = null!;
        public string Model { get; set; } = null!;
        public DateTime YearOfManufacture { get; set; }
        public string StateNumber { get; set; } = null!;
        public string OnBoardNumber { get; set; } = null!;
        public decimal? Cost { get; set; }
        public int EnginePower { get; set; }
        public string PurposeOfTheVehicle { get; set; } = null!;
        public string VehicleClass { get; set; } = null!;
        public int PassengerCapacity { get; set; }
        public string Photo { get; set; } = null!;

        public virtual ICollection<Flight> Flights { get; set; }
    }
}
