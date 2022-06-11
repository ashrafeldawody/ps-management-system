const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/user.route');
const auth = require("./middleware/auth");
app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

app.use(express.json());
app.use(cors());
const db = mongoose.connect('mongodb://localhost:27017/pscafe', {useNewUrlParser: true});
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});
app.use('/users', userRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
