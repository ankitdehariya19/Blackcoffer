
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes'); 

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/blackcoffer', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); 
  });

app.use('/api', routes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
