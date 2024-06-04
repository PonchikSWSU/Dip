namespace WebApplicationD.Dto
{
    public class DriverDto
    {
        public int DriverId { get; set; }
        public string FullName { get; set; } = null!;
        public string Photo { get; set; } = null!;
        public string PhoneNumber { get; set; } = null!;
        public string EmailAddress { get; set; } = null!;
        public string Login { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string RoleInTheSystem { get; set; } = null!;
        public bool? ConfirmedEntry { get; set; }
        public bool? ActiveUserAccount { get; set; }
    }
}