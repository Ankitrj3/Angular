using DotnetWebApi.Models;
using DotnetWebApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace DotnetWebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PassportController : ControllerBase
{
    private readonly IPassportService _service;

    public PassportController(IPassportService service)
    {
        _service = service;
    }

    // GET BY ID
    [HttpGet("{id}")]
    public async Task<ActionResult<Passport>> GetPassportById(int id)
    {
        var passport = await _service.GetPassport(id);

        if (passport == null)
            return NotFound("Passport not found");

        return Ok(passport);
    }

    // GET ALL
    [HttpGet("all")]
    public async Task<ActionResult<List<Passport>>> GetAllPassports()
    {
        var passports = await _service.GetAllPassports();
        return Ok(passports);
    }

    // CREATE
    [HttpPost]
    public async Task<ActionResult<Passport>> CreatePassport([FromBody] Passport passport)
    {
        var existing = await _service.GetPassport(passport.PassportId);

        if (existing != null)
            return BadRequest("Passport already exists");

        await _service.AddPassport(passport);

        return CreatedAtAction(nameof(GetPassportById),
            new { id = passport.PassportId }, passport);
    }

    // UPDATE
    [HttpPut("{id}")]
    public async Task<ActionResult<Passport>> UpdatePassport(int id, [FromBody] Passport passport)
    {
        if (id != passport.PassportId)
            return BadRequest("ID mismatch");

        var existing = await _service.GetPassport(id);

        if (existing == null)
            return NotFound("Passport not found");

        await _service.UpdatePassport(passport);

        return Ok(passport);
    }

    // DELETE
    [HttpDelete("{id}")]
    public async Task<ActionResult> DeletePassport(int id)
    {
        var existing = await _service.GetPassport(id);

        if (existing == null)
            return NotFound("Passport not found");

        await _service.DeletePassport(id);   

        return NoContent();
    }
}