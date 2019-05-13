import React, { Component } from "react";
import "./App.css";
import CarList from "./CarList";
import CreateCar from "./CreateCar";

class App extends Component {
  state = {
    cars: [
      { id: 1, name: "M5", brand: "BMW", year: "2019" },
      { id: 2, name: "A8", brand: "AUDI", year: "2019" },
      { id: 3, name: "F50", brand: "Ferarri", year: "2019" }
    ],
    carName: "",
    carBrand: ""
  };

  handleChange = event => {
    this.setState({ carName: event.target.value });
  };

  onSubmit(event) {
    event.preventDefault();
  }

  handleEdit = () => {
    console.log("Edited");
  };

  handleDelete = carid => {
    const cars = this.state.cars.filter(c => c.id !== carid);
    this.setState({ cars: cars });
    console.log("deleted", carid);
  };

  render() {
    return (
      <div className="App">
        <h1>007'-</h1>
        <CreateCar onChange={this.handleChange} onSubmit={this.onSubmit} />
        <CarList
          cars={this.state.cars}
          onEdit={this.handleEdit}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
