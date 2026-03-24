import Book from '../models/Book.js';

export const createBook = async (req, res) => {
    try {
        const { title, isbn, authors } = req.body
        const book = await Book.create( title, isbn, authors );
        res.status(201).json({
            message: "Book created successfully",
            data: book
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({  data: books})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getOneBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        
        if (!book) {
            return res.status(404).json({ message: "Book not Found"})
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}