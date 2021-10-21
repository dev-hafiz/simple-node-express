const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json())


const port = 5000;


app.get('/', (req, res)=>{
     res.send('Hey !!! Hello from my Third node for ever ');
})

const users = [
     {
          id: 0,
          name: "james joyce",
          occupation:"writter",
          email:"joyce@gmail.com",

     },
     {
          id: 1,
          name: "Katherine mansfiled",
          occupation:"pote",
          email:"katherine@gmail.com",

     },
     {
          id: 2,
          name: "Hanry Fildeing",
          occupation:"novelist",
          email:"hanry@gmail.com",

     },
     {
          id: 3,
          name: "Ernest Hamingway",
          occupation:"writter",
          email:"hamingway@gmail.com",

     },
     {
          id: 4,
          name: "Aphra Behn",
          occupation:"novelist",
          email:"aphra-behn@gmail.com",

     },
     {
          id: 5,
          name: "William Somerset Maughm",
          occupation:"pote",
          email:"maughm@gmail.com",

     },
     {
          id: 6,
          name: "Daniel Defo",
          occupation:"nobelist",
          email:"daniel@gmail.com",

     },
     {
          id: 7,
          name: "David Herbert",
          occupation:"novelist",
          email:"herbert@gmail.com",

     },
     {
          id: 8,
          name: "Francis Bacon",
          occupation:"writter",
          email:"bacon@gmail.com",

     },
     {
          id: 9,
          name: "Hulbert behn",
          occupation:"writter",
          email:"hulbert@gmail.com",

     },
]

app.get('/users', (req, res)=>{
     const search = req.query.search;
     if (search) {
          const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
          res.send(searchResult)
     }
     else{
          res.send(users)
     }
     
})

//APP METHID [POST]
app.post('/users', (req, res)=>{
     const newUser = req.body;
     newUser.id = users.length;
     users.push(newUser)
     res.json(newUser)
})

//Daynamic api
app.get('/users/:id', (req, res)=>{
     const id = req.params.id;
     const user= users[id];
     res.send(user)
})



app.listen(port, ()=>{
     console.log('Listenig to port', port);
})
