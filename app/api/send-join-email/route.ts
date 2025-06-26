import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const body = await req.json();

  const {
    firstName,
    middleName,
    lastName,
    email,
    phone,
    gender,
    dateOfBirth,
    address,
    city,
    state,
    zipCode,
    occupation,
    interestArea,
    availability,
    mobileNumber = '',
    whatsappNumber = '',
    profession = '',
    addressLine1 = '',
    addressLine2 = '',
    pinCode = '',
    country = '',
    motivation = '',
    skills = '',
  } = body;

  const fullName = [firstName, middleName, lastName].filter(Boolean).join(' ');

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASS,
    },
  });

  // Email to NGO
  const ngoMailOptions = {
    from: `"Bhagirath Sahayog Seva Sansthan" <${process.env.SMTP_EMAIL}>`,
    to: process.env.RECEIVER_EMAIL,
    subject: 'New Membership Application',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #1e3a8a; text-align: center;">New Membership Application</h2>
        <hr style="border: 1px solid #e0e0e0; margin: 10px 0;" />
        <h3 style="color: #1e3a8a;">Personal Information</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
        ${whatsappNumber ? `<p><strong>WhatsApp Number:</strong> ${whatsappNumber}</p>` : ''}
        <p><strong>Profession:</strong> ${profession || 'Not provided'}</p>
        <h3 style="color: #1e3a8a; margin-top: 20px;">Address Details</h3>
        <p><strong>Address Line 1:</strong> ${addressLine1}</p>
        ${addressLine2 ? `<p><strong>Address Line 2:</strong> ${addressLine2}</p>` : ''}
        <p><strong>City:</strong> ${city}</p>
        <p><strong>State:</strong> ${state || 'Not provided'}</p>
        <p><strong>Pin Code:</strong> ${pinCode}</p>
        <p><strong>Country:</strong> ${country}</p>
        <h3 style="color: #1e3a8a; margin-top: 20px;">Additional Information</h3>
        <p><strong>Motivation for Joining:</strong> ${motivation}</p>
        <p><strong>Skills/Expertise:</strong> ${skills || 'Not provided'}</p>
        <p><strong>Availability:</strong> ${availability || 'Not provided'}</p>
        <hr style="border: 1px solid #e0e0e0; margin: 20px 0;" />
        <p style="text-align: center; color: #666;">This email was sent from the Bhagirath Sahayog Seva Sansthan website.</p>
      </div>
    `,
  };

  // Thank-you email to applicant
  const applicantMailOptions = {
    from: `"Bhagirath Sahayog Seva Sansthan" <${process.env.SMTP_EMAIL}>`,
    to: email,
    subject: 'Thank You for Your Application',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #1e3a8a; text-align: center;">Thank You for Applying!</h2>
        <hr style="border: 1px solid #e0e0e0; margin: 10px 0;" />
        <p style="color: #333; line-height: 1.6;">Dear ${fullName},</p>
        <p style="color: #333; line-height: 1.6;">
          Thank you for submitting your application to join <strong>Bhagirath Sahayog Seva Sansthan</strong>. 
          We have successfully received your application, and our team is reviewing your details. 
          We truly appreciate your interest in contributing to our mission.
        </p>
        <p style="color: #333; line-height: 1.6;">
          We will reach out to you soon to discuss the next steps. If you have any questions in the meantime, 
          please feel free to contact us at <a href="mailto:${process.env.SMTP_EMAIL}" style="color: #1e3a8a; text-decoration: none;">${process.env.SMTP_EMAIL}</a>.
        </p>
        <p style="color: #333; line-height: 1.6;">Thank you once again for your commitment to making a difference.</p>
        <p style="color: #333; line-height: 1.6;">Best regards,<br />
        The Bhagirath Sahayog Seva Sansthan Team</p>
        <hr style="border: 1px solid #e0e0e0; margin: 20px 0;" />
        <p style="text-align: center; color: #666; font-size: 12px;">
          Bhagirath Sahayog Seva Sansthan 
        </p>
      </div>
    `,
  };

  try {
    await Promise.all([
      transporter.sendMail(ngoMailOptions),
      transporter.sendMail(applicantMailOptions),
    ]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
