const express = require('express')
const app = express()
const port = 4000
const path=require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const mongodb = 'mongodb+srv://admin:admin@dylancreavendatarep-jsauq.mongodb.net/xmasProject2019?retryWrites=true&w=majority';
mongoose.connect(mongodb,{useNewUrlParser:true});
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));
//
app.use(cors());
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
next();
});
const Schema = mongoose.Schema;
const patientSchema = new Schema({
    PatientName:String,
    DOB:String,
    PlaceOfBirth: String,
    PatientImage:String

})

const PatientModel = mongoose.model('patient',patientSchema);

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.get('/api/patients/:id',(req,res)=>{

    console.log(req.params.id);

    PatientModel.findById(req.params.id,(error,data)=>{
        res.json(data);



    });


})

//search
app.get('/search/patients/:name',(req,res)=>{
    console.log("Search: "+req.params.name);
    PatientModel.find({PatientName:req.params.name},(error,data)=>{
        res.json(data);

    })
})





///EDIT FUNCTION
app.put('/api/patients/:id',(req,res)=>{
        console.log("Edit: "+req.params.id);
        console.log(req.body);
        
        PatientModel.findByIdAndUpdate(req.params.id,
            req.body,
            {new:true},
            (error,data)=>{
                res.json(data);
            })

})
app.get('/api/patients/' ,(req,res)=>{


    PatientModel.find((error,data)=>{
       // console.log(data);
        res.json({patients:data});
    })
   

})


app.post('/api/patients' ,(req,res)=>{

    PatientModel.create({
        PatientName:req.body.PatientName,
        DOB:req.body.DOB,
        PlaceOfBirth:req.body.PlaceOfBirth,
        PatientImage:req.body.PatientImage
    })

    console.log("Patient Recieved");
    console.log(req.body.PatientName);
    console.log(req.body.DOB);
    console.log(req.body.PlaceOfBirth);
    console.log(req.body.PatientImage);


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






app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
    });
    
app.listen(port, () => console.log(`Example app listening on port ${port}!`))