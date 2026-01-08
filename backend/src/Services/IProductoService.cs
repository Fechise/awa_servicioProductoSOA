using System.Collections.Generic;
using System.Threading.Tasks;
using ServicioClientesSOA.Models;
using CoreWCF;

namespace ServicioClientesSOA.Services
{
    [ServiceContract]
    public interface IProductoService
    {
        [OperationContract]
        Task<List<Producto>> GetAllProductosAsync();

        [OperationContract]
        Task<Producto> GetProductoByIdAsync(int id);

        [OperationContract]
        Task<Producto> CreateProductoAsync(Producto producto);

        [OperationContract]
        Task<Producto> UpdateProductoAsync(Producto producto);

        [OperationContract]
        Task DeleteProductoAsync(int id);
    }
}
