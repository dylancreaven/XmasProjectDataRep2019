import React from 'react';
import Card, { CardBody } from 'react-bootstrap/Card';
import axios from 'axios';

 
class Patient extends React.Component {
    constructor(){
        super();
        this.DeleteMovie=this.DeleteMovie.bind(this);
    }

DeleteMovie(e){
console.log("Delete Button clicked!");
    
axios.delete('http://localhost:4000/api/movies/'+this.props.movie._id)
.then()
.catch();

}
    render() {
        return <div>
            <Card>
                <Card.Body>

                    <Card.Header>{this.props.patient.title}</Card.Header>
                    <Card.Body>
                        <img height="700px" width="500px"src={this.props.movie.PatientIDPhoto}></img>
                        <footer>
                            {this.props.patient.DOB}
                        </footer>
                    </Card.Body>
                    <Card.Text>

                    </Card.Text>

                </Card.Body>
                
                
            </Card>

        </div>
    }

}
export default Patient;