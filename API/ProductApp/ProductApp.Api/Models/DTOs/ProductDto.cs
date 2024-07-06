namespace ProductApp.Api.Models.DTOs
{
    public class ProductDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public uint Price { get; set; }
        public uint Quantity { get; set; }
    }
}
