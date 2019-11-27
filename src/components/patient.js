import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../App.css';

class Patient extends React.Component {



    constructor(){
        super();
        this.DeletePatient=this.DeletePatient.bind(this);
    }

DeletePatient(e){
console.log("Delete Button clicked!");
    
axios.delete('http://localhost:4000/api/patients/'+this.props.patient._id)
.then(()=>{
    this.props.ReloadDataMethod();
  })
  .catch();

}

    render() {
        return <div>
            <Card bg="dark">
                <Card.Body>

                    <Card.Header>
                     {this.props.patient.PatientName}
                    </Card.Header>
                    <Card.Body>
                     <img height="350px" width="300px"src={this.props.patient.PatientImage}></img>
                    </Card.Body>
                    <Card.Text>
                        Place of Birth: {this.props.patient.PlaceOfBirth}
                    </Card.Text>
                    <Card.Text>
                       Date Of Birth: {this.props.patient.DOB}
                    </Card.Text>

                </Card.Body>
                <div>
               
                <Link to={"/edit/"+this.props.patient._id}  className="btn btn-warning" >Edit</Link>
                &nbsp;&nbsp;&nbsp;
                
                <Button variant="danger" className="button" onClick={this.DeletePatient}>Delete</Button>
                </div>
            </Card>
           
        </div>
    }

}
export default Patient;