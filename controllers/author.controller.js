import Author from '../models/Author.js';

export const createAuthor = async (req, res) => {
    try {
        const { name, bio } = req.body;
        const author = await Author.create({ name, bio });
        res.status(201).json({
            message: "Author created successfully",
            data: author
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find()
        res.status(200).json({ data: authors })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getOneAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        const author = await Author.findById(id)

        if (!author) {
            return res.status(404).json({ message: "Author not found" })
        }

        res.status(200).json({ data: author })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedAuthor = await Author.findByIdAndUpdate(id, req.body, { new: true })

        if (!updatedAuthor) {
            return res.status(404).json({ message: "Author not Found"})
        }

        res.status(200).json({
            message: "Author updated successfully",
            data: updatedAuthor
        });
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}

export const deleteAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAuthor = await Author.findByIdAndDelete(id);

        if (!deletedAuthor) {
            return res.status(404).json({ message: "Author not found"});
        }

        res.status(200).json({ message: "Author deleted successfully"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}