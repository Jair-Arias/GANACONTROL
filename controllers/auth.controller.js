const authService = require('../services/auth.service');

class AuthController {

    async register(req, res) {
        try {
            const user = await authService.register(req.body);
            res.status(201).json({ message: 'Usuario registrado', user });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await authService.login(email, password);
            res.json({ message: 'Login exitoso', user });
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    }
}

module.exports = new AuthController();
