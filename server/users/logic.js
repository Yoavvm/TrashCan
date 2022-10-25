const repo = require('./repo')

const getAll = async () => {

    // const allExercises = await repo.getAll();
    // return allExercises;

    return { string: "get all" }
}

const login = async (loginPayload) => {

    // const userData = await repo.login(loginPayload);
    const userData = {data: loginPayload};

    return userData;
}


module.exports = {
    getAll,
    login

}