const express = require('express');

const students = [
    {id:1, name:'Tom', city:'Delhi'},
    {id:2, name:'Harry', city:'Mumbai'},
    {id:3, name:'John', city:'Lucknow'},
    {id:4, name:'Tom', city:'Jaipur'}
]

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Home page')
});

app.get('/students',(req,res)=>{
    res.json(students);
});

app.get('/students/:id',(req,res)=>{
    const studentid = Number(req.params.id);
    const student = students.find(s=>s.id===studentid);
    res.status(201);
    res.json(student);
});

app.get('/students/:name/:city',(req,res)=>{
    const studentname = req.params.name;
    const studentcity = req.params.city;

    const student = students.find(s=>s.name===studentname && s.city===studentcity);

    res.status(201);

    res.json(student);
});

app.get('/search',(req,res)=>{
    const studentcity = req.query.city;

    const student = students.filter(s=>s.city===studentcity);

    res.status(201);

    res.json(student);

});

app.post('/students',(req,res)=>{
    const data = req.body;
    console.log(data);
    res.json({
        message: "Data received",
        data
    });
});

                                                                                                                                                                                                           



app.listen(3000,()=>{
    console.log('Server running at port 3000');
});