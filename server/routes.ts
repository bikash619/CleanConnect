import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertBookingSchema, 
  bookingFormSchema, 
  insertContactSchema, 
  contactFormSchema
} from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  const apiRouter = app.route('/api');

  // Get all services
  app.get('/api/services', async (_req: Request, res: Response) => {
    try {
      const services = await storage.getAllServices();
      res.json(services);
    } catch (error) {
      console.error('Error fetching services:', error);
      res.status(500).json({ message: 'Failed to fetch services' });
    }
  });

  // Get all testimonials
  app.get('/api/testimonials', async (_req: Request, res: Response) => {
    try {
      const testimonials = await storage.getAllTestimonials();
      res.json(testimonials);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      res.status(500).json({ message: 'Failed to fetch testimonials' });
    }
  });

  // Get all FAQs
  app.get('/api/faqs', async (_req: Request, res: Response) => {
    try {
      const faqs = await storage.getAllFaqs();
      res.json(faqs);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
      res.status(500).json({ message: 'Failed to fetch FAQs' });
    }
  });

  // Create a new booking
  app.post('/api/bookings', async (req: Request, res: Response) => {
    try {
      // Validate the full form submission including terms checkbox
      const validatedForm = bookingFormSchema.safeParse(req.body);
      
      if (!validatedForm.success) {
        const errorMessage = fromZodError(validatedForm.error).message;
        return res.status(400).json({ message: errorMessage });
      }
      
      // Extract only the fields needed for database insertion
      const bookingData = insertBookingSchema.parse({
        serviceType: validatedForm.data.serviceType,
        homeSize: validatedForm.data.homeSize,
        date: validatedForm.data.date,
        time: validatedForm.data.time,
        name: validatedForm.data.name,
        phone: validatedForm.data.phone,
        email: validatedForm.data.email,
        address: validatedForm.data.address,
        notes: validatedForm.data.notes
      });
      
      const booking = await storage.createBooking(bookingData);
      res.status(201).json({ success: true, booking });
    } catch (error) {
      console.error('Error creating booking:', error);
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Failed to create booking' });
      }
    }
  });

  // Submit contact form
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      // Validate the full form submission including privacy checkbox
      const validatedForm = contactFormSchema.safeParse(req.body);
      
      if (!validatedForm.success) {
        const errorMessage = fromZodError(validatedForm.error).message;
        return res.status(400).json({ message: errorMessage });
      }
      
      // Extract only the fields needed for database insertion
      const contactData = insertContactSchema.parse({
        name: validatedForm.data.name,
        email: validatedForm.data.email,
        subject: validatedForm.data.subject,
        message: validatedForm.data.message
      });
      
      const inquiry = await storage.createContactInquiry(contactData);
      res.status(201).json({ success: true, inquiry });
    } catch (error) {
      console.error('Error submitting contact inquiry:', error);
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Failed to submit contact inquiry' });
      }
    }
  });

  // Health check endpoint
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok' });
  });

  const httpServer = createServer(app);
  return httpServer;
}
