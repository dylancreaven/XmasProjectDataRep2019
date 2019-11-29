import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import Logo from '../Photos/UHG.png';
import Image from 'react-bootstrap/Image';

class Home extends React.Component {

  render() {
    
    return (
      <div className="App">
       <br/><br/><br/><br/><br/><br/>
        <Image src={Logo} alt="UHG Logo" height="200px" width="200px"/>
        <h2 className="header">Welcome the University Hospital Galway Patient Database</h2>
        <Link to={"/login/"} className="btn btn-primary">Click here to Login</Link>
      </div>
    );
  }
}


export default Home;