import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
// import mysql from "mysql2/promise";

const allowedOrigins = [
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "https://digitalparadigm.com.au",
  "https://www.digitalparadigm.com.au",
  "https://health.digitalparadigm.com.au",
  "https://digitalparadigm.com.au/health",
  "https://www.digitalparadigm.com.au/health",
  "https://docto-ten.vercel.app",
];

function setCorsHeaders(response: NextResponse) {
  const origin = process.env.FRONTEND_URL || "http://localhost:3000";
  response.headers.set("Access-Control-Allow-Origin", origin);
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  response.headers.set("Access-Control-Allow-Credentials", "true");
  return response;
}

export async function OPTIONS() {
  return setCorsHeaders(new NextResponse(null, { status: 200 }));
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, company, service, budget, message } = body;

    if (!name || !email || !message) {
      const response = NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
      return setCorsHeaders(response);
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS || process.env.SMTP_PASSWORD,
      },
    });

    // Database connection - COMMENTED OUT FOR TESTING
    // const connection = await mysql.createConnection({
    //   host: process.env.DB_HOST,
    //   user: process.env.DB_USER,
    //   password: process.env.DB_PASSWORD,
    //   database: process.env.DB_NAME,
    // });

    // Save to database - COMMENTED OUT FOR TESTING
    // const insertQuery =
    //   "INSERT INTO health_dp_contact_submissions (full_name, email, company, service, budget, message) VALUES (?, ?, ?, ?, ?, ?)";
    // const [result] = await connection.execute(insertQuery, [
    //   name,
    //   email,
    //   company || null,
    //   service || null,
    //   budget || null,
    //   message,
    // ]);

    // Send admin notification email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL || "info@digitalparadigm.com.au",
      replyTo: email,
      subject: "Mail from Health - Digital Paradigm",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ef2f6b;">New Enquiry Received</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Full Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || "N/A"}</p>
            <p><strong>Service Needed:</strong> ${service || "N/A"}</p>
            <p><strong>Budget Range:</strong> ${budget || "N/A"}</p>
            <p><strong>Project Details:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            This is an automated email. Please do not reply to this address.
          </p>
        </div>
      `,
    });

    // Send user confirmation email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: "We received your enquiry | Health - Digital Paradigm",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ef2f6b;">Thank You, ${name}!</h2>
          
          <p>We have received your enquiry and appreciate you reaching out to us.</p>
          
          <p>Our team will review your project details and get back to you within <strong>1 business day</strong>.</p>
          
          <div style="background-color: #f0f0f0; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333;">In the meantime:</h3>
            <ul style="color: #666;">
              <li>Check out our <a href="https://digitalparadigm.com.au" style="color: #ef2f6b;">portfolio</a></li>
              <li>Browse our <a href="https://digitalparadigm.com.au/services" style="color: #ef2f6b;">services</a></li>
              <li>Feel free to <a href="https://calendly.com/digitalparadigm/product-strategy-call" style="color: #ef2f6b;">book a free strategy call</a></li>
            </ul>
          </div>
          
          <p>If you have any urgent questions, please feel free to contact us at:</p>
          <p>
            <strong>Email:</strong> <a href="mailto:info@digitalparadigm.com.au" style="color: #ef2f6b;">info@digitalparadigm.com.au</a><br>
            <strong>Phone:</strong> <a href="tel:61251194369" style="color: #ef2f6b;">+612 5119 4369</a>
          </p>
          
          <p style="margin-top: 30px; color: #999; font-size: 12px;">
            Best regards,<br>
            <strong>Digital Paradigm Team</strong>
          </p>
        </div>
      `,
    });

    // await connection.end(); // COMMENTED OUT - DATABASE TESTING DISABLED

    const response = NextResponse.json(
      { message: "Thank you for your enquiry! We will get back to you soon." },
      { status: 200 }
    );
    return setCorsHeaders(response);
  } catch (error) {
    console.error("Contact form error:", error);

    const response = NextResponse.json(
      {
        error:
          "Something went wrong while sending your enquiry. Please try again later.",
      },
      { status: 500 }
    );
    return setCorsHeaders(response);
  }
}
