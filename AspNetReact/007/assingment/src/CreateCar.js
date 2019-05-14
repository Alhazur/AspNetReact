import React, { Component } from "react";

class CreateCar extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit} key={indexedDB}>
        <div className="card-header m-4">
          <div className="col-12">
            <div className="row">
              <div className="col-3">
                <div className="form-group">
                  <input type="text" name="name" placeholder="Car Name:" />
                </div>
              </div>
              <div className="col-3">
                <div className="form-group">
                  <input type="text" name="brand" placeholder="Car Brand:" />
                </div>
              </div>
              <div className="col-3">
                <div className="form-group">
                  <input type="text" name="year" placeholder="Car Year:" />
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
