import Attendant from '../models/Attendant.js';

export const createAttendant = async (req, res) => {
    try {
        const { name, staffId } = req.body;
        const attendant = await Attendant.create({ name, staffId });
        res.status(201).json({
            message: "Attendant created successfully",
            data: attendant
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getAllAttendants = async (req, res) => {
    try {
        const attendants = await Attendant.find()
        res.status(200).json({ data: attendants })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getOneAttendant = async (req, res) => {
    try {
        const { id } = req.params;
        const attendant = await Attendant.findById(id)

        if (!attendant) {
            return res.status(404).json({ message: "Attendant not found" })
        }

        res.status(200).json({ data: attendant })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}