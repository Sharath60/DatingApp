using System.Linq;
using API.DTOS;
using API.Entities;
using API.Extensions;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser, MemberDto>()
            .ForMember(destinationMember => destinationMember.PhotoUrl, memberOptions => memberOptions.
            MapFrom(sourceMember => sourceMember.Photos.FirstOrDefault(x => x.IsMain).Url))
            .ForMember(destinationMember => destinationMember.Age, memberOptions => memberOptions.MapFrom
               (sourceMember => sourceMember.DateOfBirth.CalculateAge()));

            CreateMap<Photo, PhotoDto>();
            CreateMap<MemberUpdateDTO,AppUser>();
            CreateMap<RegisterDTO,AppUser>();
        }
    }
}