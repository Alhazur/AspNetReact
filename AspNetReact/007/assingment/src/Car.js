import React, { Component } from "react";
import CarList from "./CarList";

class Car extends Component {
  render() {
    return (
      <div>
        {/* {this.props.map(car => (
          <li>
            {car.name}
            {car.brand}
            {car.year}
          </li>
        ))} */}
        <button
          onClick={() => this.props.onEdit}
          className="btn btn-primary btn-sm m-1"
        >
          Edit
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-1"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Car;

//<h3>{new Date().toDateString()}</h3>;
