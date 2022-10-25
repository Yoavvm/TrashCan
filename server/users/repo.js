const {User} = require('../db/models');

const login = async (loginPayload) => {
    const userData = await User.find()
    return userData;
}

const register = async (registerPayload) => {
    await User.create(registerPayload);
    return 'user succesfully created';
}

module.exports = {
    login,
    register
}