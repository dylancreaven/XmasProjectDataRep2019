import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/home';
import patientsList from "./components/patientsList";
import CreatePatient from './components/createPatient';



class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
      </Navbar>
       <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/createPatient" component={CreatePatient} />
            <Route exact path="/patientsList/" component={patientsList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;