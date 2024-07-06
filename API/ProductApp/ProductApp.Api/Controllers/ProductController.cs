using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductApp.Api.Models.Domain;
using ProductApp.Api.Models.DTOs;
using ProductApp.Api.Repositories;

namespace ProductApp.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;
        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }
        [HttpPost]
        public async Task<IActionResult> CreateProduct([FromBody] CreateProductDto request)
        {
            var product = new Product()
            {
                Name = request.Name,
                Description = request.Description,
                Quantity = request.Quantity,
                Price = request.Price
            };

            await _productRepository.CreateAsync(product);

            var response = new ProductDto
            {
                Id = product.Id,
                Name = product.Name,
                Description = product.Description,
                Quantity = product.Quantity,
                Price = product.Price
            };

            return Ok(response);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllProduts()
        {
            var products = await _productRepository.GetAllAsync();

            var response = new List<ProductDto>();
            foreach (var product in products)
            {
                response.Add(new ProductDto
                {
                    Id = product.Id,
                    Name = product.Name,
                    Description = product.Description,
                    Quantity = product.Quantity,
                    Price = product.Price
                });
            }

            return Ok(response);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetProductById([FromRoute] Guid id)
        {
            var product = await _productRepository.GetByIdAsync(id);
            if (product is null)
            {
                return NotFound();
            }
            var response = new ProductDto
            {
                Id = product.Id,
                Name = product.Name,
                Description = product.Description,
                Quantity = product.Quantity,
                Price = product.Price
            };

            return Ok(response);

        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateProduct([FromRoute] Guid id, UpdateProductDto request)
        {
            var product = new Product
            {
                Id = id,
                Name = request.Name,
                Description = request.Description,
                Quantity = request.Quantity,
                Price = request.Price
            };
            product = await _productRepository.UpdateAsync(product);
            if (product is null)
            {
                return NotFound(); 
            }
            var response = new ProductDto
            {
                Id = product.Id,
                Name = product.Name,
                Description = product.Description,
                Quantity = product.Quantity,
                Price = product.Price
            };

            return Ok(response);

        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteProduct([FromRoute] Guid id)
        {
            var product = await _productRepository.DeleteAsync(id);
            if (product is null)
            {
                return NotFound();
            }
            var response = new ProductDto
            {
                Id = product.Id,
                Name = product.Name,
                Description = product.Description,
                Quantity = product.Quantity,
                Price = product.Price
            };

            return Ok(response);


        }



    }
}
