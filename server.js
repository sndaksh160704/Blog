const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB=require('./config/db.js');
const app = express();
const userRoutes=require('./routes/userRoutes.js');
const blogRoutes=require('./routes/blogRoutes.js');
dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/user',userRoutes);
app.use('/api/v1/blog',blogRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgCyan.white);
});