import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
class Home extends React.Component {

  render() {
    
    return (
      <div className="App">
       <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> 
     
        <h2>Welcome to My XMAS Project HOMEPAGE</h2>
        <Link to={"/patientsList/"} className="btn btn-primary">Click here to see Patients</Link>
      </div>
    );
  }
}


export default Home;