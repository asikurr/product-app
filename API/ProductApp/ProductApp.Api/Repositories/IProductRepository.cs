using ProductApp.Api.Models.Domain;

namespace ProductApp.Api.Repositories
{
    public interface IProductRepository
    {
        Task CreateAsync(Product product);

        Task<IEnumerable<Product>> GetAllAsync();

        Task<Product?> GetByIdAsync(Guid id);

        Task<Product?> UpdateAsync(Product product);

        Task<Product?> DeleteAsync(Guid id);
    }
}
