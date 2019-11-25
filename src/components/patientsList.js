import Patients from './patients';
import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';
class PatientsList extends React.Component {

    state={
        patients:[]
            
            
    };
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
        <Link to={"/createPatient/"} className="btn btn-info">Click here to Add a Patient</Link>
        <Patients myPatients={this.state.patients}></Patients>
        
       
        </div>
    )
  }
}

export default PatientsList;