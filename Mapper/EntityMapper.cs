using AutoMapper;
using WebApplicationD.Dto;
using WebApplicationD.Models;

namespace WebApplicationD.Mapper
{
    public class EntityMapper : Profile
    {
        public EntityMapper() 
        {
            CreateMap<Passenger, PassengerDto>()
                .ForMember(dest => dest.Login, opt => opt.MapFrom(src => src.User.Login))
                .ForMember(dest => dest.Password, opt => opt.MapFrom(src => src.User.Password))
                .ForMember(dest => dest.RoleInTheSystem, opt => opt.MapFrom(src => src.User.RoleInTheSystem))
                .ForMember(dest => dest.ConfirmedEntry, opt => opt.MapFrom(src => src.User.ConfirmedEntry))
                .ForMember(dest => dest.ActiveUserAccount, opt => opt.MapFrom(src => src.User.ActiveUserAccount))
                .ReverseMap();

            CreateMap<Driver, DriverDto>()
                .ForMember(dest => dest.Login, opt => opt.MapFrom(src => src.User.Login))
                .ForMember(dest => dest.Password, opt => opt.MapFrom(src => src.User.Password))
                .ForMember(dest => dest.RoleInTheSystem, opt => opt.MapFrom(src => src.User.RoleInTheSystem))
                .ForMember(dest => dest.ConfirmedEntry, opt => opt.MapFrom(src => src.User.ConfirmedEntry))
                .ForMember(dest => dest.ActiveUserAccount, opt => opt.MapFrom(src => src.User.ActiveUserAccount))
                .ReverseMap();

            CreateMap<staff, EmployeeDto>()
                .ForMember(dest => dest.Login, opt => opt.MapFrom(src => src.User.Login))
                .ForMember(dest => dest.Password, opt => opt.MapFrom(src => src.User.Password))
                .ForMember(dest => dest.RoleInTheSystem, opt => opt.MapFrom(src => src.User.RoleInTheSystem))
                .ForMember(dest => dest.ConfirmedEntry, opt => opt.MapFrom(src => src.User.ConfirmedEntry))
                .ForMember(dest => dest.ActiveUserAccount, opt => opt.MapFrom(src => src.User.ActiveUserAccount))
                .ReverseMap();
        }
    }
}
