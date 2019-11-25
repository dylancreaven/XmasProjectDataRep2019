import Patients from './patients';
import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
class PatientsList extends React.Component {
  constructor(){
    super();
    this.SearchPatient=this.SearchPatient.bind(this);
}

    state={
        patients:[]
            
            
    };
    SearchPatient(e){
      console.log("Search Button clicked!");
          
      axios.get('http://localhost:4000/search/patients/'+this.SearchPatient)
      .then()
      .catch();
      
      }
    componentDidMount(){

        axios.get('http://localhost:4000/api/patients')
        .then((response)=>{
              this.setState({patients:response.data.patients})
              
        })
        .catch((error)=>{
          console.log(error);
        });



    }



  render() {
    return (
        <div>
        <h1>All Patients</h1>
        <Form inline>
          <input type="text" className="input" placeholder="Search" />
          <Button onClick={this.SearchPatient}>Search</Button>
      </Form>
        <Link to={"/createPatient/"} className="btn btn-info">Click here to Add a Patient</Link>
        <Patients myPatients={this.state.patients}></Patients>
        
       
        </div>
    )
  }
}

export default PatientsList;