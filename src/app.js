import express from 'express';
import productsRouter from './routes/products.router.js';
import errorHandler from './middlewares/error.js';

const app = express();

app.use(express.json());

app.use('/api/products', productsRouter);

app.use(errorHandler);

app.listen(8080, () => console.log("Listening 8080"));