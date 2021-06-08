import React, { Component } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import Navbar from "./navbar";

export default class CreateScreen extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeSurname = this.onChangeSurname.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      surname: "",
      description: "",
      date: new Date(),
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangeSurname(e) {
    this.setState({
      surname: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      surname: this.state.surname,
      description: this.state.description,
      date: this.state.date,
    };

    console.log(exercise);
    axios
      .post("http://localhost:5000/exercise/add", exercise)
      .then((res) => console.log(res.data));
    window.location = "/exercises";
  }

  render() {
    return (
      <div>
        <Navbar />
        <h3>Create Exercise</h3>
        <form onSubmit={this.onSubmit} style={{ width: 50 + "%" }}>
          <div className="form-group">
            <label>Username: </label>
            <input
              ref="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label>Surname: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.surname}
              onChange={this.onChangeSurname}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>

          <div className="form-group">
            <label>Date: </label>
            <div>
              <input
                type="date"
                min="1960-01-01"
                max="2021-06-08"
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Create" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
