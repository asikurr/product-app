using FluentValidation;
using ProductApp.Api.Models.Domain;

namespace ProductApp.Api.Validate
{
    public class AddProductValidate : AbstractValidator<Product>
    {
        public AddProductValidate() 
        {
            RuleFor(n => n.Name).NotEmpty();
            RuleFor(n => n.Description).NotEmpty().NotNull();
            RuleFor(n => n.Price).NotEmpty();
            RuleFor(n => n.Quantity).NotEmpty();
        }
    }
}
