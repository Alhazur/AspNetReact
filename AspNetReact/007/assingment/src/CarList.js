import React, { Component } from "react";
import Car from "./Car";
//import Car from "./CreateCar";

class CarList extends Component {
  render() {
    const { cars, onDelete, onEdit, onDetails } = this.props;
    // const carElements = cars.map(car => (
    //   <tbody className="card-body">
    //     <tr key={car.id}>
    //       <td>{car.name}</td>
    //       <td>{car.brand}</td>
    //       <td>{car.year}</td>
    //       <td>
    //         <Car
    //           onDelete={onDelete}
    //           onDetails={onDetails}
    //           onEdit={onEdit}
    //           car={car}
    //         />
    //       </td>
    //     </tr>
    //   </tbody>
    //));
    return (
      <div>
        <tbody>
          {cars.length > 0 ? (
            cars.map(car => (
              <tr key={car.id} class="table-secondary">
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
      </div>
    );
  }
}

export default CarList;

// const carElements = cars.map(car => (
//   <tbody className="card-body">
//     <tr key={car.id}>
//       <td>{car.name}</td>
//       <td>{car.brand}</td>
//       <td>{car.year}</td>
//       <td>
//         <Car
//           onDelete={onDelete}
//           onDetails={onDetails}
//           onEdit={onEdit}
//           car={car}
//         />
//       </td>
//     </tr>
//   </tbody>
// ));
// return <div>{carElements}</div>;

/* <div>
        <tbody>
          {cars.length > 0 ? (
            cars.map(car => (
              <tr key={car.id}>
                <td>{car.name}</td>
                <td>{car.brand}</td>
                <td>{car.year}</td>
                <td>
                  <Car onDelete={onDelete} onEdit={onEdit} car={car} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No cars</td>
            </tr>
          )}
        </tbody>
      </div> */
