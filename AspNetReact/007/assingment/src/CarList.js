import React from "react";

const CarList = props => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Year</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {props.carList.length > 0 ? (
            props.carList.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.brand}</td>
                <td>{row.year}</td>
                <td>
                  <button
                    onClick={props.onEdit}
                    className="btn btn-primary btn-sm m-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => props.onDelete(this.props.id)}
                    className="btn btn-danger btn-sm m-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No cars</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CarList;
