import React, { Component } from "react";

class CreateCar extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  name="name"
                  placeholder="Car Name:"
                  required
                />
              </td>
              <td>
                <select onChange={this.props.onChange}>
                  <option value="">Brands</option>
                  {this.props.BrandOfCars.map((brand, index) => (
                    <option name="brand" key={index}>
                      {brand}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input
                  type="text"
                  name="year"
                  placeholder="Car Year:"
                  required
                />
              </td>
              <td>
                <button type="submit" className="btn btn-success btn-sm">
                  Add new car
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <div>
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
                    {this.props.BrandOfCars.map((brand, index) => (
                      <option name="brand" key={index}>
                        {brand}
                      </option>
                    ))}
                  </select>
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
        </div> */}
      </form>
    );
  }
}

export default CreateCar;

{
  /* <table className="table">
  <thead>
    <tr>
      <th>
        <label>Name: </label>
      </th>
      <th>
        <label>Choose a brand:</label>
      </th>
      <th>
        <label>Year: </label>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <input type="text" name="name" placeholder="Car Name:" required />
      </td>
      <td>
        <select onChange={this.props.onChange}>
          <option value="">Please choose a brand</option>
          {this.props.BrandOfCars.map((brand, index) => (
            <option name="brand" key={index}>
              {brand}
            </option>
          ))}
        </select>
      </td>
      <td>
        <input type="text" name="year" placeholder="Car Year:" required />
      </td>
      <td>Create Car</td>
      <td>
        <button type="submit" className="btn btn-success btn-sm">
          Add
        </button>
      </td>
    </tr>
  </tbody>
</table>; */
}
