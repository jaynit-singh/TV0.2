# The Vitta Vardhan Website

A modern, responsive full-stack website for The Vitta Vardhan company built with React, Node.js, and MongoDB.

## 🚀 Features

- **Modern Design**: Clean, professional UI with Tailwind CSS
- **Fully Responsive**: Works perfectly on all devices
- **Fast Performance**: Optimized for speed and SEO
- **Interactive Elements**: Smooth animations with Framer Motion
- **Contact Forms**: Working contact and career application forms
- **Email Integration**: Automated email notifications
- **Admin Panel**: Content management system
- **Blog System**: Dynamic blog with categories and search
- **Portfolio**: Project showcase with filtering
- **Client Management**: Client testimonials and listings

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication
- **Nodemailer** - Email sending
- **Express Validator** - Input validation
- **Helmet** - Security middleware
- **Rate Limiting** - API protection

## 📁 Project Structure

```
new-website/
├── frontend/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── App.tsx         # Main app component
│   │   └── index.css       # Global styles
│   ├── package.json
│   └── tailwind.config.js
├── backend/                  # Node.js backend
│   ├── .env                # Environment variables
│   ├── server.js           # Main server file
│   └── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd new-website
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Set up environment variables**
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env with your configuration
   ```

### Environment Variables

Create a `.env` file in the backend directory:

```env
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/thevittavardhan

# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

# Company Emails
COMPANY_EMAIL=thevittavardhan@gmail.com
HR_EMAIL=thevittavardhanhrm@gmail.com
SUPPORT_EMAIL=thevittavardhans@gmail.com
HELP_EMAIL=thevittvaradhan.help@gmail.com
```

### Running the Application

1. **Start MongoDB**
   ```bash
   # For local MongoDB
   mongod
   ```

2. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   # Server will run on http://localhost:5000
   ```

3. **Start the frontend development server**
   ```bash
   cd frontend
   npm start
   # App will run on http://localhost:3000
   ```

## 📱 Available Pages

- **Home** (`/`) - Landing page with hero section and features
- **About** (`/about`) - Company information and team
- **Portfolio** (`/portfolio`) - Project showcase with filtering
- **Blog** (`/blog`) - Blog posts with categories and search
- **Services** (`/services`) - Service offerings (Deliver, Bring, Express, Package)
- **Careers** (`/careers`) - Job openings and application form
- **Clients** (`/clients`) - Client testimonials and listings
- **Contact** (`/contact`) - Contact form and information

## 🔧 API Endpoints

### Public Endpoints
- `GET /api/blogs` - Get all blog posts
- `GET /api/testimonials` - Get approved testimonials
- `GET /api/clients` - Get all clients
- `POST /api/contact` - Submit contact form
- `POST /api/careers` - Submit job application
- `POST /api/testimonials` - Submit testimonial

### Admin Endpoints (Protected)
- `POST /api/admin/login` - Admin login
- `GET /api/admin/contacts` - Get all contact submissions
- `GET /api/admin/careers` - Get all career applications
- `POST /api/blogs` - Create new blog post

## 🎨 Design System

### Colors
- **Primary**: Blue (#0066CC)
- **Secondary**: Red (#CC0000)
- **Dark**: #1a1a1a
- **Light**: #f8f9fa

### Typography
- **Font Family**: Inter
- **Headings**: Font weights 600-800
- **Body**: Font weight 400

### Components
- **Header**: Fixed navigation with mobile menu
- **Hero**: Gradient backgrounds with animations
- **Cards**: Shadow effects with hover states
- **Forms**: Modern input styling with validation
- **Footer**: Comprehensive footer with links

## 📧 Email Configuration

For Gmail, you'll need to:
1. Enable 2-factor authentication
2. Generate an App Password
3. Use the App Password in `EMAIL_PASS`

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy the build folder
```

### Backend (Heroku/Railway)
```bash
cd backend
# Set environment variables in deployment platform
npm start
```

### Database (MongoDB Atlas)
1. Create a free MongoDB Atlas account
2. Create a cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env`

## 🔒 Security Features

- **Helmet.js** - Security headers
- **Rate Limiting** - API protection
- **Input Validation** - Express Validator
- **JWT Authentication** - Secure admin access
- **CORS Configuration** - Cross-origin protection
- **Environment Variables** - Secure configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

For support, email us at:
- **General**: thevittavardhan@gmail.com
- **HR**: thevittavardhanhrm@gmail.com
- **Support**: thevittavardhans@gmail.com
- **Help**: thevittvaradhan.help@gmail.com

## 🌟 Features Highlights

### ✨ Interactive Elements
- Smooth scroll animations
- Hover effects on cards and buttons
- Mobile-responsive navigation
- Dynamic form validation
- Loading states

### 📊 Content Management
- Dynamic blog system
- Client testimonials
- Portfolio projects
- Career applications
- Contact form submissions

### 🎨 Modern UI/UX
- Clean, minimalist design
- Consistent color scheme
- Professional typography
- Intuitive navigation
- Accessibility features

---

**Built with ❤️ by The Vitta Vardhan Team**
