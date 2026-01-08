using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace ServicioClientesSOA.Models
{
    [DataContract]
    public class TipoProducto
    {
        [Key]
        [DataMember]
        public int Id { get; set; }
        
        [Required]
        [StringLength(100)]
        [DataMember]
        public string Tipo { get; set; }
    }
}