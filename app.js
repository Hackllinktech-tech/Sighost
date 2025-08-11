const express = require('express');
const app = express();
const signupRouter = require('./signup'); // adjust path if needed

app.use(express.json());
app.use('/', signupRouter); // Mounts /signup and /signup/check_availability

// ...other app setup...

app.listen(3000, () => console.log('Server running'));
