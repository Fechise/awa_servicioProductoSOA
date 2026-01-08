# Servicio Clientes SOA

## Overview
This project implements a Service-Oriented Architecture (SOA) for managing products and product types through a web application. It consists of a backend API built with .NET and a frontend user interface developed with Angular.

## Project Structure
The project is organized into two main parts: `backend` and `frontend`.

### Backend
The backend is responsible for handling business logic and database interactions. It includes the following components:

- **Controllers**: Manage HTTP requests and responses.
  - `ProductoController.cs`: Handles CRUD operations for the `Producto` entity.
  - `TipoProductoController.cs`: Handles CRUD operations for the `TipoProducto` entity.

- **Services**: Contain business logic and interact with the database.
  - `ProductoService.cs`: Manages product-related operations.
  - `TipoProductoService.cs`: Manages product type-related operations.

- **Models**: Define the data structures used in the application.
  - `Producto.cs`: Represents the product entity.
  - `TipoProducto.cs`: Represents the product type entity.

- **Data**: Contains the database context.
  - `ApplicationDbContext.cs`: Manages database connections and sets for `Producto` and `TipoProducto`.

- **Configuration**: 
  - `appsettings.json`: Contains configuration settings such as connection strings.

### Frontend
The frontend provides a user interface for managing products and product types. It includes:

- **Components**: UI elements for displaying and interacting with data.
  - `producto` components: For managing products.
    - `producto-list.component.ts`: Displays a list of products.
    - `producto-form.component.ts`: Form for creating/editing products.
    - `producto-detail.component.ts`: Displays details of a specific product.
  - `tipo-producto` components: For managing product types.
    - `tipo-producto-list.component.ts`: Displays a list of product types.
    - `tipo-producto-form.component.ts`: Form for creating/editing product types.
    - `tipo-producto-detail.component.ts`: Displays details of a specific product type.

- **Services**: Handle HTTP requests to the backend.
  - `producto.service.ts`: Manages product-related API calls.
  - `tipo-producto.service.ts`: Manages product type-related API calls.

- **Models**: Define the structure of data objects.
  - `producto.model.ts`: Represents the product model.
  - `tipo-producto.model.ts`: Represents the product type model.

## Getting Started
To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Set up the backend**:
   - Navigate to the `backend` directory.
   - Restore dependencies and run the application.

3. **Set up the frontend**:
   - Navigate to the `frontend` directory.
   - Install dependencies using npm:
     ```
     npm install
     ```
   - Run the Angular application.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.