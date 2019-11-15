import React from 'react';
import axios from 'axios';
class CreatePatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {PatientIDPhoto:'',PatientName: '',DOB: '',PlaceOfBirth:''};

    this.handleChangePatientName = this.handleChangePatientName.bind(this);
    this.handleChangeDOB = this.handleChangeDOB.bind(this);
    this.handleChangePatientIDPhoto = this.handleChangePatientIDPhoto.bind(this);
    this.handleChangePlaceOfBirth = this.handleChangePlaceOfBirth.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangePatientName(e) {
    this.setState({PatientName: e.target.value});
  }
  handleChangeDOB(e) {
    this.setState({DOB: e.target.value});
  }
  handleChangePatientIDPhoto(e) {
    this.setState({PatientIDPhoto: e.target.value});
  }
  handleChangePlaceOfBirth(e) {
    this.setState({PlaceOfBirth: e.target.value});
  }

  handleSubmit(e) {
    console.log('Patient Name: ' + this.state.PatientName+"\nDate Of Birth "+this.state.DOB+"\nPatient ID: "+this.state.PatientIDPhoto,+"\nPlace of Birth: "+this.state.PlaceOfBirth);
  
    const newPatient={

      Patient:this.state.PatientName,
      DOB:this.state.DOB,
      PatientIDPhoto:this.state.PatientIDPhoto,
    PlaceOfBirth:this.state.PlaceOfBirth
    }
  
    axios.post('http://localhost:4000/api/patients',newPatient)
  .then()
  .catch();
  this.setState({

    PatientName:'',
    DOB:'',
    PatientIDPhoto:'',
    PlaceOfBirth:''

  });
    e.preventDefault();
  }
  render() {
    return (
        <div>
        <h1>Create New Patient</h1>
        
      <form onSubmit={this.handleSubmit}>
          <div className="form-group">
        <label>
         Patient Name:  
         </label>
          <input 
          type="text" 
          className='form-control'
          value={this.state.PatientName} 
          onChange={this.handleChangePatientName} />
          </div>
    


          <div className="form-group">
        <label>
        Date Of Birth:  
         </label>
          <input 
          type="text" 
          className='form-control'
          value={this.state.DOB} 
          onChange={this.handleChangeDOB} />
          </div>
       
          <div className="form-group">
        <label>
        Patient Photo URL:  
         </label>
          
          <textarea 
          rows="3"
          className='form-control'
          value={this.state.PatientIDPhoto}
          onChange={this.handleChangePatientIDPhoto}
          >

     <div className="form-group">
        <label>
        Place of Birth:  
        </label>
          <input 
          type="text" 
          className='form-control'
          value={this.state.PlaceOfBirth} 
          onChange={this.handleChangePlaceOfBirth} />
          </div>


          </textarea>
          <div>
          <input type="submit" value="Submit" />
          </div>
          </div>
          
      </form>
      </div>
     
      
    );
  }
}

export default CreatePatient;