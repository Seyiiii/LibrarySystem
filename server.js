import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authorRoutes from './routes/author.route.js';
import bookRoutes from './routes/book.route.js';
import studentRoutes from './routes/student.route.js';
import attendantRoutes from './routes/attendant.route.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


await connectDB();

app.use(express.json());
app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);
app.use('/students', studentRoutes);
app.use('/attendants', attendantRoutes);

app.get('/', (req, res) => {
    res.send('Library API is running');
});

app.listen(PORT, () =>{
    console.log(`Server is live on http://localhost:${PORT}`)
})