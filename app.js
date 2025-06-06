require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB(); 

app.use(express.json());

app.use('/api', require('./routes/authRoutes'));
app.use('/api/updates', require('./routes/updateRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

app.get('/', (req, res) => res.send('API Running successfully on port'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); 