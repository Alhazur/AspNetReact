import React, { Component } from "react";

class CarDetails extends Component {
  constructor(props) {
    super(props);
    const { oneCar } = this.props;

    this.state = {
      oneCar: oneCar
    };
  }
  render() {
    const { name, brand, year } = this.state.oneCar;
    return (
      <div className="card-header">
        <div className="form-group">
          <div className="col-4">
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={name}
              className="form-control"
              class="list-group-item disabled"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-4">
            <label>Brand: </label>
            <input
              type="text"
              name="brand"
              value={brand}
              className="form-control"
              class="list-group-item disabled"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-4">
            <label>Year: </label>
            <input
              type="text"
              name="year"
              value={year}
              className="form-control"
              class="list-group-item disabled"
            />
          </div>
        </div>
        <button onClick={this.props.onCancelOut} className="btn btn-secondary">
          Cancel
        </button>
      </div>
    );
  }
}

export default CarDetails;
