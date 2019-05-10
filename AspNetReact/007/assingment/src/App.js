import React, { Component } from "react";
import "./App.css";
import CarList from "./CarList";

class App extends Component {
  state = {
    cars: [
      { id: 1, name: "M5", brand: "BMW", year: "2019" },
      { id: 2, name: "A8", brand: "AUDI", year: "2019" },
      { id: 3, name: "F50", brand: "Ferarri", year: "2019" }
    ]
  };

  handleEdit = () => {
    console.log("Edited");
  };

  handleDelete = id => {
    const cars = this.state.cars.filter(c => c.id !== id);
    this.state({ cars });
    console.log("deleted");
  };

  render() {
    const { cars } = this.state;
    return (
      <div className="App">
        <h1>007'-</h1>
        <button className="btn btn-success btn-sm" />
        Create a new car
        <CarList
          carList={cars}
          onEdit={this.handleEdit}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
