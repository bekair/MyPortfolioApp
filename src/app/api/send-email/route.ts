import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { cors } from '@/middleware/cors';

export async function POST(req: Request) {
  // Handle CORS
  await cors(req);

  try {
    const { message, senderEmail, subject } = await req.json();

    // Validate required fields
    if (!message || !senderEmail || !subject) {
      return NextResponse.json(
        { message: 'Subject, sender email, and message are required' },
        { status: 400 }
      );
    }

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

    // Create transporter
    const transporter = nodemailer.createTransport(transportParams);

    // Email content
    const mailOptions = {
      from: {
        name: "Portfolio Contact Form",
        address: process.env.SMTP_USER
      },
      to: process.env.RECIPIENT_EMAIL,
      replyTo: senderEmail,
      subject: `[Portfolio Contact] ${subject || 'New Message'}`,
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
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    );
  }
} 