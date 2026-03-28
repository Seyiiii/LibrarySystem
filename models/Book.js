import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please input the title of the book"]
        },

        isbn: {
            type: String,
            unique: true
        },

        authors: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Author'
        }],

        status: {
            type: String,
            enum: ['IN', 'OUT'],
            default: 'IN'
        },

        borrowedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student"
        },

        issuedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Attendant'
        },

        returnDate: {
            type: Date,
            default: null
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('Book', BookSchema);