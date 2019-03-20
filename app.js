

//GRABS EXPRESS MODULE AND HOLDS IT IN A VARIABLE
const express = require('express');

//MAKES EXPRESS MODULE ACTIVE AND ABLE TO USE FUNCTIONS ---MY INTERPRETATION OF IT ANYWAY :/
const app = express();

//GRABS JS ROUTE FILES
let index = require('./routes/index');
let guest = require('./routes/guest');


//MAKE JS ROUTES REACHABLE
app.use('/member',index);
app.use('/guest',guest);


//OPEN PORT FOR USE
app.listen(8000, ()=>{
    console.log('server running')
});