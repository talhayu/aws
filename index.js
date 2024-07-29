const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose')
const trackedEmails = require('./model/emailTracking')


mongoose.connect('mongodb+srv://hassan:ahmed@cluster0.dqbwejy.mongodb.net/marketing');

const database = mongoose.connection;
database.on("error", (error) => {
    console.log(error);
});
database.once("connected", () => {
    console.log("database is connected");
});

app.get('/', async (req, res) => {
    res.send('Hello from AWS deployed service');
});

app.get('/track_open', async (req, res) => {
    try {
        const email = req.query.email;
        console.log(`Email opened: ${email}`);
        const emailRecord = await trackedEmails.findOne({ emailAddress: email });
        if (emailRecord) {
            emailRecord.isRead = true;
            await emailRecord.save();
            console.log(`Email ${email} marked as read.`);
        } else {
            console.log(`Email ${email} not found in the tracking database.`);
        }
        const filePath = path.join(__dirname, 'public', 'pixel.png')
        res.sendFile(filePath)
    } catch (error) {
        console.error('Error updating email read status:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

app.listen(5050, () => {
    console.log(`Server is running on port`);
});
