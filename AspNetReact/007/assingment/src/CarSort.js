import React, { Component } from "react";

class CarSort extends Component {
  render() {
    const { onSortBy } = this.props;
    return (
      <thead className="card-header">
        <tr>
          <th onClick={() => onSortBy("name")}>Name</th>
          <th onClick={() => onSortBy("brand")}>Brand</th>
          <th onClick={() => onSortBy("year")}>Year</th>
          <th>Options</th>
        </tr>
      </thead>
    );
  }
}

export default CarSort;

{
  /* <div className="table">
  <div className="header">
    <div onClick={() => onSortBy("name")}>Name</div>
    <div onClick={() => onSortBy("brand")}>Brand</div>
    <div onClick={() => onSortBy("year")}>Year</div>
  </div>
</div> */
}
