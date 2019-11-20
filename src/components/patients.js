import React from 'react';
import Patient from './patient';

class Patients extends React.Component {

  render() {
    return this.props.myPatients.map((patient)=>{
        console.log(patient);
       return <Patient patient={patient}></Patient>

    });
   
  }
}

export default Patients;