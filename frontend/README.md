# Servicio Clientes SOA

This project implements a Service-Oriented Architecture (SOA) for managing products and product types through a web application. It consists of a backend API and a frontend Angular application.

## Project Structure

- **Backend**: The backend is built using ASP.NET Core and provides RESTful APIs for CRUD operations on `Producto` and `Tipo de Producto`.
  - **Controllers**: Contains controllers that handle HTTP requests.
    - `ProductoController.cs`: Manages product-related requests.
    - `TipoProductoController.cs`: Manages product type-related requests.
  - **Services**: Contains business logic for managing entities.
    - `ProductoService.cs`: Contains logic for product management.
    - `TipoProductoService.cs`: Contains logic for product type management.
  - **Models**: Defines the data models for the application.
    - `Producto.cs`: Represents the product entity.
    - `TipoProducto.cs`: Represents the product type entity.
  - **Data**: Contains the database context for Entity Framework.
    - `ApplicationDbContext.cs`: Manages database interactions.
  - **Program.cs**: Entry point for the backend application.
  - **appsettings.json**: Configuration settings for the application.

- **Frontend**: The frontend is built using Angular and provides a user interface for managing products and product types.
  - **Components**: Contains UI components for displaying and managing entities.
    - `producto`: Components related to products.
      - `producto-list.component.ts`: Displays a list of products.
      - `producto-form.component.ts`: Form for creating/editing products.
      - `producto-detail.component.ts`: Displays details of a specific product.
    - `tipo-producto`: Components related to product types.
      - `tipo-producto-list.component.ts`: Displays a list of product types.
      - `tipo-producto-form.component.ts`: Form for creating/editing product types.
      - `tipo-producto-detail.component.ts`: Displays details of a specific product type.
  - **Services**: Contains services for making HTTP requests to the backend.
    - `producto.service.ts`: Service for product-related operations.
    - `tipo-producto.service.ts`: Service for product type-related operations.
  - **Models**: Defines the data models for the frontend.
    - `producto.model.ts`: Represents the structure of a product object.
    - `tipo-producto.model.ts`: Represents the structure of a product type object.
  - **app.component.ts**: Root component of the Angular application.
  - **app-routing.module.ts**: Routing configuration for the application.
  - **assets**: Contains static assets for the application.
  - **main.ts**: Entry point of the Angular application.

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Backend Setup**:
   - Navigate to the `backend` directory.
   - Restore dependencies:
     ```
     dotnet restore
     ```
   - Update the connection string in `appsettings.json` as needed.
   - Run the backend application:
     ```
     dotnet run
     ```

3. **Frontend Setup**:
   - Navigate to the `frontend` directory.
   - Install dependencies:
     ```
     npm install
     ```
   - Run the frontend application:
     ```
     ng serve
     ```

4. **Access the Application**:
   - Open your browser and navigate to `http://localhost:4200` to access the frontend application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.