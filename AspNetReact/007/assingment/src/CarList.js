import React, { Component } from "react";
import Car from "./Car";
//import Car from "./CreateCar";

class CarList extends Component {
  render() {
    const { cars, onDelete, onEdit, onDetails } = this.props;
    const carElements = cars.map(car => (
      <tbody className="card-body">
        <tr key={car.id}>
          <td>{car.name}</td>
          <td>{car.brand}</td>
          <td>{car.year}</td>
          <td>
            <Car
              onDelete={onDelete}
              onDetails={onDetails}
              onEdit={onEdit}
              car={car}
            />
          </td>
        </tr>
      </tbody>
    ));
    return <div>{carElements}</div>;
  }
}

export default CarList;

/* <div key={car.id} className="card">
        <div className="card-header">
          <Car onDelete={onDelete} onEdit={onEdit} car={car} />
        </div>
        <div className="card-body">
          {car.name} {car.brand} {car.year}{" "}
        </div>
      </div> */

// <section className="card-body">{carElements}</section>;

// (
//   <div>
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Brand</th>
//           <th>Year</th>
//           <th>Options</th>
//         </tr>
//       </thead>
//       <tbody>
//         {this.props.cars.length > 0 ? (
//           this.props.cars.map(car => (
//             <tr key={car.id}>
//               <td>{car.name}</td>
//               <td>{car.brand}</td>
//               <td>{car.year}</td>
//               <td>
//                 <Car
//                   onDelete={this.props.onDelete}
//                   onEdit={this.props.onEdit}
//                   car={this.props.car}
//                 />
//               </td>
//             </tr>
//           ))
//         ) : (
//           <tr>
//             <td colSpan={3}>No cars</td>
//           </tr>
//         )}
//       </tbody>
//     </table>
//   </div>
// );
