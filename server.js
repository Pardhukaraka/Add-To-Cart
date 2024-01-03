const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = 'your_mongo_connection_string';
const dbName = 'flipcart';

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html');
});

MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err);

    console.log('Connected to MongoDB');

    const db = client.db(dbName);

    app.get('/products', async (req, res) => {
        const products = await db.collection('products').find().toArray();
        res.json(products);
    });

    // Close the connection when the app is closed
    process.on('SIGINT', () => {
        client.close();
        process.exit();
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
