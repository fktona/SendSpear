const db = require('../../db/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const login = async (req, res, next) => {
    const { email, password } = req.body;
    const requiredFields = ['email', 'password'];
    const missingFields = requiredFields.filter(field => !req.body[field]);

    if (missingFields.length) {
        return res.status(400).json({
            message: `Missing ${missingFields} in the request body`
        });
    }

    try {
        const checkUserQuery = `SELECT * FROM AuthenticatedUsers WHERE email = '${email}'`;
        const user = await db.asyncFunction(checkUserQuery);

        if (!user || user.length === 0) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const passwordMatch = await bcrypt.compare(password, user[0].password);

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign({ userId: user[0].user_id }, user[0].user_id, { expiresIn: '1h' });

        res.status(200).json({
            message: "Login successful",
            user: user[0],
            token: token
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error during login"
        });
    }
};

module.exports = {
    login
};
