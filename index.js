const url = require('url')
const express = require('express')
const { json } = require('express')
const app = express()

let info = [
    {   
        id:1, 
        name: "phonebook  has for 4 people",
        number:"04595612",
        } 
    
] 

  app.get('/',(request,response) => {
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
   } )
   