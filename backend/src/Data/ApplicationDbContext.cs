using Microsoft.EntityFrameworkCore;
using ServicioClientesSOA.Models;

namespace ServicioClientesSOA.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Producto> Productos { get; set; }
        public DbSet<TipoProducto> TiposProducto { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            // Configure foreign key relationship
            modelBuilder.Entity<Producto>()
                .HasOne(p => p.TipoProducto)
                .WithMany()
                .HasForeignKey(p => p.IdTipo)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}