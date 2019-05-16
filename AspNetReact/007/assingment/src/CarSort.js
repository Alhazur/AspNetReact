import React, { Component } from "react";

class CarSort extends Component {
  render() {
    const { onSortBy } = this.props;
    return (
      <thead>
        <tr>
          <th className="xxx" onClick={() => onSortBy("name")}>
            Name
          </th>
          <th className="xxx" onClick={() => onSortBy("brand")}>
            Brand
          </th>
          <th className="xxx" onClick={() => onSortBy("year")}>
            Year
          </th>
          <th className="xxx">Options</th>
        </tr>
      </thead>
    );
  }
}

export default CarSort;
