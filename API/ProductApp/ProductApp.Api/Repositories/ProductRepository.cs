using Microsoft.EntityFrameworkCore;
using ProductApp.Api.Data;
using ProductApp.Api.Models.Domain;

namespace ProductApp.Api.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly ApplicationDbContext _dbContext;
        public ProductRepository(ApplicationDbContext dbContext) 
        {
            _dbContext = dbContext;
        }
        public async Task CreateAsync(Product product)
        {
            await _dbContext.Products.AddAsync(product);
            await _dbContext.SaveChangesAsync();
  
        }

        public async Task<IEnumerable<Product>> GetAllAsync()
        {
            return await _dbContext.Products.ToListAsync();
        }

        public async Task<Product?> GetByIdAsync(Guid id)
        {
            return await _dbContext.Products.Where(p => p.Id == id).FirstOrDefaultAsync();
        }

        public async Task<Product?> UpdateAsync(Product product)
        {
            var productExist = await GetByIdAsync(product.Id);
            if (productExist is null)
            {
                return null;
            }

            _dbContext.Entry(productExist).CurrentValues.SetValues(product);
            await _dbContext.SaveChangesAsync();
            return productExist;
        }

        public async Task<Product?> DeleteAsync(Guid id)
        {
            var existProduct = await GetByIdAsync(id);
            if (existProduct is null)
            {
                return null;
            }

            _dbContext.Remove(existProduct);
            await _dbContext.SaveChangesAsync();
            return existProduct;
        }


    }
}
