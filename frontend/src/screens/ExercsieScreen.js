import React, { Component } from "react";
import { Link, Route, Router } from "react-router-dom";
import "./ExerciseScreen.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar";
import CreateScreen from "./CreateScreen";
import axios from "axios";

const Exercise = (props) => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.surname}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.exercise._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);
export default class ExerciseScreen extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercise/")
      .then((response) => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteExercise(id) {
    axios.delete("http://localhost:5000/exercise/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  }

  exerciseList() {
    return this.state.exercises.map((currentexercise) => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={this.deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  }
  render() {
    return (
      <div className="exercise">
        <Navbar />
        <table className="table" style={{ marginTop: 50 + "px" }}>
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Surname</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody> {this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}
