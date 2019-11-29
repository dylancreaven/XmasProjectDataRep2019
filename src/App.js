import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/home';
import PatientsList from "./components/patientsList";
import CreatePatient from './components/createPatient';
import EditPatient from './components/editPatient';
import Login from './components/login';
import Logo from './Photos/UHG.png';
import Image from 'react-bootstrap/Image';


class App extends React.Component {

  render() {
    return (
      <div className="background">
      <BrowserRouter>
        <div>
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="/"><Image src={Logo} alt="UHG Logo" height="50px" width="50px"/></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/patientsList/">Patients</Nav.Link>
          
        </Nav>
      </Navbar>
       <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/createPatient/" component={CreatePatient} />
            <Route exact path="/edit/:id" component={EditPatient} />
            <Route exact path="/patientsList/" component={PatientsList} />
            <Route exact path="/login/" component={Login} />
       </Switch>
      
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;