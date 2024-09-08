const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = 8000;

app.listen(port, ()=>{
    console.log(`App is listening at port ${port}`);
});