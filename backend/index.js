const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 6001
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


// middleware
app.use(cors());
app.use(express.json());

//chamabikes1999
//sahanchathumal910
// MongoDB config
mongoose.connect(`mongodb+srv://sahanchathumal910:chamabikes1999@chamabikes.qtx3h.mongodb.net/?retryWrites=true&w=majority&appName=chamabikes`)
.then(
    console.log("MongoDB Connected Successfully!")
).catch((error) => console.log("Error connecting to MongoDB", error));


  // jwt authentication
  app.post('/jwt', async(req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '1hr'
    })
    res.send({token});
  })


// import routes here
const menuRoutes = require('./api/routes/menuRoutes');
const cartRoutes = require('./api/routes/cartRoutes');
const userRoutes = require('./api/routes/userRoutes');
const paymentRoutes = require('./api/routes/paymentRoutes');

app.use('/menu', menuRoutes); 
app.use('/carts', cartRoutes);
app.use('/users', userRoutes); 
app.use('/payments', paymentRoutes);

//Stripe payment routes
app.post("/create-payment-intent", async (req, res) => {
  const { price } = req.body;
  const amount = parseInt(price*100);

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});


app.get('/', (req, res) => {
  res.send('Hello chamabikes client server');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//sahanchathumal910
//yWkOMBp7RYkS9Oz2
// const express = require('express')
// const app = express();
// const cors = require('cors');
// const port = process.env.PORT || 6001
// const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// require('dotenv').config()
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


// // middleware
// app.use(cors());
// app.use(express.json());

// //chamabikes1999
// //sahanchathumal910
// // MongoDB config

// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const uri = "mongodb+srv://sahanchathumal910:kck3qEIq7kLaTn5l@cluster0.zn5u7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();

//     //database & collection
//     const menucollections = client.db("chamabikesproject").collection("menus");
//     const cartCollections = client.db("chamabikesproject").collection("cartItem");

//     //all menu item operations
//     app.get('/menu',async(req,res) => {
//       const result = await menucollections.find().toArray();
//       res.send(result)
//     })

//     //all cart operetion

//     //get cart using email
//     app.get('/carts', async(req, res) =>{
//       const email = req.query.email;
//       const query = {email: email};
//       const result = await cartCollections.find(query).toArray();
//       res.send(result);
//     });

//     //post all carts
//     app.post('/carts',async(req, res) =>{
//       const cartItem = req.body;
//       const result = await cartCollections.insertOne(cartItem)
//       res.send(result);
//     });

//     //delete a cart
//     app.delete('carts/:id',async(req, res ) => {
//       const id = req.params.id;
//       const query = {_id: new ObjectId(id)};
//       const result = await cartCollections.deleteOne(query);
//       res.send(result);

//     })

//     //update cart quntity
//     app.put('/carts/:id', async (req,res)=>{
//       const itemId = new ObjectId(req.params.id);
//       const {quantity } = req.body;

//       try {
//         const result = await collection.updateOne(
//             { _id: itemId },
//             { $set: { quantity: parseInt(quantity, 10) } }
//         );
    
//         if (result.matchedCount == 1) {
//             res.status(200).json({ message: 'Quantity updated successfully' });
//         } else {
//             res.status(404).json({ message: 'Item not found' });
//         }
//     } catch (error) {
//         console.error('Error updating quantity:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
//     });

//     //get an singel items
//     app.get('/carts/:id',async(req,res)=>{
//         const id =req.params.id;
//         console.log(id)
//         const query = {_id: new ObjectId(id)}
//         const result = await cartCollections.findOne(query);
//         res.send(result);
//       })




    // //posting cart to db
    // app.post('/carts',async(req, res) =>{
    //   const cartItem = req.body;
    //   const result = await cartCollections.insertOne(cartItem)
    //   res.send(result)
    // })

    // //get carts using email
    // app.get('/carts',async(req, res) =>{
    //   const email = req.query.email;
    //   const filter = {email: email};
    //   const result = await cartCollections.find(filter).toArray();
    //   res.send(result)
    // })

    // // get specific carts
    // app.get('/carts/:id',async(req,res)=>{
    //   const id =req.params.id;
    //   const filter = {_id: new ObjectId(id)};
    //   const result = await cartCollections.findOne(filter);
    //   res.send(result)
    // })

    // //deletenitems form cart
    // app.delete('carts/:id',async(req, res)=>{
    //   const id = req.params.id;
    //   const filter = {_id: new ObjectId(id)};
    //   const result = await cartCollections.deleteOne(filter);
    //   res.send(result)

    // })
    
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
    
//     //await client.close();
//   }
// }
// run().catch(console.dir);



// // import routes here
// const menuRoutes = require('./api/routes/menuRoutes');
// const cartRoutes = require('./api/routes/cartRoutes');
// const userRoutes = require('./api/routes/userRoutes');
// const paymentRoutes = require('./api/routes/paymentRoutes');

// app.use('/menu', menuRoutes); 
// app.use('/carts', cartRoutes);
// app.use('/users', userRoutes); 
// app.use('/payments', paymentRoutes);

// //Stripe payment routes
// app.post("/create-payment-intent", async (req, res) => {
//   const { price } = req.body;
//   const amount = parseInt(price*100);

//   // Create a PaymentIntent with the order amount and currency
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: amount,
//     currency: "usd",
//     payment_method_types: ["card"],
//   });

//   res.send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });


// app.get('/', (req, res) => {
//   res.send('Hello chamabikes client server');
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

// //sahanchathumal910
// //kck3qEIq7kLaTn5l


//copy icelove

// const express = require('express')
// const app = express();
// const cors = require('cors');
// const port = process.env.PORT || 6001
// const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// require('dotenv').config()
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


// // middleware
// app.use(cors());
// app.use(express.json());


// // MongoDB config
// //mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zn5u7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
// mongodb+srv://sahanchathumal910:<db_password>@cluster0.zn5u7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// .then(
//     console.log("MongoDB Connected Successfully!")
// ).catch((error) => console.log("Error connecting to MongoDB", error));


//   // jwt authentication
//   app.post('/jwt', async(req, res) => {
//     const user = req.body;
//     const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
//       expiresIn: '1hr'
//     })
//     res.send({token});
//   })


// // import routes here
// const menuRoutes = require('./api/routes/menuRoutes');
// const cartRoutes = require('./api/routes/cartRoutes');
// const userRoutes = require('./api/routes/userRoutes');
// const paymentRoutes = require('./api/routes/paymentRoutes');

// app.use('/menu', menuRoutes); 
// app.use('/carts', cartRoutes);
// app.use('/users', userRoutes); 
// app.use('/payments', paymentRoutes);

// //Stripe payment routes
// app.post("/create-payment-intent", async (req, res) => {
//   const { price } = req.body;
//   const amount = parseInt(price*100);

//   // Create a PaymentIntent with the order amount and currency
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: amount,
//     currency: "usd",
//     payment_method_types: ["card"],
//   });

//   res.send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });


// app.get('/', (req, res) => {
//   res.send('Hello icelove client server');
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });