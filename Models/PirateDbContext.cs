using Microsoft.EntityFrameworkCore;

namespace StrawHats.Models
{
    public class PirateDbContext : DbContext
    {
        public PirateDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Pirate> Pirates { get; set; }
        
    }
}