using DotnetWebApi.Models;

namespace DotnetWebApi.Services;

public interface IPassportService
{
    Task AddPassport(Passport passport);
    Task UpdatePassport(Passport passport);
    Task DeletePassport(int passportId); 
    Task<List<Passport>> GetAllPassports();
    Task<Passport?> GetPassport(int id);
}