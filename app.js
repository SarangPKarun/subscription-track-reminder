import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(5000, () => {
    console.log('Subscription tracker API is running on  http://localhost:5000');
});

export default app;