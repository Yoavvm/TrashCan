const repo = require('./repo')

const getAll = async () => {

    // const allExercises = await repo.getAll();
    // return allExercises;

    return {string: "get all"}
}

const createExercise = async (newExercise) => {

    await repo.createExercise(newExercise);
    
    const allExercises = await repo.getAll();
    return allExercises;
}


module.exports = {
    getAll,
    createExercise

}