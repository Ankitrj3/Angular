using DotnetWebApi.Models;
using DotnetWebApi.Repository;

namespace DotnetWebApi.Services;

public class PassportService : IPassportService
{
    private readonly IPassportRepo _repo;

    public PassportService(IPassportRepo repo)
    {
        _repo = repo;
    }

    public async Task AddPassport(Passport passport)
    {
        var existing = await _repo.GetById(passport.PassportId);

        if (existing != null)
        {
            Console.WriteLine("Passport already exists");
            return;
        }

        await _repo.Add(passport);
    }

    public async Task<Passport?> GetPassport(int passportId)
    {
        return await _repo.GetById(passportId);
    }

    public async Task DeletePassport(int passportId)
    {
        var existing = await _repo.GetById(passportId);

        if (existing == null)
        {
            Console.WriteLine("Passport is not existing");
            return;
        }

        await _repo.Delete(existing);
    }

    public async Task<List<Passport>> GetAllPassports()
    {
        return await _repo.GetAll();
    }

    public async Task UpdatePassport(Passport passport)
    {
        var existing = await _repo.GetById(passport.PassportId);

        if (existing == null)
        {
            Console.WriteLine("Passport is not existing");
            return;
        }

        // Merge properties instead of replacing
        existing.HolderName = passport.HolderName;
        existing.Email = passport.Email;
        existing.PhoneNumber = passport.PhoneNumber;
        existing.ExpirationDate = passport.ExpirationDate;

        await _repo.Update(existing);
    }
}