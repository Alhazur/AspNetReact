using Microsoft.EntityFrameworkCore.Migrations;

namespace AspNetReact.Migrations
{
    public partial class BrandOfCars : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Brand",
                table: "Cars",
                nullable: false,
                oldClrType: typeof(string));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Brand",
                table: "Cars",
                nullable: false,
                oldClrType: typeof(int));
        }
    }
}
