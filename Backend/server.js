const express = require ('express');
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')
const profileRoutes = require('./routes/profileRoutes')
const taskRoutes = require('/routes/taskRoutes');
const cors = require('cors')
const path = require('path')
require('dotenv').config()
connectDB();

const app = express();
app.use(cors());
app.use(express.json())

app.use('/api/auth' , authRoutes)
app.use('/api/profile',profileRoutes)
app.use('/api/tasks',taskRoutes)

app.use('/uploads',express.static(path.join(__dirname,'uploads')))

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log("Server is running"))