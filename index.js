
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())


const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}


app.use(requestLogger)


const persons = [
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

    app.get('/api/persons', (request, response) => {
        response.json(persons)
        })

   
    const generaleId =  () => {
    const maxId = persons.length > 0
     ? Math.random(...persons.map(n => n.id))
     :0
     return maxId +1
    }

  console.log('general', generaleId())


    app.post('/api/persons', (request, response) => {
      const body = request.body

      console.log('person',person)

      if((!body.name) && (!body.number)) {
        return response.status(400).json({
          error: 'name  or number missing '
        })
       }
       
       const person = {
         name : body.name,
         number:body.number,
         id: generaleId()
       }
       
       persons = persons.concat(person)
       response.json(person)
    })
    console.log('pers',persons)



    app.get('/api/persons/:id', (request , response) => {
      const id = Number(request.params.id)
      
      const person = persons.find(person => person.id === id)

      if(person){
        response.json(person);
      } else{
        response.status(404).end()
      }
       
    })

    app.delete('/api/persons/:id', (request, response) => {
      const id = Number(request.params.id)
      persons = persons.filter(person => person.id !== id)
      response.status(204).end()
    })
  
    
    app.use(unknownEndpoint)

     const PORT = process.env.PORT || 3001
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
   