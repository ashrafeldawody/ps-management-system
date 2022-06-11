const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/user.route');
const devicesRouter = require('./routes/device.route');
const auth = require("./middleware/auth");
app.post("/welcome", auth, (req, res) => {
  if(req.isAdmin)
    res.status(200).send("Welcome Admin ");
  else
    res.status(200).send("Welcome User ");
});

app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://localhost:27017/pscafe', {useNewUrlParser: true});
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});
app.use('/users', userRouter);
app.use('/devices', devicesRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
