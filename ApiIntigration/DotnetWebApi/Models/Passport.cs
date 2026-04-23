using System.Text.Json.Serialization;

namespace DotnetWebApi.Models;

public class Passport
{
    [JsonPropertyName("passportId")]
    public int PassportId { get; set; }
    
    [JsonPropertyName("holderName")]
    public string? HolderName { get; set; }
    
    [JsonPropertyName("email")]
    public string? Email { get; set; }
    
    [JsonPropertyName("phoneNumber")]
    public string? PhoneNumber { get; set; }
    
    [JsonPropertyName("expirationDate")]
    public string? ExpirationDate { get; set; }
}