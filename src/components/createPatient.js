import React from 'react';
import axios from 'axios';
class CreatePatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {PatientName: '',DOB: '',PlaceOfBirth:''};

    this.handleChangePatientName = this.handleChangePatientName.bind(this);
    this.handleChangeDOB = this.handleChangeDOB.bind(this);
    this.handleChangePlaceOfBirth = this.handleChangePlaceOfBirth.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangePatientName(e) {
    this.setState({PatientName: e.target.value});
  }
  handleChangeDOB(e) {
    this.setState({DOB: e.target.value});
  }
  handleChangePlaceOfBirth(e) {
    this.setState({PlaceOfBirth: e.target.value});
  }

  handleSubmit(e) {
    console.log('Patient Name: ' + this.state.PatientName+"\nDate Of Birth "+this.state.DOB+"\nPatient ID: "+this.state.PatientIDPhoto,+"\nPlace of Birth: "+this.state.PlaceOfBirth);
  
    const newPatient={

      Patient:this.state.PatientName,
      DOB:this.state.DOB,
      
    PlaceOfBirth:this.state.PlaceOfBirth
    }
  
    axios.post('http://localhost:4000/api/patients',newPatient)
  .then()
  .catch();
  this.setState({

    PatientName:'',
    DOB:'',
    PlaceOfBirth:''

  });
    e.preventDefault();
  }
  render() {
    return (
        <div>
        <h1>Hello from Create Component!</h1>
        
      <form onSubmit={this.handleSubmit}>
          <div className="form-group">
        <label>
         PatientName:  
         </label>
          <input 
          type="text" 
          className='form-control'
          value={this.state.PatientName} 
          onChange={this.handleChangePatientName} />
          </div>
    


          <div className="form-group">
        <label>
        DOB: 
         </label>
          <input 
          type="text" 
          className='form-control'
          value={this.state.DOB} 
          onChange={this.handleChangeDOB} />
          </div>

          <div className="form-group">
        <label>
        Place of Birth 
         </label>
          <input 
          type="text" 
          className='form-control'
          value={this.state.PlaceOfBirth} 
          onChange={this.handleChangePlaceOfBirth} />
          </div>
       
          
          
      </form>
      </div>
     
      
    );
  }
}

export default CreatePatient;