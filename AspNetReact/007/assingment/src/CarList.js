import React, { Component } from "react";
import Car from "./Car";

class CarList extends Component {
  render() {
    const { cars, onDelete, onEdit, onDetails } = this.props;
    return (
      <tbody className="card-body">
        {cars.length > 0 ? (
          cars.map((car, index) => (
            <tr key={index} className="table-secondary">
              <td>{car.name}</td>
              <td>{car.brand}</td>
              <td>{car.year}</td>
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
