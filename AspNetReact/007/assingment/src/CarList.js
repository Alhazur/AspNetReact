import React, { Component } from "react";
import Car from "./Car";

class CarList extends Component {
  render() {
    const { cars, onDelete, onEdit, onDetails } = this.props;
    return (
      <tbody>
        {cars.length > 0 ? (
          cars.map(car => (
            <tr key={car.id} className="table-secondary">
              <td className="xxx">{car.name}</td>
              <td className="xxx">{car.brand}</td>
              <td className="xxx">{car.year}</td>
              <td>
                <Car
                  onDelete={onDelete}
                  onEdit={onEdit}
                  car={car}
                  onDetails={onDetails}
                />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No cars</td>
          </tr>
        )}
      </tbody>
    );
  }
}

export default CarList;
