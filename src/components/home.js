import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import Logo from '../Photos/UHG.png';
import Image from 'react-bootstrap/Image';
class Home extends React.Component {

  render() {
    
    return (
      <div className="App">
       <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> 
     
        <h2 className="header">Welcome the University Hospital Galway Patient Database<Image src={Logo} alt="UHG Logo" height="50px" width="50px"/></h2>
        <Link to={"/patientsList/"} className="btn btn-primary">Click here to see Patients</Link>
      </div>
    );
  }
}


export default Home;