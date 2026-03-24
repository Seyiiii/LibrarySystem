import mongoose from 'mongoose';

const AttendantSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please Input the name of the Library Attendant"]
        },

        staffId: {
            type: String,
            unique: true
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model( 'Attendant', AttendantSchema)