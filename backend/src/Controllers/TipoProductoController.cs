using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using ServicioClientesSOA.Services;
using ServicioClientesSOA.Models;

namespace ServicioClientesSOA.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TipoProductoController : ControllerBase
    {
        private readonly TipoProductoService _tipoProductoService;

        public TipoProductoController(TipoProductoService tipoProductoService)
        {
            _tipoProductoService = tipoProductoService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TipoProducto>>> GetAll()
        {
            var tiposProducto = await _tipoProductoService.GetAllAsync();
            return Ok(tiposProducto);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TipoProducto>> GetById(int id)
        {
            var tipoProducto = await _tipoProductoService.GetByIdAsync(id);
            if (tipoProducto == null)
            {
                return NotFound();
            }
            return Ok(tipoProducto);
        }

        [HttpPost]
        public async Task<ActionResult<TipoProducto>> Create(TipoProducto tipoProducto)
        {
            var createdTipoProducto = await _tipoProductoService.CreateAsync(tipoProducto);
            return CreatedAtAction(nameof(GetById), new { id = createdTipoProducto.Id }, createdTipoProducto);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, TipoProducto tipoProducto)
        {
            if (id != tipoProducto.Id)
            {
                return BadRequest();
            }

            await _tipoProductoService.UpdateAsync(tipoProducto);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _tipoProductoService.DeleteAsync(id);
            return NoContent();
        }
    }
}