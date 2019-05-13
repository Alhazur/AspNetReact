import React, { Component } from "react";
import Car from "./Car";
//import Car from "./CreateCar";

class CarList extends Component {
  render() {
    const { cars, onDelete, onEdit } = this.props;
    const carElements = cars.map(car => (
      <li>
        {car.name}
        {car.brand}
        {car.year}
        <Car key={car.id} onDelete={onDelete} onEdit={onEdit} cars={cars} />
      </li>
    ));
    return <ol>{carElements}</ol>;
  }
}

export default CarList;

// render() {
//   return (
//     <div>
//       {this.props.map(car => (
//         <Car
//           key={car.id}
//           onDelete={this.props.onDelete}
//           onEdit={this.props.onEdit}
//           car={car}
//         />
//       ))}
//     </div>
//   );
// }

//  const CarList = props => {
//    return (
//      <div>
//        <table>
//          <thead>
//            <tr>
//              <th>Name</th>
//              <th>Brand</th>
//              <th>Year</th>
//              <th>Options</th>
//            </tr>
//          </thead>
//          <tbody>
//            {props.cars.length > 0 ? (
//              props.cars.map((row, index) => (
//                <tr key={index}>
//                  <td>{row.name}</td>
//                  <td>{row.brand}</td>
//                  <td>{row.year}</td>
//                  <td>
//                    <button
//                      onClick={props.onEdit}
//                      className="btn btn-primary btn-sm m-1"
//                    >
//                      Edit
//                    </button>
//                    <button
//                      onClick={() => props.onDelete(this.props.id)}
//                      className="btn btn-danger btn-sm m-1"
//                    >
//                      Delete
//                    </button>
//                  </td>
//                </tr>
//              ))
//            ) : (
//              <tr>
//                <td colSpan={3}>No cars</td>
//              </tr>
//            )}
//          </tbody>
//        </table>
//      </div>
//    );
//  };

//  export default CarList;
