const express = require('express');
const app =  express();
const cors = require('cors');
const dotenv = require('dotenv');
const router =  require('./router');

dotenv.config();

const db = require('./models/index');



//MiddleWare
app.use(cors())
app.use(express.json());

//
app.use(router);


(async function bootstap () {
  try {
    await db.sequelize.sync(); // {force: true}
    app.listen(process.env.SERVER_PORT, () => {
      console.log(`Server is running at http://localhost:${process.env.SERVER_PORT}`)
    })
  } catch (error) {
    console.error(error)
  }
})();
