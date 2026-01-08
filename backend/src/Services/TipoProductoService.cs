using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ServicioClientesSOA.Models;
using ServicioClientesSOA.Data;

namespace ServicioClientesSOA.Services
{
    public class TipoProductoService : ITipoProductoService
    {
        private readonly ApplicationDbContext _context;

        public TipoProductoService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<TipoProducto>> GetAllAsync()
        {
            return await _context.TiposProducto.ToListAsync();
        }

        public async Task<TipoProducto> GetByIdAsync(int id)
        {
            return await _context.TiposProducto.FindAsync(id);
        }

        public async Task<TipoProducto> CreateAsync(TipoProducto tipoProducto)
        {
            _context.TiposProducto.Add(tipoProducto);
            await _context.SaveChangesAsync();
            return tipoProducto;
        }

        public async Task<TipoProducto> UpdateAsync(TipoProducto tipoProducto)
        {
            _context.Entry(tipoProducto).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return tipoProducto;
        }

        public async Task DeleteAsync(int id)
        {
            var tipoProducto = await _context.TiposProducto.FindAsync(id);
            if (tipoProducto != null)
            {
                _context.TiposProducto.Remove(tipoProducto);
                await _context.SaveChangesAsync();
            }
        }
    }
}