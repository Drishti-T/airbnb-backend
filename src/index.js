const express = require('express');
const app = express();

app.use(express.json());

//importing v1 route
const v1 = require('./v1/index');

app.use('/api/v1', v1);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})