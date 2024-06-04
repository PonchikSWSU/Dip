﻿using System;
using System.Collections.Generic;

namespace WebApplicationD.Models
{
    public partial class EmployeeStatus
    {
        public int StatusId { get; set; }
        public int EmployeeId { get; set; }
        public string Status { get; set; } = null!;
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string? Note { get; set; }

        public virtual staff Employee { get; set; } = null!;
    }
}
