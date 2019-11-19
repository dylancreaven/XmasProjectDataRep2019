import React from 'react';
import Card, { CardBody } from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from 'react-router-dom';
 
class OnePatient extends React.Component {
    constructor(){
        super();
        this.DeletePatient=this.DeletePatient.bind(this);
    }

DeletePatient(e){
console.log("Delete Button clicked!");
    
axios.delete('http://localhost:4000/api/patients/'+this.props.patient._id)
.then()
.catch();

}
    render() {
        return <div>
            <Card>
                <Card.Body>

                    <Card.Header>{this.props.patient.patientName}</Card.Header>

                    <Card.Text>
                        {this.props.patient.patientDOB}
                        {this.props.patient.patientPlaceOfBirth}
                    </Card.Text>

                </Card.Body>
                <Button variant="danger" onClick={this.DeletePatient}>Delete Patient</Button>
                <Link to={"/edit/"+this.props.patient._id} className="btn btn-primary">Edit</Link>

            </Card>
            <Link to={"/createPatient/"} className="btn btn-primary">Add a Patient</Link>
        </div>
    }

}
export default OnePatient;