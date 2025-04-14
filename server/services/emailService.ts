import nodemailer from 'nodemailer';
import { InsertBooking, InsertContactInquiry } from '@shared/schema';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.example.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASSWORD || '',
  },
});

// Email templates
const getBookingConfirmationEmail = (booking: InsertBooking) => {
  return {
    subject: 'Booking Confirmation - Spark Pro Cleaning',
    text: `
      Thank you for booking with Spark Pro Cleaning!
      
      Booking Details:
      Service: ${booking.serviceType}
      Home Size: ${booking.homeSize}
      Date: ${booking.date}
      Time: ${booking.time}
      
      Customer Information:
      Name: ${booking.name}
      Phone: ${booking.phone}
      Email: ${booking.email}
      Address: ${booking.address}
      
      Additional Notes: ${booking.notes || 'None'}
      
      Our team will arrive at your location at the scheduled time. If you need to make any changes to your booking, please contact us at info@sparkpro.com or call (555) 123-4567.
      
      Thank you for choosing Spark Pro Cleaning!
      Spark with Pros
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #6C3DF4; padding: 20px; text-align: center; color: white;">
          <h1>Booking Confirmation</h1>
          <p>Thank you for choosing Spark Pro Cleaning!</p>
        </div>
        
        <div style="padding: 20px; background-color: #f9f9f9;">
          <h2>Booking Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Service:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${booking.serviceType}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Home Size:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${booking.homeSize}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Date:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${booking.date}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Time:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${booking.time}</td>
            </tr>
          </table>
          
          <h2 style="margin-top: 20px;">Customer Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${booking.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${booking.phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${booking.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Address:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${booking.address}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Notes:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${booking.notes || 'None'}</td>
            </tr>
          </table>
        </div>
        
        <div style="padding: 20px; background-color: #f4f4f4; text-align: center;">
          <p>Our team will arrive at your location at the scheduled time.</p>
          <p>If you need to make any changes to your booking, please contact us at <a href="mailto:info@sparkpro.com">info@sparkpro.com</a> or call (555) 123-4567.</p>
          <p><strong>Thank you for choosing Spark Pro Cleaning!</strong></p>
          <p><em>Spark with Pros</em></p>
        </div>
      </div>
    `,
  };
};

const getContactInquiryEmail = (inquiry: InsertContactInquiry) => {
  return {
    subject: `Contact Inquiry: ${inquiry.subject}`,
    text: `
      New contact inquiry from the website:
      
      Name: ${inquiry.name}
      Email: ${inquiry.email}
      Subject: ${inquiry.subject}
      
      Message:
      ${inquiry.message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #6C3DF4; padding: 20px; text-align: center; color: white;">
          <h1>New Contact Inquiry</h1>
        </div>
        
        <div style="padding: 20px; background-color: #f9f9f9;">
          <h2>Contact Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${inquiry.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${inquiry.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Subject:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${inquiry.subject}</td>
            </tr>
          </table>
          
          <h2 style="margin-top: 20px;">Message</h2>
          <div style="background-color: white; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
            <p>${inquiry.message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      </div>
    `,
  };
};

// Send a confirmation email to the customer after booking
export const sendBookingConfirmationEmail = async (booking: InsertBooking): Promise<boolean> => {
  try {
    // Skip sending if no SMTP configuration is available
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.log('SMTP not configured, skipping email send');
      return false;
    }

    const emailContent = getBookingConfirmationEmail(booking);
    
    // Send email to customer
    await transporter.sendMail({
      from: `"Spark Pro Cleaning" <${process.env.SMTP_FROM || 'booking@sparkpro.com'}>`,
      to: booking.email,
      subject: emailContent.subject,
      text: emailContent.text,
      html: emailContent.html,
    });
    
    // Send notification to admin
    await transporter.sendMail({
      from: `"Spark Pro Booking System" <${process.env.SMTP_FROM || 'booking@sparkpro.com'}>`,
      to: process.env.ADMIN_EMAIL || 'admin@sparkpro.com',
      subject: `New Booking: ${booking.name}`,
      text: emailContent.text,
      html: emailContent.html,
    });
    
    return true;
  } catch (error) {
    console.error('Error sending booking confirmation email:', error);
    return false;
  }
};

// Send an email notification for contact form submissions
export const sendContactInquiryEmail = async (inquiry: InsertContactInquiry): Promise<boolean> => {
  try {
    // Skip sending if no SMTP configuration is available
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.log('SMTP not configured, skipping email send');
      return false;
    }

    const emailContent = getContactInquiryEmail(inquiry);
    
    // Send email notification to admin
    await transporter.sendMail({
      from: `"Spark Pro Contact Form" <${process.env.SMTP_FROM || 'contact@sparkpro.com'}>`,
      to: process.env.ADMIN_EMAIL || 'admin@sparkpro.com',
      subject: emailContent.subject,
      text: emailContent.text,
      html: emailContent.html,
    });
    
    // Send confirmation to the person who submitted the form
    await transporter.sendMail({
      from: `"Spark Pro Cleaning" <${process.env.SMTP_FROM || 'contact@sparkpro.com'}>`,
      to: inquiry.email,
      subject: 'Thank you for contacting Spark Pro Cleaning',
      text: `
        Dear ${inquiry.name},
        
        Thank you for contacting Spark Pro Cleaning. We have received your inquiry and will get back to you as soon as possible.
        
        Your message: 
        "${inquiry.message}"
        
        Best regards,
        The Spark Pro Cleaning Team
        Spark with Pros
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #6C3DF4; padding: 20px; text-align: center; color: white;">
            <h1>Thank You for Contacting Us</h1>
          </div>
          
          <div style="padding: 20px; background-color: #f9f9f9;">
            <p>Dear ${inquiry.name},</p>
            <p>Thank you for contacting Spark Pro Cleaning. We have received your inquiry and will get back to you as soon as possible.</p>
            
            <div style="background-color: white; padding: 15px; border-radius: 5px; border: 1px solid #ddd; margin: 20px 0;">
              <p><strong>Your message:</strong></p>
              <p style="font-style: italic;">"${inquiry.message.replace(/\n/g, '<br>')}"</p>
            </div>
            
            <p>Best regards,<br>The Spark Pro Cleaning Team</p>
            <p><em>Spark with Pros</em></p>
          </div>
        </div>
      `,
    });
    
    return true;
  } catch (error) {
    console.error('Error sending contact inquiry email:', error);
    return false;
  }
};