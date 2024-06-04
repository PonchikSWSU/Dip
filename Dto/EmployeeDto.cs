namespace WebApplicationD.Dto
{
    public class EmployeeDto
    {
        public int EmployeeId { get; set; }
        public string FullName { get; set; } = null!;
        public string EmployeePosition { get; set; } = null!;
        public string PlaceOfWork { get; set; } = null!;
        public string PhoneNumber { get; set; } = null!;
        public string EmailAddress { get; set; } = null!;
        public string Login { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string RoleInTheSystem { get; set; } = null!;
        public bool? ConfirmedEntry { get; set; }
        public bool? ActiveUserAccount { get; set; }
    }
}
