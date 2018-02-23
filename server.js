const express = require('express'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      axios = require('axios');

const PORT = process.env.PORT || 3000




var app = express()



  app.use(bodyParser.json());
  app.use(morgan('dev'));



  app.get('/',(req,res)=>{
    res.status(200).send("Hello to express application");
  })


  app.listen(PORT,()=>{
    console.log('App is running on port '+ PORT);
  })
