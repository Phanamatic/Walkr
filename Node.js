const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const adminPasswordHash = 'your_hashed_password'; // Use a hashed password

const bcrypt = require('bcrypt'); // bcrypt for hashing

app.post('/api/check-admin-password', (req, res) => {
    const { password } = req.body;

    bcrypt.compare(password, adminPasswordHash, (err, result) => {
        if (result) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    });
});

app.post('/api/update-notification', (req, res) => {
    const { active, message } = req.body;
    // Logic to update notification settings
    // Save settings to a database or config file
    res.json({ success: true });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
