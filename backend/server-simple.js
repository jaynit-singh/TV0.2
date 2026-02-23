const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const { body, validationResult } = require('express-validator');
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

// In-memory storage (for demo purposes)
const users = [
  { id: 1, username: 'admin', password: 'admin123', role: 'admin', email: 'admin@thevittavardhan.com' },
  { id: 2, username: 'user1', password: 'user123', role: 'user', email: 'user1@test.com' },
  { id: 3, username: 'user2', password: 'user123', role: 'user', email: 'user2@test.com' },
  { id: 4, username: 'demo', password: 'demo123', role: 'user', email: 'demo@test.com' }
];

// Create default admin user
const createDefaultAdmin = async () => {
  try {
    const existingAdmin = users.find(u => u.username === 'admin');
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash('admin123', 12);
      users.push({
        id: 1,
        username: 'admin',
        email: 'admin@thevittavardhan.com',
        password: hashedPassword,
        role: 'admin'
      });
      console.log('Default admin user created: username=admin, password=admin123');
    }
  } catch (error) {
    console.error('Error creating default admin:', error);
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

  jwt.verify(token, process.env.JWT_SECRET || 'default_secret', (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// API Routes

// User Login
app.post('/api/login', [
  body('username').notEmpty().withMessage('Username is required'),
  body('password').notEmpty().withMessage('Password is required')
], validateRequest, async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.role === 'user');
    
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET || 'default_secret',
      { expiresIn: '7d' }
    );

    res.json({ success: true, token, user: { id: user.id, username: user.username, role: user.role } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Admin Login
app.post('/api/admin/login', [
  body('username').notEmpty().withMessage('Username is required'),
  body('password').notEmpty().withMessage('Password is required')
], validateRequest, async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET || 'default_secret',
      { expiresIn: '7d' }
    );

    res.json({ success: true, token, user: { id: user.id, username: user.username, role: user.role } });
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
    const contact = {
      id: contacts.length + 1,
      ...req.body,
      date: new Date(),
      status: 'pending'
    };
    contacts.push(contact);
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
    const career = {
      id: careers.length + 1,
      ...req.body,
      date: new Date(),
      status: 'pending'
    };
    careers.push(career);
    res.json({ success: true, message: 'Application submitted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get all contacts (admin only)
app.get('/api/admin/contacts', authenticateToken, async (req, res) => {
  try {
    res.json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get all careers (admin only)
app.get('/api/admin/careers', authenticateToken, async (req, res) => {
  try {
    res.json({ success: true, data: careers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Update contact status (admin only)
app.put('/api/admin/contacts/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const contactIndex = contacts.findIndex(c => c.id == id);
    if (contactIndex === -1) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }
    
    contacts[contactIndex].status = status;
    res.json({ success: true, data: contacts[contactIndex] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Update career status (admin only)
app.put('/api/admin/careers/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const careerIndex = careers.findIndex(c => c.id == id);
    if (careerIndex === -1) {
      return res.status(404).json({ success: false, message: 'Career application not found' });
    }
    
    careers[careerIndex].status = status;
    res.json({ success: true, data: careers[careerIndex] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Delete contact (admin only)
app.delete('/api/admin/contacts/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const contactIndex = contacts.findIndex(c => c.id == id);
    
    if (contactIndex === -1) {
      return res.status(404).json({ success: false, message: 'Contact not found' });
    }
    
    contacts.splice(contactIndex, 1);
    res.json({ success: true, message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Delete career (admin only)
app.delete('/api/admin/careers/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const careerIndex = careers.findIndex(c => c.id == id);
    
    if (careerIndex === -1) {
      return res.status(404).json({ success: false, message: 'Career application not found' });
    }
    
    careers.splice(careerIndex, 1);
    res.json({ success: true, message: 'Career application deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get analytics data (admin only)
app.get('/api/admin/analytics', authenticateToken, async (req, res) => {
  try {
    const analytics = {
      totalContacts: contacts.length,
      totalCareers: careers.length,
      contactsByType: {
        general: contacts.filter(c => c.type === 'general').length,
        support: contacts.filter(c => c.type === 'support').length,
        hr: contacts.filter(c => c.type === 'hr').length,
        help: contacts.filter(c => c.type === 'help').length,
        partnership: contacts.filter(c => c.type === 'partnership').length,
      },
      careersByStatus: {
        pending: careers.filter(c => c.status === 'pending').length,
        'under-review': careers.filter(c => c.status === 'under-review').length,
        shortlisted: careers.filter(c => c.status === 'shortlisted').length,
        rejected: careers.filter(c => c.status === 'rejected').length,
        hired: careers.filter(c => c.status === 'hired').length,
      },
      recentActivity: [
        ...contacts.slice(0, 5).map(c => ({ ...c, type: 'contact' })),
        ...careers.slice(0, 5).map(c => ({ ...c, type: 'career' }))
      ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 10)
    };
    
    res.json({ success: true, data: analytics });
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
  
  // Create default admin user
  await createDefaultAdmin();
});
