const express = require("express");
const cors=require('cors');
const app = express();
const router = express.Router ();

app.use(cors())
const productsRouter = require("./api/products");

const port = process.env.PORT || 5000;


app.use('/api', router);
router.use('/products', productsRouter);


app.listen(port, () => console.log(`Server listening on port ${port}!`));