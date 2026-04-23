using DotnetWebApi.Models;

namespace DotnetWebApi.Repository;

public interface IPassportRepo
{
    Task Add(Passport passport);
    Task Update(Passport passport);
    Task Delete(Passport passport);
    Task<Passport?> GetById(int id);
    Task<List<Passport>> GetAll();
}