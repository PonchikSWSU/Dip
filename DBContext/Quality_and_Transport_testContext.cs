using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using WebApplicationD.Models;

namespace WebApplicationD.DBContext
{
    public partial class Quality_and_Transport_testContext : DbContext
    {
        public Quality_and_Transport_testContext()
        {
        }

        public Quality_and_Transport_testContext(DbContextOptions<Quality_and_Transport_testContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CategoriesOfDriverSLicense> CategoriesOfDriverSLicenses { get; set; } = null!;
        public virtual DbSet<Driver> Drivers { get; set; } = null!;
        public virtual DbSet<DriverStatus> DriverStatuses { get; set; } = null!;
        public virtual DbSet<EmployeeStatus> EmployeeStatuses { get; set; } = null!;
        public virtual DbSet<Flight> Flights { get; set; } = null!;
        public virtual DbSet<FlightsStatus> FlightsStatuses { get; set; } = null!;
        public virtual DbSet<Passenger> Passengers { get; set; } = null!;
        public virtual DbSet<Rating> Ratings { get; set; } = null!;
        public virtual DbSet<RouteStop> RouteStops { get; set; } = null!;
        public virtual DbSet<Stop> Stops { get; set; } = null!;
        public virtual DbSet<UrbanRoute> UrbanRoutes { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;
        public virtual DbSet<Vehicle> Vehicles { get; set; } = null!;
        public virtual DbSet<staff> staff { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Name=ConnectionStrings:DefaultConnection");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CategoriesOfDriverSLicense>(entity =>
            {
                entity.HasKey(e => e.EntityId)
                    .HasName("PK__Categori__A4F703B38734F5C7");

                entity.ToTable("Categories of driver's licenses");

                entity.Property(e => e.EntityId).HasColumnName("Entity ID");

                entity.Property(e => e.Category).HasMaxLength(50);

                entity.Property(e => e.DateOfIssue)
                    .HasColumnType("date")
                    .HasColumnName("Date of issue");

                entity.Property(e => e.DriverId).HasColumnName("Driver ID");

                entity.Property(e => e.EndDate)
                    .HasColumnType("date")
                    .HasColumnName("End date");

                entity.HasOne(d => d.Driver)
                    .WithMany(p => p.CategoriesOfDriverSLicenses)
                    .HasForeignKey(d => d.DriverId)
                    .HasConstraintName("FK__Categorie__Drive__2D27B809");
            });

            modelBuilder.Entity<Driver>(entity =>
            {
                entity.Property(e => e.DriverId).HasColumnName("Driver ID");

                entity.Property(e => e.DateOfIssueOfTheFirstDriverSLicense)
                    .HasColumnType("date")
                    .HasColumnName("Date of issue of the first driver's license");

                entity.Property(e => e.EmailAddress)
                    .HasMaxLength(150)
                    .HasColumnName("Email address");

                entity.Property(e => e.FullName)
                    .HasMaxLength(100)
                    .HasColumnName("Full name");

                entity.Property(e => e.LicenseNumber)
                    .HasMaxLength(6)
                    .HasColumnName("License number");

                entity.Property(e => e.LicenseSeries)
                    .HasMaxLength(5)
                    .HasColumnName("License series");

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(20)
                    .HasColumnName("Phone number");

                entity.Property(e => e.UserId).HasColumnName("User ID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Drivers)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__Drivers__User ID__2A4B4B5E");
            });

            modelBuilder.Entity<DriverStatus>(entity =>
            {
                entity.HasKey(e => e.StatusId)
                    .HasName("PK__Driver s__023FF3718920A92D");

                entity.ToTable("Driver status");

                entity.Property(e => e.StatusId).HasColumnName("Status ID");

                entity.Property(e => e.DriverId).HasColumnName("Driver ID");

                entity.Property(e => e.EndDate)
                    .HasColumnType("date")
                    .HasColumnName("End date");

                entity.Property(e => e.Note).HasMaxLength(500);

                entity.Property(e => e.StartDate)
                    .HasColumnType("date")
                    .HasColumnName("Start date");

                entity.Property(e => e.Status).HasMaxLength(50);

                entity.HasOne(d => d.Driver)
                    .WithMany(p => p.DriverStatuses)
                    .HasForeignKey(d => d.DriverId)
                    .HasConstraintName("FK__Driver st__Drive__300424B4");
            });

            modelBuilder.Entity<EmployeeStatus>(entity =>
            {
                entity.HasKey(e => e.StatusId)
                    .HasName("PK__Employee__023FF371097775C4");

                entity.ToTable("Employee status");

                entity.Property(e => e.StatusId).HasColumnName("Status ID");

                entity.Property(e => e.EmployeeId).HasColumnName("Employee ID");

                entity.Property(e => e.EndDate)
                    .HasColumnType("date")
                    .HasColumnName("End date");

                entity.Property(e => e.Note).HasMaxLength(500);

                entity.Property(e => e.StartDate)
                    .HasColumnType("date")
                    .HasColumnName("Start date");

                entity.Property(e => e.Status).HasMaxLength(50);

                entity.HasOne(d => d.Employee)
                    .WithMany(p => p.EmployeeStatuses)
                    .HasForeignKey(d => d.EmployeeId)
                    .HasConstraintName("FK__Employee __Emplo__37A5467C");
            });

            modelBuilder.Entity<Flight>(entity =>
            {
                entity.Property(e => e.FlightId).HasColumnName("Flight ID");

                entity.Property(e => e.ActualTimeOfDepartureFromTheLine)
                    .HasColumnType("datetime")
                    .HasColumnName("Actual time of departure from the line");

                entity.Property(e => e.ActualTimeToGetOnTheLine)
                    .HasColumnType("datetime")
                    .HasColumnName("Actual time to get on the line");

                entity.Property(e => e.DriverId).HasColumnName("Driver ID");

                entity.Property(e => e.RouteId).HasColumnName("Route ID");

                entity.Property(e => e.VehicleId).HasColumnName("Vehicle ID");

                entity.HasOne(d => d.Driver)
                    .WithMany(p => p.Flights)
                    .HasForeignKey(d => d.DriverId)
                    .HasConstraintName("FK__Flights__Driver __4AB81AF0");

                entity.HasOne(d => d.Route)
                    .WithMany(p => p.Flights)
                    .HasForeignKey(d => d.RouteId)
                    .HasConstraintName("FK__Flights__Route I__4BAC3F29");

                entity.HasOne(d => d.Vehicle)
                    .WithMany(p => p.Flights)
                    .HasForeignKey(d => d.VehicleId)
                    .HasConstraintName("FK__Flights__Vehicle__4CA06362");
            });

            modelBuilder.Entity<FlightsStatus>(entity =>
            {
                entity.HasKey(e => e.StatusId)
                    .HasName("PK__Flights __023FF371D506F31D");

                entity.ToTable("Flights status");

                entity.Property(e => e.StatusId).HasColumnName("Status ID");

                entity.Property(e => e.EndDatetime)
                    .HasColumnType("datetime")
                    .HasColumnName("End datetime");

                entity.Property(e => e.FlightId).HasColumnName("Flight ID");

                entity.Property(e => e.Note).HasMaxLength(500);

                entity.Property(e => e.StartDatetime)
                    .HasColumnType("datetime")
                    .HasColumnName("Start datetime");

                entity.Property(e => e.Status).HasMaxLength(50);

                entity.HasOne(d => d.Flight)
                    .WithMany(p => p.FlightsStatuses)
                    .HasForeignKey(d => d.FlightId)
                    .HasConstraintName("FK__Flights s__Fligh__4F7CD00D");
            });

            modelBuilder.Entity<Passenger>(entity =>
            {
                entity.Property(e => e.PassengerId).HasColumnName("Passenger ID");

                entity.Property(e => e.DateOfBirth)
                    .HasColumnType("date")
                    .HasColumnName("Date of birth");

                entity.Property(e => e.EmailAddress)
                    .HasMaxLength(150)
                    .HasColumnName("Email address");

                entity.Property(e => e.FullName)
                    .HasMaxLength(100)
                    .HasColumnName("Full name");

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(20)
                    .HasColumnName("Phone number");

                entity.Property(e => e.UserId).HasColumnName("User ID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Passengers)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__Passenger__User __3C69FB99");
            });

            modelBuilder.Entity<Rating>(entity =>
            {
                entity.Property(e => e.RatingId).HasColumnName("Rating ID");

                entity.Property(e => e.CommentOnTheRating)
                    .HasMaxLength(250)
                    .HasColumnName("Comment on the rating");

                entity.Property(e => e.DateOfDispatch)
                    .HasColumnType("date")
                    .HasColumnName("Date of dispatch");

                entity.Property(e => e.DateOfPublication)
                    .HasColumnType("date")
                    .HasColumnName("Date of publication");

                entity.Property(e => e.DateOfTheIncident)
                    .HasColumnType("date")
                    .HasColumnName("Date of the incident");

                entity.Property(e => e.DriverId).HasColumnName("Driver ID");

                entity.Property(e => e.PassengerFeedback)
                    .HasMaxLength(100)
                    .HasColumnName("Passenger feedback");

                entity.Property(e => e.PassengerId).HasColumnName("Passenger ID");

                entity.Property(e => e.PassengerRating)
                    .HasColumnType("numeric(10, 2)")
                    .HasColumnName("Passenger rating");

                entity.Property(e => e.PhotoMaterials).HasColumnName("Photo materials");

                entity.Property(e => e.PublishedEntry).HasColumnName("Published entry");

                entity.Property(e => e.ResponsibleEmployee).HasColumnName("Responsible employee");

                entity.Property(e => e.VideoMaterials).HasColumnName("Video materials");

                entity.HasOne(d => d.Driver)
                    .WithMany(p => p.Ratings)
                    .HasForeignKey(d => d.DriverId)
                    .HasConstraintName("FK__Ratings__Driver __5441852A");

                entity.HasOne(d => d.Passenger)
                    .WithMany(p => p.Ratings)
                    .HasForeignKey(d => d.PassengerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Ratings__Passeng__534D60F1");

                entity.HasOne(d => d.ResponsibleEmployeeNavigation)
                    .WithMany(p => p.Ratings)
                    .HasForeignKey(d => d.ResponsibleEmployee)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Ratings__Respons__5535A963");
            });

            modelBuilder.Entity<RouteStop>(entity =>
            {
                entity.ToTable("Route Stops");

                entity.Property(e => e.RouteStopId).HasColumnName("Route Stop ID");

                entity.Property(e => e.EndPoint).HasColumnName("End point");

                entity.Property(e => e.RouteId).HasColumnName("Route ID");

                entity.Property(e => e.StartPoint).HasColumnName("Start point");

                entity.Property(e => e.StopId).HasColumnName("Stop ID");

                entity.Property(e => e.StopOrder).HasColumnName("Stop Order");

                entity.HasOne(d => d.Route)
                    .WithMany(p => p.RouteStops)
                    .HasForeignKey(d => d.RouteId)
                    .HasConstraintName("FK__Route Sto__Route__46E78A0C");

                entity.HasOne(d => d.Stop)
                    .WithMany(p => p.RouteStops)
                    .HasForeignKey(d => d.StopId)
                    .HasConstraintName("FK__Route Sto__Stop __47DBAE45");
            });

            modelBuilder.Entity<Stop>(entity =>
            {
                entity.Property(e => e.StopId).HasColumnName("Stop ID");

                entity.Property(e => e.Latitude).HasColumnType("decimal(9, 6)");

                entity.Property(e => e.Longitude).HasColumnType("decimal(9, 6)");

                entity.Property(e => e.Note).HasMaxLength(500);

                entity.Property(e => e.StopAddress)
                    .HasMaxLength(150)
                    .HasColumnName("Stop address");

                entity.Property(e => e.StopName)
                    .HasMaxLength(100)
                    .HasColumnName("Stop name");
            });

            modelBuilder.Entity<UrbanRoute>(entity =>
            {
                entity.HasKey(e => e.RouteId)
                    .HasName("PK__Urban ro__81A3588D35C7F357");

                entity.ToTable("Urban routes");

                entity.Property(e => e.RouteId).HasColumnName("Route ID");

                entity.Property(e => e.MovementInterval).HasColumnName("Movement interval");

                entity.Property(e => e.RouteIndex)
                    .HasMaxLength(1)
                    .HasColumnName("Route index");

                entity.Property(e => e.RouteName)
                    .HasMaxLength(100)
                    .HasColumnName("Route name");

                entity.Property(e => e.RouteNumber).HasColumnName("Route number");

                entity.Property(e => e.TimeOfDepartureFromTheLine).HasColumnName("Time of departure from the line");

                entity.Property(e => e.TimeToGetOnTheLine).HasColumnName("Time to get on the line");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasIndex(e => e.Login, "UQ__Users__5E55825B6FEA7073")
                    .IsUnique();

                entity.Property(e => e.UserId).HasColumnName("User ID");

                entity.Property(e => e.ActiveUserAccount).HasColumnName("Active user account");

                entity.Property(e => e.ConfirmedEntry).HasColumnName("Confirmed entry");

                entity.Property(e => e.Login).HasMaxLength(100);

                entity.Property(e => e.Password).HasMaxLength(100);

                entity.Property(e => e.RoleInTheSystem)
                    .HasMaxLength(15)
                    .HasColumnName("Role in the system");
            });

            modelBuilder.Entity<Vehicle>(entity =>
            {
                entity.Property(e => e.VehicleId).HasColumnName("Vehicle ID");

                entity.Property(e => e.Brand).HasMaxLength(100);

                entity.Property(e => e.Cost).HasColumnType("money");

                entity.Property(e => e.EnginePower).HasColumnName("Engine power");

                entity.Property(e => e.Model).HasMaxLength(100);

                entity.Property(e => e.OnBoardNumber)
                    .HasMaxLength(5)
                    .HasColumnName("On-board number");

                entity.Property(e => e.PassengerCapacity).HasColumnName("Passenger capacity");

                entity.Property(e => e.PurposeOfTheVehicle)
                    .HasMaxLength(100)
                    .HasColumnName("Purpose of the vehicle");

                entity.Property(e => e.StateNumber)
                    .HasMaxLength(15)
                    .HasColumnName("State number");

                entity.Property(e => e.VehicleClass)
                    .HasMaxLength(100)
                    .HasColumnName("Vehicle class");

                entity.Property(e => e.YearOfManufacture)
                    .HasColumnType("date")
                    .HasColumnName("Year of manufacture");
            });

            modelBuilder.Entity<staff>(entity =>
            {
                entity.HasKey(e => e.EmployeeId)
                    .HasName("PK__Staff__682EC9E41E3CBB95");

                entity.ToTable("Staff");

                entity.Property(e => e.EmployeeId).HasColumnName("Employee ID");

                entity.Property(e => e.EmailAddress)
                    .HasMaxLength(150)
                    .HasColumnName("Email address");

                entity.Property(e => e.EmployeePosition)
                    .HasMaxLength(75)
                    .HasColumnName("Employee position");

                entity.Property(e => e.FullName)
                    .HasMaxLength(100)
                    .HasColumnName("Full name");

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(20)
                    .HasColumnName("Phone number");

                entity.Property(e => e.PlaceOfWork)
                    .HasMaxLength(150)
                    .HasColumnName("Place of work");

                entity.Property(e => e.UserId).HasColumnName("User ID");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.staff)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__Staff__User ID__34C8D9D1");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
