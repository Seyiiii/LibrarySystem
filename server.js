import express from 'express';
import connectDB from './config/db.js';
import authorRoutes from './routes/author.route.js'
import bookRoutes from './routes/book.route.js'
import studentRoutes from './routes/student.route.js'

const app = express();
const PORT = 3009;

await connectDB();

app.use(express.json());
app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);
app.use('/students', studentRoutes);

app.get('/', (req, res) => {
    res.send('Library API is running');
});

app.listen(PORT, () =>{
    console.log(`Server is live on http://localhost:${PORT}`)
})