import Patients from './patients';
import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';
class ShowPatients extends React.Component {

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
        <Patients myPatient={this.state.patients}></Patients>
        <Link to={"/CreatePatient/"} className="btn btn-primary">click here to Add a Patient</Link>
       
        </div>
    )
  }
}

export default ShowPatients;