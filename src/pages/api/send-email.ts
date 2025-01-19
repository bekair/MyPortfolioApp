import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log('API Route Hit:', {
    method: req.method,
    body: req.body,
    env: {
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT,
      SMTP_USER: !!process.env.SMTP_USER,
      SMTP_PASS: !!process.env.SMTP_PASS,
      RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL,
    }
  });

  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method);
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { message, senderEmail, subject } = req.body;

  try {
    const transportParams = {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      },
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high'
      }
    }
    console.log('Transport Params:', { ...transportParams, auth: { user: transportParams.auth.user } });

    const transporter = nodemailer.createTransport(transportParams);
    console.log('Transporter created');

    await transporter.sendMail({
      from: {
        name: "Portfolio Contact Form",
        address: process.env.SMTP_USER
      },
      to: process.env.RECIPIENT_EMAIL,
      subject: `[Portfolio Contact] ${subject || 'New Message'}`,
      replyTo: senderEmail,
      text: `Message from: ${senderEmail}\n\nSubject: ${subject}\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Portfolio Contact Form Message</h2>
          <p><strong>From:</strong> ${senderEmail}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `
    });
    console.log('Email sent successfully');

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Error sending email' });
  }
} 