namespace ProductApp.Api.Models.DTOs
{
    public class CreateProductDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public uint Price { get; set; }
        public uint Quantity { get; set; }
    }
}
