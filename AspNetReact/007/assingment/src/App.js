import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import CarList from "./CarList";
import CreateCar from "./CreateCar";
import CarEdit from "./CarEdit";
import CarSort from "./CarSort";
import NavBar from "./NavBar";
import CarDetails from "./CarDetails";

class App extends Component {
  state = {
    cars: [
      { id: 1, name: "M5", brand: "BMW", year: "2019" },
      { id: 2, name: "A8", brand: "AUDI", year: "2019" },
      { id: 3, name: "F50", brand: "Ferarri", year: "2019" }
    ],
    editCar: false,
    detailsCar: false,
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
            this.setState({
              dataMsg: "Sever Access Denied: " + error.response.status
            });
          } else if (error.request) {
            this.setState({ dataMsg: "Sever dident respond" });
          } else {
            this.setState({ dataMsg: "Failed to send request" });
          }
        }.bind(this)
      );
  }

  compareBy = key => {
    return function(a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  };

  sortBy = key => {
    let sortCar = [...this.state.cars];
    sortCar.sort(this.compareBy(key));
    this.setState({ cars: sortCar });
  };

  onSubmit = event => {
    event.preventDefault();

    const target = event.target;

    const car = {
      name: target.name.value,
      brand: target.brand.value,
      year: target.year.value
    };
    axios.post(`https://localhost:44309//api/Car/`, car).then(res => {
      const newCar = res.data;
      console.log(newCar);
      const { cars } = this.state;

      cars.push(newCar);
      this.setState({ cars });
    });
  };

  onEditSubmit = car => {
    let oldCar = this.state.cars.find(c => c.id === car.id);

    oldCar = {
      id: car.id,
      name: car.name,
      brand: car.brand,
      year: car.year
    };
    const cars = this.state.cars.filter(c => c.id !== car.id);

    cars.push(oldCar);
    this.setState({ cars, editCar: false });
  };

  handleEdit = car => {
    this.setState({ editCar: true, oneCar: car });
  };

  handleDetails = car => {
    this.setState({ detailsCar: true, oneCar: car });
  };

  handleDelete = carid => {
    const cars = this.state.cars.filter(c => c.id !== carid);
    this.setState({ cars: cars });
    console.log("Was deleted", carid);
    axios.delete(`https://localhost:44309//api/Car/` + carid).then(res => {
      const cars = res.data;
    });
  };

  render() {
    if (this.state.editCar === true) {
      return (
        <CarEdit oneCar={this.state.oneCar} onSubmit={this.onEditSubmit} />
      );
    }
    if (this.state.detailsCar === true) {
      return (
        <CarDetails oneCar={this.state.oneCar} onDetails={this.handleDetails} />
      );
    }

    return (
      <React.Fragment>
        <NavBar />
        <div className="App">
          <CreateCar onSubmit={this.onSubmit} />

          <CarSort onSortBy={this.sortBy} />
          <CarList
            cars={this.state.cars}
            onEdit={this.handleEdit}
            onDetails={this.handleDetails}
            onDelete={this.handleDelete}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
