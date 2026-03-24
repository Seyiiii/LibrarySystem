import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please Input the Students name"]
        },

        email: {
            type: String,
            unique: true
        },

        studentId: {
            type: String,
            unique: true
        }
    },
    {
        timestamps: true
    }
)



export default mongoose.model( 'Student', StudentSchema);