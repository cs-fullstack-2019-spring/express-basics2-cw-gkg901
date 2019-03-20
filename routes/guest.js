const express = require('express');


//GROUPS ROUTE HANDLERS
const router = express.Router();
module.exports = router;

//ROUTES CREATED TO SEND HTTP RESPONSES ON GET
router.get('/', (req,res)=>{
    res.send('Welcome to the Guest Support Page')
});

router.get('/register', (req,res)=>{
    res.send('Thank you wanting to register for this site!')
});

router.get('/contact/:phone/', (req,res)=>{
    res.send("Thanks Guest! We will contact you shortly at "+ req.params.phone)
});