import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/home';
import PatientsList from "./components/patientsList";
import CreatePatient from './components/createPatient';
import EditPatient from './components/editPatient';



class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/patientsList/">Patients</Nav.Link>
        </Nav>
      </Navbar>
       <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/createPatient/" component={CreatePatient} />
            <Route exact path="/edit/" component={EditPatient} />
            <Route exact path="/patientsList/" component={PatientsList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;