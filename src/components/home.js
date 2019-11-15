import React from 'react';
import '../App.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
class Home extends React.Component {

  render() {
    return (
      <div className="App">
       
        <h2 text-align="center">Welcome to My XMAS Project HOMEPAGE</h2>
        <Link to={"/patientsList/"} className="btn btn-primary">Click here to see Patients</Link>
      </div>
    );
  }
}


export default Home;