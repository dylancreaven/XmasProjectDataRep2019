import React from 'react';
import Patient from './patient';

class Patients extends React.Component {

  render() {
    return this.props.myPatients.map((patient)=>{
        console.log(patient);
       return <Patient key={patient._id} patient={patient} 
       ReloadDataMethod={this.props.ReloadDataMethod}></Patient>

    });
   
  }
}

export default Patients;