const express = require('express')
const app = express()
const port = 4000
const path=require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const mongodb = 'mongodb+srv://admin:admin@dylancreavendatarep-jsauq.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongodb,{useNewUrlParser:true});
app.use(cors());
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
next();
});
app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());



//app.get('/', (req, res) => res.send('Hello World!'))





app.get('/api/patients/:id',(req,res)=>{

    console.log(req.params.id);

    PatientModel.findById(req.params.id,(error,data)=>{
        res.json(data);



    });


})

///EDIT FUNCTION
app.put('/api/patients/:id',(req,res)=>{
        console.log("Edit: "+req.params.id);
        console.log(req.body);
        
        PatientModel.findByIdAndUpdate(req.params.id,req.body,{new:true},
            (error,data)=>{
                
                if(error)
                {
                    res.json(error)

                }
                res.json(data);
            })

})
app.get('/api/patients' ,(req,res)=>{


    PatientModel.find((error,data)=>{

        res.json({patients:data});
    })
   

})


app.post('/api/patients' ,(req,res)=>{

    PatientModel.create({
        name:req.body.patientName,
        dob:req.body.PatientDOB,
        placeofbirth:req.body.PatientPlaceOFBirth
    })

    console.log("Patient Recieved");
    console.log(req.body.Title);
    console.log(req.body.Year);
    console.log(req.body.Poster);


})


//delete
app.delete('/api/patients/:id',(req,res)=>{

    console.log(req.params.id);
    PatientModel.deleteOne({_id:req.params.id},(error,data)=>{
        if(error)
        {
            req.json(error); 
        }
        req.json(data);
    })

})



const Schema = mongoose.Schema;
const patientSchema = new Schema({
    patientName:String,
    PatientDOB:String,
    PatientPlaceOFBirth: String

})

const PatientModel = mongoose.model('movie',movieSchema);



app.listen(port, () => console.log(`Example app listening on port ${port}!`))