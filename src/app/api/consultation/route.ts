import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

const practiceLabels: Record<string, string> = {
  business: 'Business & corporate law',
  family: 'Family law',
  estate: 'Estate planning',
  realestate: 'Real estate',
  litigation: 'Civil litigation',
  criminal: 'Criminal defense',
  other: 'General inquiry / Not sure',
};

function getEmailConfig() {
  let gmailUser = process.env.GMAIL_USER || '';
  let gmailPass = process.env.GMAIL_APP_PASSWORD || '';
  let recipientEmail = process.env.NOTIFICATION_RECIPIENT_EMAIL || '';

  // Dynamically inspect local env files if environment variables are not yet loaded or have defaults
  const possibleEnvFiles = [
    path.join(process.cwd(), '.env.local'),
    path.join(process.cwd(), 'local.env'),
    path.join(process.cwd(), '.env'),
  ];

  for (const envFile of possibleEnvFiles) {
    if (fs.existsSync(envFile)) {
      try {
        const fileContent = fs.readFileSync(envFile, 'utf8');
        const lines = fileContent.split('\n');
        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || trimmed.startsWith('#')) continue;
          const [key, ...rest] = trimmed.split('=');
          const value = rest.join('=').trim().replace(/^["']|["']$/g, '');
          if (key === 'GMAIL_USER' && (!gmailUser || gmailUser === 'your_email@gmail.com')) {
            gmailUser = value;
          }
          if (key === 'GMAIL_APP_PASSWORD' && (!gmailPass || gmailPass === 'your_16_digit_app_password_here')) {
            gmailPass = value;
          }
          if (key === 'NOTIFICATION_RECIPIENT_EMAIL' && (!recipientEmail || recipientEmail === 'your_email@gmail.com')) {
            recipientEmail = value;
          }
        }
      } catch (err) {
        console.warn(`Error reading ${envFile}:`, err);
      }
    }
  }

  // Remove all spaces in Gmail App Password (Google often displays them in 4x4 blocks e.g. "abcd efgh ijkl mnop")
  if (gmailPass) {
    gmailPass = gmailPass.replace(/\s+/g, '');
  }

  return {
    gmailUser: gmailUser || 'abhi8828961929@gmail.com',
    gmailPass,
    recipientEmail: recipientEmail || gmailUser || 'abhi8828961929@gmail.com',
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      preferredContact,
      practiceArea,
      situation,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !practiceArea || !situation) {
      return NextResponse.json(
        { error: 'Please provide all required fields.' },
        { status: 400 }
      );
    }

    const { gmailUser, gmailPass, recipientEmail } = getEmailConfig();

    if (!gmailPass || gmailPass === 'your_16_digit_app_password_here') {
      return NextResponse.json(
        {
          error:
            'Gmail App Password is not configured yet. Please open .env.local (or local.env) and replace "your_16_digit_app_password_here" with your 16-character Google App Password.',
        },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const practiceName = practiceLabels[practiceArea] || practiceArea;
    const contactMethod = preferredContact === 'phone' ? 'Phone' : 'Email';
    const clientFullName = `${firstName} ${lastName}`;

    // 1. Send Notification Email to Firm
    const firmMailOptions = {
      from: `"Legalize Inquiries" <${gmailUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `[New Consultation Request] ${clientFullName} — ${practiceName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f3f6f1; color: #1a1a1a; margin: 0; padding: 24px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #d6dfd9; overflow: hidden; }
            .header { background: #1a3a2a; color: #ffffff; padding: 24px 32px; }
            .header h1 { margin: 0; font-family: Georgia, serif; font-size: 24px; font-weight: normal; font-style: italic; }
            .header p { margin: 4px 0 0; color: #d6dfd9; font-size: 13px; }
            .content { padding: 32px; }
            .badge { display: inline-block; background: #e8edea; color: #1a3a2a; padding: 4px 10px; border-radius: 4px; font-size: 12px; font-weight: 600; text-transform: uppercase; margin-bottom: 20px; }
            .field-row { margin-bottom: 16px; border-bottom: 1px solid #f0f0f0; padding-bottom: 12px; }
            .field-label { font-size: 11px; text-transform: uppercase; color: #6b7b6e; letter-spacing: 0.05em; font-weight: 600; margin-bottom: 4px; }
            .field-value { font-size: 15px; color: #1a1a1a; font-weight: 500; }
            .situation-box { background: #f8faf8; border: 1px solid #e2ece4; border-radius: 6px; padding: 18px; margin-top: 20px; }
            .situation-box h3 { margin: 0 0 10px; font-size: 13px; text-transform: uppercase; color: #2d5e4a; letter-spacing: 0.05em; }
            .situation-box p { margin: 0; font-size: 14px; line-height: 1.6; color: #333333; white-space: pre-wrap; }
            .footer { padding: 20px 32px; background: #f9fbf9; border-top: 1px solid #e8edea; font-size: 12px; color: #6b7b6e; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Legalize</h1>
              <p>New Client Consultation Request</p>
            </div>
            <div class="content">
              <span class="badge">New Intake</span>
              <div class="field-row">
                <div class="field-label">Client Name</div>
                <div class="field-value">${clientFullName}</div>
              </div>
              <div class="field-row">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #1a3a2a; text-decoration: underline;">${email}</a></div>
              </div>
              <div class="field-row">
                <div class="field-label">Phone Number</div>
                <div class="field-value">${phone || 'Not provided'}</div>
              </div>
              <div class="field-row">
                <div class="field-label">Preferred Contact Method</div>
                <div class="field-value">${contactMethod}</div>
              </div>
              <div class="field-row">
                <div class="field-label">Practice Area</div>
                <div class="field-value">${practiceName}</div>
              </div>
              
              <div class="situation-box">
                <h3>Brief Overview of Situation</h3>
                <p>${situation}</p>
              </div>
            </div>
            <div class="footer">
              Received via Legalize Online Intake &middot; Reply directly to this email to contact ${firstName}.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // 2. Send Confirmation Email to Client
    const clientMailOptions = {
      from: `"Legalize" <${gmailUser}>`,
      to: email,
      subject: `We have received your consultation request — Legalize`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f3f6f1; color: #1a1a1a; margin: 0; padding: 24px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #d6dfd9; overflow: hidden; }
            .header { background: #1a3a2a; color: #ffffff; padding: 28px 32px; text-align: left; }
            .header h1 { margin: 0; font-family: Georgia, serif; font-size: 26px; font-weight: normal; font-style: italic; }
            .header p { margin: 6px 0 0; color: #d6dfd9; font-size: 13px; }
            .content { padding: 36px 32px; }
            .greeting { font-family: Georgia, serif; font-size: 20px; color: #1a1a1a; margin: 0 0 16px; }
            .text { font-size: 15px; line-height: 1.65; color: #4a5550; margin: 0 0 20px; }
            .steps-container { background: #f3f6f1; border-radius: 6px; padding: 20px; margin: 24px 0; }
            .steps-title { font-family: Georgia, serif; font-size: 16px; color: #1a3a2a; margin: 0 0 14px; }
            .step-item { display: flex; margin-bottom: 12px; }
            .step-item:last-child { margin-bottom: 0; }
            .step-num { font-family: Georgia, serif; color: #2d5e4a; font-weight: bold; font-size: 15px; margin-right: 12px; min-width: 22px; }
            .step-text { font-size: 13.5px; line-height: 1.5; color: #333333; }
            .step-text strong { color: #1a1a1a; }
            .urgent-card { border-left: 3px solid #2d5e4a; background: #ffffff; padding: 12px 16px; margin: 20px 0; font-size: 13.5px; color: #4a5550; }
            .footer { padding: 24px 32px; background: #e4ebe5; font-size: 12px; color: #6b7b6e; line-height: 1.5; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Legalize</h1>
              <p>Thoughtful counsel. Confident decisions.</p>
            </div>
            <div class="content">
              <h2 class="greeting">Dear ${firstName},</h2>
              <p class="text">
                Thank you for contacting Legalize. We have received your consultation request regarding <strong>${practiceName}</strong>.
              </p>
              
              <div class="steps-container">
                <div class="steps-title">What happens next:</div>
                <div class="step-item">
                  <div class="step-num">01</div>
                  <div class="step-text"><strong>A thoughtful review:</strong> Our intake team and attorneys will review your information and verify there are no conflicts of interest.</div>
                </div>
                <div class="step-item">
                  <div class="step-num">02</div>
                  <div class="step-text"><strong>A personal response:</strong> We will reach out to you via ${contactMethod.toLowerCase()} within one business day to arrange a convenient consultation time.</div>
                </div>
                <div class="step-item">
                  <div class="step-num">03</div>
                  <div class="step-text"><strong>Clarity on your options:</strong> During your consultation, we'll discuss your legal options, timing, and fee structures openly before any commitment.</div>
                </div>
              </div>

              <div class="urgent-card">
                <strong>Need immediate assistance?</strong> If your matter involves an urgent legal deadline, court date, or bail issue, please call our office directly at <strong>(416) 555-0128</strong> (Monday–Friday, 9:00 am–5:00 pm ET).
              </div>

              <p class="text" style="margin-top: 24px;">
                Warm regards,<br>
                <strong>The Team at Legalize</strong><br>
                Toronto, Ontario
              </p>
            </div>
            <div class="footer">
              This message confirms that your inquiry was submitted. General information only; sending this request does not create an attorney–client relationship.<br>&copy; 2026 Legalize. All rights reserved.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(firmMailOptions),
      transporter.sendMail(clientMailOptions),
    ]);

    return NextResponse.json({
      success: true,
      message: 'Consultation request sent successfully and confirmation email dispatched.',
    });
  } catch (error: any) {
    console.error('Error sending consultation emails:', error);
    return NextResponse.json(
      {
        error:
          error?.message ||
          'Failed to send consultation emails. Please check your SMTP settings.',
      },
      { status: 500 }
    );
  }
}
