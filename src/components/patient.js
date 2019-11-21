import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from 'react-router-dom';
 
class Patient extends React.Component {
    constructor(){
        super();
        this.DeletePatient=this.DeletePatient.bind(this);
    }

DeletePatient(e){
console.log("Delete Button clicked!");
    
axios.delete('http://localhost:4000/api/patients/'+this.props.patients._id)
.then()
.catch();

}
    render() {
        return <div>
            <Card>
                <Card.Body>

                    <Card.Header>{this.props.patients.patientName}</Card.Header>

                    <Card.Text>
                     {this.props.patients.patientPlaceOfBirth}
                        {this.props.patients.patientDOB}
                        {this.props.patients.patientPlaceOfBirth}
                    </Card.Text>

                </Card.Body>
                <Link to={"/edit/"+this.props.patients._id} className="btn btn-primary">Edit</Link>
                <Button variant="danger" onClick={this.DeletePatient}>Delete Patient</Button>
                
            </Card>
           
        </div>
    }

}
export default Patient;