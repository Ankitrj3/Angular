using DotnetWebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace DotnetWebApi.Data;
public class MyDbContext : DbContext  
{
    public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
    {
        
    }
    public DbSet<Passport> Passports { get; set; }
}