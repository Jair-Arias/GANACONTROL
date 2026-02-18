const users = []; // Simulación BD (luego la cambiamos por MySQL)

class AuthRepository {

    async findByEmail(email) {
        return users.find(user => user.email === email);
    }

    async save(user) {
        users.push(user);
        return user;
    }
}

module.exports = new AuthRepository();
