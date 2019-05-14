import React, { Component } from "react";

class CarSort extends Component {
  render() {
    const { onSortBy } = this.props;
    return (
      <div className="table">
        <div className="header">
          <div onClick={() => onSortBy("name")}>Name</div>
          <div onClick={() => onSortBy("brand")}>Brand</div>
          <div onClick={() => onSortBy("year")}>Year</div>
        </div>
      </div>
    );
  }
}

export default CarSort;
