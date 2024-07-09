using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ProductApp.Api.Models.DTOs;
using ProductApp.Api.Repositories;

namespace ProductApp.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly ITokenRepository _tokenRepository;

        public AuthController(UserManager<IdentityUser> userManager,
            ITokenRepository tokenRepository)
        {
            _userManager = userManager;
            _tokenRepository = tokenRepository;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestDto req)
        {
            var user = await _userManager.FindByEmailAsync(req.Email);
            if (user is not null)
            {
               var passMath = await _userManager.CheckPasswordAsync(user, req.Password);
                if (passMath)
                {
                    var getRoles = await _userManager.GetRolesAsync(user);
                    //create token
                    var jwtToken = _tokenRepository.CreateJwtToken(user, getRoles.ToList());
                    var response = new LoginResponseDto
                    {
                        Email = user.Email,
                        Token = jwtToken,
                        Roles = getRoles.ToList()
                    };

                    return Ok(response);

                }
            }
            else
            {
                ModelState.AddModelError("", "user or password not exist");
            }

            return ValidationProblem(ModelState);
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequestDto request)
        {
            var user = new IdentityUser
            {
                UserName = request.Email.Trim(),
                Email = request.Email.Trim()
            };

           var result = await _userManager.CreateAsync(user, request.Password);
            if (result.Succeeded)
            {
                result = await _userManager.AddToRoleAsync(user, "Reader");
                if (result.Succeeded)
                {
                    return Ok();
                }
                else
                {
                    foreach (var item in result.Errors)
                    {
                        ModelState.AddModelError("", item.Description);
                    }
                }

            }
            else
            {
                if (result.Errors.Any())
                {
                    foreach (var item in result.Errors)
                    {
                        ModelState.AddModelError("",item.Description);
                    }
                }
            }
            return ValidationProblem(ModelState);
        }
    }
}
