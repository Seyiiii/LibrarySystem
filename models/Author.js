import mongoose from 'mongoose';

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter Author's name"]
    },

    bio: {
        type: String
    }
}, {
    timestamps: true
})

export default mongoose.model('Author', AuthorSchema)