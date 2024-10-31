const express = require('express')
const cors = require("cors");
const app = express()
const port = 3000
app.use(cors());
app.use(express.json());

const mainRouter = require('./routes/index')
app.use("/api/v1", mainRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


