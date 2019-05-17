import React, { Component } from "react";

class CreateCar extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div>
          <div className="col-8">
            <div className="row">
              <div className="col-3">
                <div className="form-group">
                  <label>Name: </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Car Name:"
                    required
                  />
                </div>
              </div>
              <div className="col-3">
                <div className="form-group">
                  <label>Choose a brand:</label>
                  <select onChange={this.props.onChange}>
                    <option value="">Please choose a brand</option>
                    <option value="Some car">Some car</option>
                  </select>
                  {/* <select onChange={this.props.onChange}>
                    <option value="">Please choose a brand</option>
                    {this.props.BrandOfCars.map((brands, index) => {
                      <option name="brands" key={index}>
                        {brands}
                      </option>;
                    })}
                  </select> */}
                </div>
              </div>
              <div className="col-3">
                <div className="form-group">
                  <label>Year: </label>
                  <input
                    type="text"
                    name="year"
                    placeholder="Car Year:"
                    required
                  />
                </div>
              </div>
              <div className="col-3">
                <div className="form-group">
                  <button type="submit" className="btn btn-success btn-sm">
                    Create Car
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default CreateCar;
