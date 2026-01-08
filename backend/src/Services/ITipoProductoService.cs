using System.Collections.Generic;
using System.Threading.Tasks;
using ServicioClientesSOA.Models;
using CoreWCF;

namespace ServicioClientesSOA.Services
{
    [ServiceContract]
    public interface ITipoProductoService
    {
        [OperationContract]
        Task<List<TipoProducto>> GetAllAsync();

        [OperationContract]
        Task<TipoProducto> GetByIdAsync(int id);

        [OperationContract]
        Task<TipoProducto> CreateAsync(TipoProducto tipoProducto);

        [OperationContract]
        Task<TipoProducto> UpdateAsync(TipoProducto tipoProducto);

        [OperationContract]
        Task DeleteAsync(int id);
    }
}
