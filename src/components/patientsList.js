import Patients from './patients';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


class PatientsList extends React.Component {
  constructor() {
    super();

    this.ReloadDataMethod = this.ReloadDataMethod.bind(this);
  }

  state = {
    patients: []


  };

  componentDidMount() {

    axios.get('http://localhost:4000/api/patients')
      .then((response) => {
        this.setState({ patients: response.data.patients })

      })
      .catch((error) => {
        console.log(error);
      });



  }

  ReloadDataMethod() {
    axios.get('http://localhost:4000/api/patients')
      .then((response) => {
        this.setState({ patients: response.data.patients })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>All Patients</h1>

        <Link to={"/createPatient/"} className="btn btn-info">Click here to Add a Patient</Link>
        <br />
        <br />
        <br />
        <Patients myPatients={this.state.patients} ReloadDataMethod={this.ReloadDataMethod}></Patients>


      </div>
    )
  }
}

export default PatientsList;