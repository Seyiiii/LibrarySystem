import Book from '../models/Book.js';

export const createBook = async (req, res) => {
    try {
        const { title, isbn, authors } = req.body
        const book = await Book.create({ title, isbn, authors });
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
        res.status(200).json({ data: books })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getOneBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id)
            .populate('authors')
            .populate('borrowedBy')
            .populate('issuedBy');

        if (!book) {
            return res.status(404).json({ message: "Book not Found" })
        }
        res.status(200).json({ data: book })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const borrowBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { studentId, attendantId, returnDate } = req.body;

        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({ message: "Book not Found" });
        }
        if (book.status === "OUT") {
            return res.status(400).json({ message: "Book is currently checked out" })
        }

        book.status = "OUT";
        book.borrowedBy = studentId;
        book.issuedBy = attendantId;
        book.returnDate = returnDate;

        await book.save();
        res.status(200).json({
            message: "Book borrowed successfully",
            data: book
        });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const returnBook = async (req, res) => {
    try {
        const { id } = req.params;

        const book = await Book.findById(id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        if (book.status === "IN") {
            return res.status(400).json({ message: "Book is current not checked out" });
        }


        book.status = "IN";
        book.borrowedBy = null;
        book.issuedBy = null;
        book.returnDate = null;

        await book.save();
        res.status(200).json({
            message: "Book returned successfully",
            data: book
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}