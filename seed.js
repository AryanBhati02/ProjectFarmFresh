// seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const products = require('./data/products.json');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to Mongo — seeding...');
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Seed complete');
    process.exit(0);
  })
  .catch(err => { console.error(err); process.exit(1); });
