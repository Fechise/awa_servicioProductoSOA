using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ServicioClientesSOA.Migrations
{
    /// <inheritdoc />
    public partial class AddForeignKeyRelation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Productos_IdTipo",
                table: "Productos",
                column: "IdTipo");

            migrationBuilder.AddForeignKey(
                name: "FK_Productos_TiposProducto_IdTipo",
                table: "Productos",
                column: "IdTipo",
                principalTable: "TiposProducto",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Productos_TiposProducto_IdTipo",
                table: "Productos");

            migrationBuilder.DropIndex(
                name: "IX_Productos_IdTipo",
                table: "Productos");
        }
    }
}
