const logic = require('./logic');

const getAll = async (req, res) => {

    try {
        const allExercises = await logic.getAll();
        res.json({allExercises});
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'something went wrong' });
    }
}

const createExercise = async (req, res) => {
    try {
        await logic.createExercise(req.body);
        const allExercises = await logic.getAll();
        res.json(allExercises);

    } catch (error) {
        console.log(error)
        res.status(400).json(error);

    }
}

module.exports = {
    getAll,
    createExercise
}