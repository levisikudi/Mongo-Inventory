const express = require('express')
const mongoose = require('mongoose')
const Item = require('./models/item')
require('dotenv').config()
const Items = require('./models/item')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

let connectionString = `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@mongosetupcluster.ztodsr1.mongodb.net/Inventory?retryWrites=true&w=majority`


mongoose.set('strictQuery', false);
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.put('/create_item', async(req, res) =>{
    const {priceInput: price, inventoryInput: inventory ,dateInput: nextDelivery, deliveryInput: deliveryAmt ,nameInput: name} = req.body;

    let returnedValue = await Item.create({
        price,
        inventory,
        nextDelivery,
        deliveryAmt,
        name
    })

    console.log(returnedValue);
    if (returnedValue) {
        console.log("upload complete");
    }
    res.send(returnedValue);

})

app.get('/items', async (req, res) =>{
    // get data from backend
    let response = await Item.find({});
    console.log(response);
     //send to front end
    res.json(response)
})

app.get('/item/:itemId', async (req, res) =>{
    let id = req.params.itemId

    let response = await Item.findById(id)
    res.send(response)
})


app.listen(4000, () => {
    console.log(`Server is Listening on 4000`)
})