const markdownContent = `# Lorem Ipsum Markdown

## Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eget urna ultricies aliquet.

### Key Points

1. **Vestibulum ante ipsum** primis in faucibus orci luctus et ultrices posuere cubilia curae
2. *Pellentesque habitant* morbi tristique senectus et netus et malesuada fames ac turpis egestas
3. ~~Fusce dapibus~~ tellus ac cursus commodo

## Main Content

Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.

> Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo.

### Python Example

\`\`\`python
def lorem_ipsum():
    print("Lorem ipsum dolor sit amet")
    return "consectetur adipiscing elit"
\`\`\`

### C# Examples

#### Basic Class Example
\`\`\`csharp
public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; }
    public DateTime CreatedAt { get; set; }

    public Customer(string name)
    {
        Name = name;
        CreatedAt = DateTime.UtcNow;
    }

    public string GetCustomerInfo()
    {
        return $"Customer {Name} (ID: {Id}) created at {CreatedAt:yyyy-MM-dd}";
    }
}
\`\`\`

#### LINQ Example
\`\`\`csharp
using System.Linq;

public class ProductService
{
    private readonly List<Product> _products;

    public IEnumerable<Product> GetExpensiveProducts(decimal threshold)
    {
        return _products
            .Where(p => p.Price > threshold)
            .OrderByDescending(p => p.Price)
            .Select(p => new Product 
            {
                Name = p.Name,
                Price = p.Price,
                Category = p.Category
            });
    }
}
\`\`\`

#### Async/Await Example
\`\`\`csharp
public class DataService
{
    private readonly HttpClient _client;

    public async Task<IEnumerable<UserData>> GetUserDataAsync()
    {
        try
        {
            var response = await _client.GetAsync("/api/users");
            response.EnsureSuccessStatusCode();
            
            var users = await response.Content.ReadFromJsonAsync<List<UserData>>();
            return users ?? Enumerable.Empty<UserData>();
        }
        catch (HttpRequestException ex)
        {
            _logger.LogError(ex, "Failed to fetch user data");
            throw;
        }
    }
}
\`\`\`

## Conclusion

In conclusion, lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna.`;

export default markdownContent;
