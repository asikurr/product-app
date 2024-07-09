using Microsoft.AspNetCore.Identity;

namespace ProductApp.Api.Repositories
{
    public interface ITokenRepository
    {
        string CreateJwtToken(IdentityUser user, List<string> roles);
    }
}
