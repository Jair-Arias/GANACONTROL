const authRepository = require('../repositories/auth.repository');

class AuthService {

    async register(data) {

        const existingUser = await authRepository.findByEmail(data.email);

        if (existingUser) {
            throw new Error('El usuario ya existe');
        }

        return await authRepository.save(data);
    }

    async login(email, password) {

        const user = await authRepository.findByEmail(email);

        if (!user || user.password !== password) {
            throw new Error('Credenciales incorrectas');
        }

        return user;
    }
}

module.exports = new AuthService();
