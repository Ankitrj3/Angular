using DotnetWebApi.Data;
using DotnetWebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace DotnetWebApi.Repository;

public class PassportRepo : IPassportRepo
{
    private readonly MyDbContext _context;

    public PassportRepo(MyDbContext context)
    {
        _context = context;
    }
    public async Task Add(Passport passport)
    {
        await _context.Passports.AddAsync(passport);
        await _context.SaveChangesAsync();
    }

    public async Task<Passport?> GetById(int id)
    {
       return await _context.Passports.FindAsync(id);
    }

    public async Task Update(Passport passport)
    {
        _context.Passports.Update(passport);
        await _context.SaveChangesAsync();
    }

    public async Task Delete(Passport passport)
    {
        _context.Passports.Remove(passport);
        await _context.SaveChangesAsync();
    }

    public async Task<List<Passport>> GetAll()
    {
        return await _context.Passports.ToListAsync();
    }
}