const db = require('../../db/db');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const register = async (req, res, next) => {
    const { firstname, lastname, email, password } = req.body;
    const requiredFields = ['firstname', 'lastname', 'email', 'password'];
    const missingFields = requiredFields.filter(field => !req.body[field]);

    if (missingFields.length) {
        return res.status(400).json({
            message: `Missing ${missingFields} in the request body`
        });
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const validatePassword = (password) => {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        return re.test(password);
    };
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (!emailError) {
        return res.status(400).json({
            message: "Invalid email format"
        });
    }

    if (!passwordError) {
        return res.status(400).json({
            message: "Password must be at least 6 characters long, contain a special character, an uppercase letter, and a lowercase letter"
        });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const checkEmailQuery = `SELECT * FROM AuthenticatedUsers WHERE email = '${email}'`;
        const ce = await db.asyncFunction(checkEmailQuery);

        if (ce === undefined) {
            return res.status(500).json({
                message: "Error checking email existence"
            });
        }

        if (ce?.length > 0) {
            return res.status(400).json({
                message: "Email already exists"
            });
        }

        const userId = uuidv4();

        const query = `INSERT INTO AuthenticatedUsers (user_id, first_name, last_name, email, password) VALUES ('${userId}', '${firstname}', '${lastname}', '${email}', '${hashedPassword}')`;
        await db.asyncFunction(query);

        const checkQuery = `SELECT * FROM AuthenticatedUsers WHERE user_id ='${userId}'`;
        const user = await db.asyncFunction(checkQuery);

        if (user.length === 0) {
            return res.status(500).json({
                message: "Error registering user",
            });
        }

        const token = jwt.sign({ userId: userId }, userId, { expiresIn: '1h' });
        const date = new Date();    
        const localDate = date.toLocaleDateString();
        const localTime = date.toLocaleTimeString();
        const dateTime = `${localDate} ${localTime}`;
        const transactionId = uuidv4();
        const creditAmount = 1000;
        const natureOfCredit = "Registration Credit";
        const queryCredit = `INSERT INTO UserCredit (user_id, transaction_id, credit_amount , date_credited, nature_of_credit) VALUES ('${userId}', '${transactionId}', '${creditAmount}', '${dateTime}', '${natureOfCredit}')`;
        const credit_data = await db.asyncFunction(queryCredit);
        res.status(200).json({
            message: "User registered successfully",
            user: user[0],
            token: token
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error registering user"
        });
    }
}

module.exports = {
    register
};
