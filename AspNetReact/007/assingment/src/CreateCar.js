import React, { Component } from "react";

class CreateCar extends Component {
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Car Name:</label>
          <input type="text" name="carName" />
        </div>
        <button type="submit" className="btn btn-success btn-sm m-1">
          Add
        </button>
      </form>
    );
  }
}

export default CreateCar;
