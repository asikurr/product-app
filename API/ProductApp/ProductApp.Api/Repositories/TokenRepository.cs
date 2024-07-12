using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ProductApp.Api.Repositories
{
    public class TokenRepository : ITokenRepository
    {
        private IConfiguration _configuration { get; }

        public TokenRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public string CreateJwtToken(IdentityUser user, List<string> roles)
        {
            //created claims
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email,user.Email)
            };
            claims.AddRange(roles.Select(role => new Claim(ClaimTypes.Role, role)));

            //get JWT security key
            var getKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credential = new SigningCredentials(getKey, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                 issuer: _configuration["Jwt:Issuer"],
                 audience: _configuration["Jwt:Audience"],
                 claims: claims,
                 expires: DateTime.Now.AddMinutes(5),
                 signingCredentials: credential
                );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
