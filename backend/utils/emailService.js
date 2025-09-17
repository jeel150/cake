// backend/utils/emailService.js

import dotenv from 'dotenv';
dotenv.config();
import nodemailer from 'nodemailer';
console.log("DEBUG SMTP_USER:", process.env.SMTP_USER);
console.log("DEBUG SMTP_PASS:", process.env.SMTP_PASS ? "LOADED" : "NOT LOADED");

// Create transporter
const transporter = nodemailer.createTransport({
 service: "gmail",
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log('SMTP connection error:', error);
  } else {
    console.log('SMTP server is ready to send messages');
  }
});

// Send welcome email function
export const sendWelcomeEmail = async (email, username, type = "login") => {
  try {
    const subject = type === "login" 
      ? 'Welcome Back to Ribbons & Balloons!' 
      : 'Welcome to Ribbons & Balloons!';
    
    const greeting = type === "login" 
      ? 'Welcome back' 
      : 'Welcome';
    
    const actionText = type === "login" 
      ? 'Your login was successful' 
      : 'Your registration was successful';

    const mailOptions = {
      from: `"Ribbons & Balloons" <${process.env.SMTP_FROM_EMAIL}>`,
      to: email,
      subject: subject,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .header { text-align: center; margin-bottom: 30px; }
            .logo { color: #B89B5E; font-size: 24px; font-weight: bold; }
            .message { color: #333; line-height: 1.6; }
            .footer { margin-top: 30px; text-align: center; color: #666; font-size: 12px; }
            .button { display: inline-block; padding: 12px 24px; background: #B89B5E; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">RIBBONS & BALLOONS</div>
            </div>
            <div class="message">
              <h2>${greeting}, ${username}! 👋</h2>
              <p>We're thrilled to ${type === "login" ? 'see you again' : 'have you'} at Ribbons & Balloons!</p>
              <p>${actionText} at ${new Date().toLocaleString()}.</p>
              <p>If this wasn't you, please contact our support team immediately.</p>
              
              <center>
                <a href="${process.env.FRONTEND_URL}" class="button">Start Shopping</a>
              </center>
              
              <p>Happy shopping! 🎂</p>
            </div>
            <div class="footer">
              <p>Ribbons & Balloons - Creating Sweet Moments</p>
              <p>© ${new Date().getFullYear()} Ribbons & Balloons. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`${type} welcome email sent to:`, email, 'Message ID:', info.messageId);
    return true;
  } catch (error) {
    console.error(`Error sending ${type} welcome email:`, error);
    return false;
  }
};

export default transporter;