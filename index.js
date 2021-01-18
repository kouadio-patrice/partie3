//const url = require('url')
const express = require('express')
//const { json } = require('express')
const app = express()

let persons = [
        { 
          "name": "Arto Hellas", 
          "number": "040-123456",
          "id": 1
        },
        { 
          "name": "Ada Lovelace", 
          "number": "39-44-5323523",
          "id": 2
        },
        { 
          "name": "Dan Abramov", 
          "number": "12-43-234345",
          "id": 3
        },
        { 
          "name": "Mary Poppendieck", 
          "number": "39-23-6423122",
          "id": 4
        }
      ]
      app.get('/',(request,response) => {
        response.send('<h1> Hello Word !</h1>')
    })
  

    app.get('/api/persons/:id', (request , response) => {
      const id = Number(request.params.id)
      
      const person = persons.find(person => person.id === id)

      if(person){
        response.json(person);
      } else{
        response.status(404).end()
      }
       
    })
     const PORT = 3001
     app.listen(PORT,() => {
         console.log(`server runing on port ${PORT}`)
     } )
     

 /* app.get('/',(request,response) => {
      response.send('<h1> Hello Word !</h1>')
  })

  let userconte = 1;
  app.get('/info',(request,response) =>{
     // response.json(info)
     
     
     let date_gmt = new Date();
     let datenb ='' 
    let datActuelle = date_gmt.toString();
   
    userconte ++
    
     const message ='phonebook  has for ' + userconte  + ' people' 
     response.send( '<p>'+ message + ' </p>'+ '<p>'+ datActuelle +'</p>')   
      console.log('request',request)
  })
   const PORT = 3003 
   app.listen(PORT,() => {
       console.log(`server runing on port ${PORT}`)
   } )*/
   