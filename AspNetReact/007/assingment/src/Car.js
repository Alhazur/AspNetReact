import React, { Component } from "react";

class Car extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onEdit(this.props.car)}
          className="btn btn-primary btn-sm m-1"
        >
          Edit
        </button>
        <button
          onClick={() => this.props.onDetails(this.props.car)}
          className="btn btn-info btn-sm m-1"
        >
          Details
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.car.id)}
          className="btn btn-danger btn-sm m-1"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Car;
