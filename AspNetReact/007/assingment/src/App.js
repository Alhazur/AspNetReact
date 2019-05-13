import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import CarList from "./CarList";
import CreateCar from "./CreateCar";
import CarEdit from "./CarEdit";

class App extends Component {
  state = {
    cars: [
      { id: 1, name: "M5", brand: "BMW", year: "2019" },
      { id: 2, name: "A8", brand: "AUDI", year: "2019" },
      { id: 3, name: "F50", brand: "Ferarri", year: "2019" }
    ],
    editCar: false,
    oneCar: [],
    dataFail: false,
    dataMsg: null
  };
  componentDidMount() {
    axios
      .get(`https://localhost:44309//api/Car`)
      .then(res => {
        const cars = res.data;
        this.setState({ cars });
      })
      .catch(
        function(error) {
          this.setState({ dataFail: true });
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            this.setState({
              dataMsg: "Sever Access Denied: " + error.response.status
            });
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            this.setState({ dataMsg: "Sever dident respond" });
          } else {
            // Something happened in setting up the request that triggered an Error
            this.setState({ dataMsg: "Failed to send request" });
          }
        }.bind(this)
      );
  }

  onSubmit = event => {
    event.preventDefault();

    const target = event.target;

    const car = {
      name: target.name.value,
      brand: target.brand.value,
      year: target.year.value
    };

    const { cars } = this.state;

    cars.push(car);
    this.setState({ cars, id: this.state.id + 1 });
  };

  onEditSubmit = car => {
    let oldCar = this.state.cars.find(c => c.id === car.id);

    oldCar = {
      name: car.name,
      brand: car.brand,
      year: car.year
    };
    const cars = this.state.cars.filter(c => c.id !== car.id);
    console.log(cars);

    cars.push(oldCar);
    this.setState({ cars, editCar: false });
  };

  handleEdit = car => {
    this.setState({ editCar: true, oneCar: car });
  };

  handleDelete = carid => {
    const cars = this.state.cars.filter(c => c.id !== carid);
    this.setState({ cars: cars });
    console.log("Was deleted", carid);
  };

  render() {
    if (this.state.editCar === true) {
      return (
        <CarEdit oneCar={this.state.oneCar} onSubmit={this.onEditSubmit} />
      );
    }

    return (
      <div className="App">
        <CreateCar onSubmit={this.onSubmit} />
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
