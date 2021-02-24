const User = require('../../models/user')

class UserService {

    /**
     * Get employee hierarchy
     * @return {Promise<void>}
     */
    async getAllUsers() {
        return await User.findAll({raw: true});
    }
}

module.exports = UserService;
