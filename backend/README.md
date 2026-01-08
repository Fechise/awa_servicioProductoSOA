# Servicio Clientes SOA Backend

This project implements a Service-Oriented Architecture (SOA) for managing products and product types. It provides a RESTful API for performing CRUD operations on the entities "Producto" and "Tipo de Producto."

## Project Structure

The backend is organized into the following directories:

- **Controllers**: Contains the controllers that handle HTTP requests.
  - `ProductoController.cs`: Manages requests related to the `Producto` entity.
  - `TipoProductoController.cs`: Manages requests related to the `TipoProducto` entity.

- **Services**: Contains the business logic for managing entities.
  - `ProductoService.cs`: Contains logic for managing products.
  - `TipoProductoService.cs`: Contains logic for managing product types.

- **Models**: Contains the data models representing the entities.
  - `Producto.cs`: Represents the product entity.
  - `TipoProducto.cs`: Represents the product type entity.

- **Data**: Contains the database context.
  - `ApplicationDbContext.cs`: Responsible for interacting with the database.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the backend directory**:
   ```
   cd ServicioClientesSOA/backend
   ```

3. **Restore dependencies**:
   ```
   dotnet restore
   ```

4. **Update the connection string** in `appsettings.json` to match your database configuration.

5. **Run the application**:
   ```
   dotnet run
   ```

## API Endpoints

- **Productos**
  - `GET /api/producto`: Retrieve all products.
  - `GET /api/producto/{id}`: Retrieve a product by ID.
  - `POST /api/producto`: Create a new product.
  - `PUT /api/producto/{id}`: Update an existing product.
  - `DELETE /api/producto/{id}`: Delete a product.

- **Tipos de Producto**
  - `GET /api/tipoproducto`: Retrieve all product types.
  - `GET /api/tipoproducto/{id}`: Retrieve a product type by ID.
  - `POST /api/tipoproducto`: Create a new product type.
  - `PUT /api/tipoproducto/{id}`: Update an existing product type.
  - `DELETE /api/tipoproducto/{id}`: Delete a product type.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.