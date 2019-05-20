import React, { Component } from "react";

class CarEdit extends Component {
  constructor(props) {
    super(props);
    const { oneCar } = this.props;
    const { id, name, brand, year } = oneCar;

    this.state = {
      oneCar: oneCar,
      id: id,
      name: name,
      brand: brand,
      year: year
    };
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleBrand = event => {
    const { value } = event.target;
    console.log("handleBrand called: " + value);
    this.setState({ brand: value });
  };

  render() {
    const { id, name, brand, year } = this.state;

    return (
      <div>
        <div className="card-header">
          <input type="hidden" name="id" value={id} />
          <div className="form-group">
            <div className="col-4">
              <label>Name: </label>
              <input
                type="text"
                name="name"
                value={name}
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-4">
              <label>Brand: </label>
              <select onChange={this.handleBrand}>
                {this.props.BrandOfCars.map((brand, index) => (
                  <option name="brand" key={index}>
                    {brand}
                  </option>
                ))}
              </select>
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
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button
            className="btn btn-primary m-3"
            onClick={() => this.props.onSubmit({ id, name, brand, year })}
          >
            Save
          </button>
          <button
            onClick={this.props.onCancelOut}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default CarEdit;
