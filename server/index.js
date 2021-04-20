const express = require('express');
const app =  express();
const cors = require('cors');
const dotenv = require('dotenv');
const router =  require('./router');
dotenv.config();



//MiddleWare
app.use(cors())
app.use(express.json());

//
app.use(router);


app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.SERVER_PORT}`)
})