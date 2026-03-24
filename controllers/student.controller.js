import Student from '../models/Student.js'

export const createStudent = async (req, res) => {
    try {
        const { name, email, studentId } = req.body;
        const student = await Student.create({ name, email, studentId });

        res.status(201).json({
            message: "Student created successfully",
            data: student
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
} 

export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find()
        res.status(200).json({ data: students })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getOneStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id)

        if (!student) {
            return res.status(404).json({ message: "Student not found" })
        }

        res.status(200).json({ data: student })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}