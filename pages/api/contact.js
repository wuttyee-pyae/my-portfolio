import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, subject, message } = req.body;

    // Create a Nodemailer transporter using your email service's SMTP settings
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service provider
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER, // Sender address
        to: 'wuttyee1910@gmail.com', // Recipient address
        subject: `Portfolio Contact: ${subject}`, // Subject line
        html: `<p>Name: ${name}</p><p>Message: ${message}</p>`, // HTML body
      });

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email.', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
