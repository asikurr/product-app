using System.ComponentModel.DataAnnotations;

namespace ProductApp.Api.Models.Domain
{
    public class Product
    {
        [Required]
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public uint Price { get; set; }
        [Required]
        public uint Quantity { get; set; }
    }
}
