const express = require('express');
const cors = require('cors');
const {asyncFunction} = require('./db/db')
const auth = require('./routes/auth')
const app = express();
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 5000;
app.use('/api' , auth)

app.listen(PORT , () => {
    console.log(`Server running on port ${PORT}`);
})


