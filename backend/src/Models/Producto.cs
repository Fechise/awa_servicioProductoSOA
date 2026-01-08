#nullable enable
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;

namespace ServicioClientesSOA.Models
{
    [DataContract]
    public class Producto
    {
        [Key]
        [DataMember]
        public int Id { get; set; }
        
        [Required]
        [DataMember]
        [ForeignKey("TipoProducto")]
        public int IdTipo { get; set; }
        
        [Required]
        [StringLength(100)]
        [DataMember]
        public string Descripcion { get; set; }
        
        [Required]
        [DataMember]
        public decimal Valor { get; set; }
        
        [Required]
        [DataMember]
        public decimal Costo { get; set; }
        
        // Navigation property
        public TipoProducto? TipoProducto { get; set; }
    }
}
#nullable restore