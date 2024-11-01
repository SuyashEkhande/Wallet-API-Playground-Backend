const express = require('express')
const cors = require("cors");
const morgan = require('morgan');
const app = express()
const port = 3000
app.use(express.json());

// Custom token to capture request body
morgan.token('body', (req) => JSON.stringify(req.body));

// Define a custom Morgan format
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body')
);

app.use(cors());

const mainRouter = require('./routes/index')
app.use("/api/v1", mainRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


