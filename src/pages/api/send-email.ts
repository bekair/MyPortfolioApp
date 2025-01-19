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
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    }
    console.log('Transport Params:', { ...transportParams, auth: { user: transportParams.auth.user } });

    const transporter = nodemailer.createTransport(transportParams);
    console.log('Transporter created');

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: subject || 'New Contact Form Message',
      text: `Message from: ${senderEmail}\n\n${message}`,
      replyTo: senderEmail,
    });
    console.log('Email sent successfully');

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      message: 'Failed to send email', 
      error: (error as Error).message 
    });
  }
} 