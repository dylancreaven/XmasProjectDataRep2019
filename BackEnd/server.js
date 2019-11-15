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



app.get('/', (req, res) => res.send('Hello World!'))

app.get('/whatever',(req,res)=> {
    
    res.send('testnew');
})

app.get('/hello/:name' ,(req,res)=>{
    console.log(req.params.name);
    res.send("Hello "+req.params.name);

})

app.get('/api/movies/:id',(req,res)=>{

    console.log(req.params.id);

    MovieModel.findById(req.params.id,(error,data)=>{
        res.json(data);



    });


})

///EDIT FUNCTION
app.put('/api/movies/:id',(req,res)=>{
        console.log("Edit: "+req.params.id);
        console.log(req.body);
        
        MovieModel.findByIdAndUpdate(req.params.id,req.body,{new:true},
            (error,data)=>{
                //console.log(error);
               // console.log(data);
                //res.json(data);
                if(error)
                {
                    res.json(error)

                }
                res.json(data);
            })

})
app.get('/api/movies' ,(req,res)=>{


    MovieModel.find((error,data)=>{

        res.json({movies:data});
    })
   /* const myMovies= [
        {"Title":"Avengers: Infinity War","Year":"2018","Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"},
        {"Title":"Captain America: Civil War","Year":"2016","Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"}]
        
        res.status(200).json({movies:myMovies,
        message:'Operation completed succesfully'});
*/

})


app.post('/api/movies' ,(req,res)=>{

    MovieModel.create({
        title:req.body.Title,
        year:req.body.Year,
        poster:req.body.Poster
    })

    console.log("Movie Recieved");
    console.log(req.body.Title);
    console.log(req.body.Year);
    console.log(req.body.Poster);


})
app.get('/test' ,(req,res)=>{
    
    res.sendFile(path.join(__dirname+'/index.html'));

})
app.get('/name' ,(req,res)=>{
    console.log(req.query.firstname);
    res.send('Hello '+req.query.firstname+' '+req.query.lastname);
    


})
app.post('/name' ,(req,res)=>{
    console.log("Hello "+req.body.firstname+" "+req.body.lastname);
    res.send(req.body.firstname+" "+req.body.lastname);
    


})

//delete
app.delete('/api/movies/:id',(req,res)=>{

    console.log(req.params.id);
    MovieModel.deleteOne({_id:req.params.id},(error,data)=>{
        if(error)
        {
            req.json(error); 
        }
        req.json(data);
    })

})



const Schema = mongoose.Schema;
const movieSchema = new Schema({
    title:String,
    year:String,
    poster:String

})

const MovieModel = mongoose.model('movie',movieSchema);



app.listen(port, () => console.log(`Example app listening on port ${port}!`))