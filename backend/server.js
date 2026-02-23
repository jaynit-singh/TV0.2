const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://yourdomain.com'] 
    : ['http://localhost:3000'],
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Logging
app.use(morgan('combined'));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Schemas
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
  content: { type: String, required: true },
  author: { type: String, required: true },
  excerpt: { type: String },
  tags: [String],
  featured: { type: Boolean, default: false },
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 },
  readTime: { type: String },
  image: { type: String }
});

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  message: { type: String, required: true },
  rating: { type: Number, default: 5 },
  date: { type: Date, default: Date.now },
  approved: { type: Boolean, default: false }
});

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  company: { type: String },
  message: { type: String, required: true },
  type: { type: String, required: true, enum: ['general', 'support', 'hr', 'help', 'partnership'] },
  date: { type: Date, default: Date.now },
  status: { type: String, default: 'pending', enum: ['pending', 'in-progress', 'resolved'] }
});

const careerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  position: { type: String, required: true },
  experience: { type: String, required: true },
  message: { type: String },
  resume: { type: String }, // File path or URL
  date: { type: Date, default: Date.now },
  status: { type: String, default: 'pending', enum: ['pending', 'under-review', 'shortlisted', 'rejected', 'hired'] }
});

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  industry: { type: String, required: true },
  logo: { type: String },
  description: { type: String, required: true },
  location: { type: String, required: true },
  employees: { type: String, required: true },
  website: { type: String },
  testimonial: { type: String },
  rating: { type: Number, default: 5 },
  projects: { type: Number, default: 0 },
  years: { type: Number, default: 0 },
  featured: { type: Boolean, default: false },
  date: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user', enum: ['admin', 'editor', 'user'] },
  date: { type: Date, default: Date.now }
});

const Models = {
  Blog: mongoose.model('Blog', blogSchema),
  Testimonial: mongoose.model('Testimonial', testimonialSchema),
  Contact: mongoose.model('Contact', contactSchema),
  Career: mongoose.model('Career', careerSchema),
  Client: mongoose.model('Client', clientSchema),
  User: mongoose.model('User', userSchema)
};

// Email transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Email routing function
const getEmailByType = (type) => {
  const emails = {
    general: process.env.COMPANY_EMAIL,
    support: process.env.SUPPORT_EMAIL,
    hr: process.env.HR_EMAIL,
    help: process.env.HELP_EMAIL,
    partnership: process.env.COMPANY_EMAIL
  };
  return emails[type] || process.env.COMPANY_EMAIL;
};

// Send email function
const sendEmail = async (to, subject, html, text = '') => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      html,
      text
    };
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to:', to);
  } catch (error) {
    console.error('Email sending error:', error);
  }
};

// Validation middleware
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation errors',
      errors: errors.array()
    });
  }
  next();
};

// JWT middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Create default users
const createDefaultUsers = async () => {
  try {
    // Create default admin user
    const existingAdmin = await Models.User.findOne({ username: 'admin' });
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash('admin123', parseInt(process.env.BCRYPT_ROUNDS));
      const admin = new Models.User({
        username: 'admin',
        email: 'admin@thevittavardhan.com',
        password: 'admin123',
        role: 'admin'
      });
      await admin.save();
      console.log('Default admin user created: username=admin, password=admin123');
    }

    // Create test regular users
    const testUsers = [
      { username: 'user1', password: 'user123', email: 'user1@test.com' },
      { username: 'user2', password: 'user123', email: 'user2@test.com' },
      { username: 'demo', password: 'demo123', email: 'demo@test.com' }
    ];

    for (const testUser of testUsers) {
      const existingUser = await Models.User.findOne({ username: testUser.username });
      if (!existingUser) {
        const hashedPassword = await bcrypt.hash(testUser.password, parseInt(process.env.BCRYPT_ROUNDS));
        const user = new Models.User({
          username: testUser.username,
          email: testUser.email,
          password: hashedPassword,
          role: 'user'
        });
        await user.save();
        console.log(`Test user created: username=${testUser.username}, password=${testUser.password}`);
      }
    }
  } catch (error) {
    console.error('Error creating default users:', error);
  }
};

// API Routes

// Regular User Login Route
app.post('/api/login', [
  body('username').notEmpty().withMessage('Username is required'),
  body('password').notEmpty().withMessage('Password is required')
], validateRequest, async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Models.User.findOne({ username, role: 'user' });
    
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE }
    );

    res.json({ success: true, token, user: { id: user._id, username: user.username, role: user.role } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Root route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'The Vitta Vardhan Backend API is running',
    version: '1.0.0',
    endpoints: {
      blogs: '/api/blogs',
      contact: '/api/contact',
      careers: '/api/careers',
      testimonials: '/api/testimonials',
      login: '/api/login'
    }
  });
});

// Blog Routes
app.get('/api/blogs', async (req, res) => {
  try {
    const { category, featured, search } = req.query;
    let query = {};
    
    if (category && category !== 'all') query.category = category;
    if (featured === 'true') query.featured = true;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ];
    }

    const blogs = await Models.Blog.find(query).sort({ date: -1 });
    res.json({ success: true, data: blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.post('/api/blogs', authenticateToken, [
  body('title').notEmpty().withMessage('Title is required'),
  body('content').notEmpty().withMessage('Content is required'),
  body('author').notEmpty().withMessage('Author is required'),
  body('category').notEmpty().withMessage('Category is required')
], validateRequest, async (req, res) => {
  try {
    const blog = new Models.Blog(req.body);
    await blog.save();
    res.json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Contact Routes
app.post('/api/contact', [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('message').notEmpty().withMessage('Message is required'),
  body('type').isIn(['general', 'support', 'hr', 'help', 'partnership']).withMessage('Valid type is required')
], validateRequest, async (req, res) => {
  try {
    const contact = new Models.Contact(req.body);
    await contact.save();

    // Send email notification
    const recipientEmail = getEmailByType(req.body.type);
    const emailSubject = `New Contact Form Submission - ${req.body.type.toUpperCase()}`;
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${req.body.name}</p>
      <p><strong>Email:</strong> ${req.body.email}</p>
      <p><strong>Phone:</strong> ${req.body.phone || 'Not provided'}</p>
      <p><strong>Company:</strong> ${req.body.company || 'Not provided'}</p>
      <p><strong>Type:</strong> ${req.body.type}</p>
      <p><strong>Message:</strong></p>
      <p>${req.body.message}</p>
      <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
    `;

    await sendEmail(recipientEmail, emailSubject, emailHtml);

    // Send auto-reply to sender
    const autoReplyHtml = `
      <h2>Thank You for Contacting The Vitta Vardhan</h2>
      <p>Dear ${req.body.name},</p>
      <p>Thank you for reaching out to us. We have received your message and will get back to you shortly.</p>
      <p><strong>Your Message:</strong></p>
      <p>${req.body.message}</p>
      <p>Best regards,<br>The Vitta Vardhan Team</p>
    `;
    await sendEmail(req.body.email, 'Thank you for contacting us', autoReplyHtml);

    res.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Career Routes
app.post('/api/careers', [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('position').notEmpty().withMessage('Position is required'),
  body('experience').notEmpty().withMessage('Experience is required')
], validateRequest, async (req, res) => {
  try {
    const career = new Models.Career(req.body);
    await career.save();

    // Send email to HR
    const emailSubject = `New Job Application - ${req.body.position}`;
    const emailHtml = `
      <h2>New Job Application</h2>
      <p><strong>Name:</strong> ${req.body.name}</p>
      <p><strong>Email:</strong> ${req.body.email}</p>
      <p><strong>Phone:</strong> ${req.body.phone || 'Not provided'}</p>
      <p><strong>Position:</strong> ${req.body.position}</p>
      <p><strong>Experience:</strong> ${req.body.experience}</p>
      <p><strong>Message:</strong></p>
      <p>${req.body.message || 'Not provided'}</p>
      <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
    `;

    await sendEmail(process.env.HR_EMAIL, emailSubject, emailHtml);

    // Send confirmation to applicant
    const confirmationHtml = `
      <h2>Application Received - The Vitta Vardhan</h2>
      <p>Dear ${req.body.name},</p>
      <p>Thank you for applying for the ${req.body.position} position at The Vitta Vardhan.</p>
      <p>We have received your application and our HR team will review it shortly. If your profile matches our requirements, we will contact you for further discussions.</p>
      <p>Best regards,<br>HR Team<br>The Vitta Vardhan</p>
    `;
    await sendEmail(req.body.email, 'Application Received', confirmationHtml);

    res.json({ success: true, message: 'Application submitted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Testimonial Routes
app.get('/api/testimonials', async (req, res) => {
  try {
    const testimonials = await Models.Testimonial.find({ approved: true }).sort({ date: -1 });
    res.json({ success: true, data: testimonials });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

app.post('/api/testimonials', [
  body('name').notEmpty().withMessage('Name is required'),
  body('country').notEmpty().withMessage('Country is required'),
  body('message').notEmpty().withMessage('Message is required')
], validateRequest, async (req, res) => {
  try {
    const testimonial = new Models.Testimonial(req.body);
    await testimonial.save();
    res.json({ success: true, message: 'Testimonial submitted for review' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Client Routes
app.get('/api/clients', async (req, res) => {
  try {
    const { industry, featured, search } = req.query;
    let query = {};
    
    if (industry && industry !== 'all') query.industry = industry;
    if (featured === 'true') query.featured = true;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { location: { $regex: search, $options: 'i' } }
      ];
    }

    const clients = await Models.Client.find(query).sort({ featured: -1, date: -1 });
    res.json({ success: true, data: clients });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Admin Routes (Protected)
app.post('/api/admin/login', [
  body('username').notEmpty().withMessage('Username is required'),
  body('password').notEmpty().withMessage('Password is required')
], validateRequest, async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Models.User.findOne({ username });
    
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE }
    );

    res.json({ success: true, token, user: { id: user._id, username: user.username, role: user.role } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get all contacts (admin only)
app.get('/api/admin/contacts', authenticateToken, async (req, res) => {
  try {
    const contacts = await Models.Contact.find().sort({ date: -1 });
    res.json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get all careers (admin only)
app.get('/api/admin/careers', authenticateToken, async (req, res) => {
  try {
    const careers = await Models.Career.find().sort({ date: -1 });
    res.json({ success: true, data: careers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
  
  // Create default users
  await createDefaultUsers();
});
