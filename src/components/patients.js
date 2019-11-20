import React from 'react';
import Patient from './patient';

class Patients extends React.Component {

  render() {
    return this.props.myPatient.map((patients)=>{
        console.log(patients);
       return <Patient patients={patients}></Patient>

    });
   
  }
}

export default Patients;