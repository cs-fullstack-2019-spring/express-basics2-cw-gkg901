const express = require('express');

//GROUPS ROUTE HANDLERS
const router = express.Router();
module.exports = router;

//GRABS PAYMENTS.JS AND MAKES CONTENT AVAILABLE TO SEND
let account = require('./payments');

//ROUTES CREATED TO SEND HTTP RESPONSES ON GET
router.get('/', (req,res)=>{
    res.send('Welcome to the Member Only Page')
});

router.get('/signin', (req,res)=>{
    res.send('Please sign in with your Member credentials')
});
//                        ROUTE TAKES 2 INPUTS ON URL AND DISPLAYS THEM
router.get('/contact/:phone/:name', (req,res)=>{
    res.send("Thanks "+req.params.name + "! We will contact you shortly at "+ req.params.phone)
});


//ROUTES CREATED TO SEND HTTP RESPONSES ON POST
router.post("/chargebalance",(req,res)=>{
    res.send(account.getBalance())
});

router.post("/paybalance",(req,res)=>{
    res.send(account.payBalance())
});

/////////////////////////////////

