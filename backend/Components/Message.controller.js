import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const MessageController = async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: "All fields are required!",
        });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: subject,
            text:
            `📩 New Contact Message
            👤 Name: ${name}
            📧 Email: ${email}
            💬 Message:${message}`,
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({
            success: true,
            message: "Message sent successfully!",
        });
    } catch (error) {
        console.error("Mail Error:", error);

        return res.status(500).json({
            success: false,
            message: "Error sending message.",
        });
    }
};

export default MessageController;
