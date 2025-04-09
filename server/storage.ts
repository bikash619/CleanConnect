import {
  users, type User, type InsertUser,
  services, type Service, type InsertService,
  testimonials, type Testimonial, type InsertTestimonial,
  bookings, type Booking, type InsertBooking,
  contactInquiries, type ContactInquiry, type InsertContactInquiry,
  faqs, type Faq, type InsertFaq
} from "@shared/schema";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Services
  getAllServices(): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;
  updateService(id: number, service: Partial<InsertService>): Promise<Service | undefined>;
  deleteService(id: number): Promise<boolean>;

  // Testimonials
  getAllTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: number): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  updateTestimonial(id: number, testimonial: Partial<InsertTestimonial>): Promise<Testimonial | undefined>;
  deleteTestimonial(id: number): Promise<boolean>;

  // Bookings
  getAllBookings(): Promise<Booking[]>;
  getBooking(id: number): Promise<Booking | undefined>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  updateBookingStatus(id: number, status: string): Promise<Booking | undefined>;

  // Contact Inquiries
  getAllContactInquiries(): Promise<ContactInquiry[]>;
  getContactInquiry(id: number): Promise<ContactInquiry | undefined>;
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  updateContactInquiryStatus(id: number, status: string): Promise<ContactInquiry | undefined>;

  // FAQs
  getAllFaqs(): Promise<Faq[]>;
  getFaq(id: number): Promise<Faq | undefined>;
  createFaq(faq: InsertFaq): Promise<Faq>;
  updateFaq(id: number, faq: Partial<InsertFaq>): Promise<Faq | undefined>;
  deleteFaq(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private services: Map<number, Service>;
  private testimonials: Map<number, Testimonial>;
  private bookings: Map<number, Booking>;
  private contactInquiries: Map<number, ContactInquiry>;
  private faqs: Map<number, Faq>;
  
  private userCounter: number;
  private serviceCounter: number;
  private testimonialCounter: number;
  private bookingCounter: number;
  private contactInquiryCounter: number;
  private faqCounter: number;

  constructor() {
    this.users = new Map();
    this.services = new Map();
    this.testimonials = new Map();
    this.bookings = new Map();
    this.contactInquiries = new Map();
    this.faqs = new Map();

    this.userCounter = 1;
    this.serviceCounter = 1;
    this.testimonialCounter = 1;
    this.bookingCounter = 1;
    this.contactInquiryCounter = 1;
    this.faqCounter = 1;

    // Initialize with some default data
    this.initializeDefaultData();
  }

  private initializeDefaultData() {
    // Add default services
    const defaultServices: InsertService[] = [
      {
        name: "Window Cleaning",
        description: "Professional window cleaning service for crystal clear results, inside and out.",
        imageUrl: "https://images.unsplash.com/photo-1575883242366-1864894de42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        price: "From $80",
        sortOrder: 1
      },
      {
        name: "Gutters Cleaning",
        description: "Complete gutter cleaning service to remove debris and ensure proper water flow.",
        imageUrl: "https://images.unsplash.com/photo-1530976972097-a08586074c48?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        price: "From $120",
        sortOrder: 2
      },
      {
        name: "Bond Cleaning",
        description: "Thorough end of lease cleaning to ensure you get your deposit back when moving out.",
        imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        price: "From $250",
        sortOrder: 3
      },
      {
        name: "Solar Panel Cleaning",
        description: "Specialized cleaning for your solar panels to maintain maximum efficiency and performance.",
        imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        price: "From $150",
        sortOrder: 4
      },
      {
        name: "General Cleaning",
        description: "Comprehensive cleaning of all living areas including dusting, vacuuming, and sanitizing surfaces.",
        imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        price: "From $100",
        sortOrder: 5
      },
      {
        name: "Blinds Cleaning",
        description: "Detailed cleaning of all types of blinds to remove dust and allergens for a healthier home.",
        imageUrl: "https://images.unsplash.com/photo-1595514535415-dae8970c84d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        price: "From $90",
        sortOrder: 6
      },
      {
        name: "Carpet & Upholstery Cleaning",
        description: "Deep cleaning for carpets and upholstery to remove stains, odors, and allergens.",
        imageUrl: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        price: "From $120",
        sortOrder: 7
      },
      {
        name: "Tile & Grout Cleaning",
        description: "Professional cleaning of tile surfaces and grout lines to restore their original appearance.",
        imageUrl: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        price: "From $180",
        sortOrder: 8
      }
    ];

    defaultServices.forEach(service => this.createService(service));

    // Add default testimonials
    const defaultTestimonials: InsertTestimonial[] = [
      {
        name: "Sarah Johnson",
        content: "PurpleClean has been cleaning my home for over 6 months now, and I couldn't be happier with their service. The team is professional, thorough, and always on time.",
        rating: 5,
        imageUrl: "https://randomuser.me/api/portraits/women/42.jpg",
        displayOrder: 1
      },
      {
        name: "Michael Rivera",
        content: "I booked a deep cleaning service for my apartment, and I was blown away by the results. Every corner was spotless. Will definitely use their services again!",
        rating: 5,
        imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
        displayOrder: 2
      },
      {
        name: "Jennifer Chen",
        content: "As a busy professional, I don't have time to keep my home as clean as I'd like. PurpleClean's recurring service has been a lifesaver! Highly recommend!",
        rating: 5,
        imageUrl: "https://randomuser.me/api/portraits/women/68.jpg",
        displayOrder: 3
      }
    ];

    defaultTestimonials.forEach(testimonial => this.createTestimonial(testimonial));

    // Add default FAQs
    const defaultFaqs: InsertFaq[] = [
      {
        question: "What's included in your regular cleaning service?",
        answer: "Our regular cleaning service includes dusting all accessible surfaces, vacuuming floors, mopping hard floors, cleaning kitchen countertops and appliance exteriors, cleaning bathroom fixtures, sinks, tubs, showers, and toilets, emptying trash bins, and general tidying.",
        displayOrder: 1
      },
      {
        question: "How do you calculate the cost of cleaning?",
        answer: "Our pricing is based on several factors, including the size of your home, the type of cleaning service you select, and any additional services you may require. You can get an instant quote by using our online booking system.",
        displayOrder: 2
      },
      {
        question: "Are your cleaning products safe for pets and children?",
        answer: "Yes, we use eco-friendly cleaning products that are safe for both pets and children. If you have specific concerns or preferences regarding cleaning products, please let us know when booking.",
        displayOrder: 3
      },
      {
        question: "How do I reschedule or cancel my cleaning appointment?",
        answer: "You can reschedule or cancel your appointment through our website or by calling our customer service. We request at least 24 hours' notice for any changes to avoid cancellation fees.",
        displayOrder: 4
      },
      {
        question: "Are your cleaners insured and background-checked?",
        answer: "Yes, all our cleaning professionals are fully insured and undergo thorough background checks. We take the security and safety of your home very seriously.",
        displayOrder: 5
      }
    ];

    defaultFaqs.forEach(faq => this.createFaq(faq));
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Service methods
  async getAllServices(): Promise<Service[]> {
    return Array.from(this.services.values()).sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async getService(id: number): Promise<Service | undefined> {
    return this.services.get(id);
  }

  async createService(service: InsertService): Promise<Service> {
    const id = this.serviceCounter++;
    const newService: Service = { ...service, id };
    this.services.set(id, newService);
    return newService;
  }

  async updateService(id: number, service: Partial<InsertService>): Promise<Service | undefined> {
    const existingService = this.services.get(id);
    if (!existingService) return undefined;

    const updatedService = { ...existingService, ...service };
    this.services.set(id, updatedService);
    return updatedService;
  }

  async deleteService(id: number): Promise<boolean> {
    return this.services.delete(id);
  }

  // Testimonial methods
  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).sort((a, b) => a.displayOrder - b.displayOrder);
  }

  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    return this.testimonials.get(id);
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.testimonialCounter++;
    const newTestimonial: Testimonial = { ...testimonial, id };
    this.testimonials.set(id, newTestimonial);
    return newTestimonial;
  }

  async updateTestimonial(id: number, testimonial: Partial<InsertTestimonial>): Promise<Testimonial | undefined> {
    const existingTestimonial = this.testimonials.get(id);
    if (!existingTestimonial) return undefined;

    const updatedTestimonial = { ...existingTestimonial, ...testimonial };
    this.testimonials.set(id, updatedTestimonial);
    return updatedTestimonial;
  }

  async deleteTestimonial(id: number): Promise<boolean> {
    return this.testimonials.delete(id);
  }

  // Booking methods
  async getAllBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values()).sort((a, b) => {
      const dateA = new Date(a.createdAt || 0);
      const dateB = new Date(b.createdAt || 0);
      return dateB.getTime() - dateA.getTime(); // newest first
    });
  }

  async getBooking(id: number): Promise<Booking | undefined> {
    return this.bookings.get(id);
  }

  async createBooking(booking: InsertBooking): Promise<Booking> {
    const id = this.bookingCounter++;
    const newBooking: Booking = { 
      ...booking, 
      id, 
      createdAt: new Date(),
      status: "pending" 
    };
    this.bookings.set(id, newBooking);
    return newBooking;
  }

  async updateBookingStatus(id: number, status: string): Promise<Booking | undefined> {
    const booking = this.bookings.get(id);
    if (!booking) return undefined;

    const updatedBooking = { ...booking, status };
    this.bookings.set(id, updatedBooking);
    return updatedBooking;
  }

  // Contact Inquiry methods
  async getAllContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values()).sort((a, b) => {
      const dateA = new Date(a.createdAt || 0);
      const dateB = new Date(b.createdAt || 0);
      return dateB.getTime() - dateA.getTime(); // newest first
    });
  }

  async getContactInquiry(id: number): Promise<ContactInquiry | undefined> {
    return this.contactInquiries.get(id);
  }

  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = this.contactInquiryCounter++;
    const newInquiry: ContactInquiry = { 
      ...inquiry, 
      id, 
      createdAt: new Date(),
      status: "new" 
    };
    this.contactInquiries.set(id, newInquiry);
    return newInquiry;
  }

  async updateContactInquiryStatus(id: number, status: string): Promise<ContactInquiry | undefined> {
    const inquiry = this.contactInquiries.get(id);
    if (!inquiry) return undefined;

    const updatedInquiry = { ...inquiry, status };
    this.contactInquiries.set(id, updatedInquiry);
    return updatedInquiry;
  }

  // FAQ methods
  async getAllFaqs(): Promise<Faq[]> {
    return Array.from(this.faqs.values()).sort((a, b) => a.displayOrder - b.displayOrder);
  }

  async getFaq(id: number): Promise<Faq | undefined> {
    return this.faqs.get(id);
  }

  async createFaq(faq: InsertFaq): Promise<Faq> {
    const id = this.faqCounter++;
    const newFaq: Faq = { ...faq, id };
    this.faqs.set(id, newFaq);
    return newFaq;
  }

  async updateFaq(id: number, faq: Partial<InsertFaq>): Promise<Faq | undefined> {
    const existingFaq = this.faqs.get(id);
    if (!existingFaq) return undefined;

    const updatedFaq = { ...existingFaq, ...faq };
    this.faqs.set(id, updatedFaq);
    return updatedFaq;
  }

  async deleteFaq(id: number): Promise<boolean> {
    return this.faqs.delete(id);
  }
}

export const storage = new MemStorage();
