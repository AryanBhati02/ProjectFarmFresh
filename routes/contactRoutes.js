const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// SEND EMAIL
router.post("/contact/send", async (req, res) => {
    const { email, message } = req.body;

    if (!email || !message) {
        return res.json({ success: false, msg: "All fields are required." });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: email,
            to: process.env.GMAIL_USER,
            subject: "📩 New Contact Form Message",
            text: `From: ${email}\n\nMessage:\n${message}`
        });

        return res.json({ success: true, msg: "Email sent!" });

    } catch (error) {
        console.log(error);
        return res.json({ success: false, msg: "Error sending email." });
    }
});

module.exports = router;
