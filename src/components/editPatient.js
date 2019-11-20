import React from 'react';
import axios from 'axios';


class EditPatient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {PatientName: '',DOB: '',PlaceOfBirth:'',patientImage:''};
    
        this.handleChangePatientName = this.handleChangePatientName.bind(this);
        this.handleChangeDOB = this.handleChangeDOB.bind(this);
        this.handleChangePlaceOfBirth = this.handleChangePlaceOfBirth.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
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
      getBase64(file) {
        let document = "";
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            document = reader.result;
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    
        return document;
    }
      handleChangeImage(e) {
        this.getBase64(e.target.files[0],(base64)=>{
          this.setState({patientImage:base64});
    
        })
      }
    
      handleSubmit(e) {
        console.log('Patient Name: ' + this.state.PatientName+"\nDate Of Birth "+this.state.DOB+"\nPlace of Birth: "+this.state.PlaceOfBirth+"\nPatient ID: "+this.state.patientImage);
      
        const newPatient={
    
          PatientName:this.state.PatientName,
          DOB:this.state.DOB,
          PlaceOfBirth:this.state.PlaceOfBirth,
          patientImage:this.state.patientImage
        }
      
        axios.post('http://localhost:4000/api/patients/'+this.state._id,newPatient)
      .then()
      .catch();
      
      this.setState({
    
        PatientName:'',
        DOB:'',
        PlaceOfBirth:'',
        patientImage:''
    
      });
        e.preventDefault();
      }



  componentDidMount(){
    alert(this.props.match.params.id);
    axios.get("http://localhost:4000/api/patients/"+this.props.match.params.id)
    .then((response)=>{
      this.setState({
        _id:response.data._id,
        PatientName:response.data.PatientName,
        DOB:response.data.DOB,
        PlaceOfBirth:response.data.PlaceOfBirth,
        patientImage:response.data.patientImage

      })
    })
    .catch();
  }
  render() {
    return (
        <div>
        <h1>Add a Patient:</h1>
        
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
          <div>
          <label>
        Upload Image 
         </label>
          <input 
          type="file" 
          className='form-control'
          value={this.state.patientImage} 
          onChange={this.handleChangeImage} />
          </div>
       
          <div>
          
          <input type="submit" value="Edit Patient" />
          
          </div>
          
      </form>
      </div>
     
      
    );
  }
}

export default EditPatient;