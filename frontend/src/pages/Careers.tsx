import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, DollarSign, Send, Users, TrendingUp, Award, Heart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';

const Careers: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null as File | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '5+ years',
      salary: '₹15-25 LPA',
      description: 'We are looking for an experienced Full Stack Developer to join our engineering team and help build scalable web applications.',
      requirements: [
        '5+ years of experience in web development',
        'Strong proficiency in React, Node.js, and MongoDB',
        'Experience with cloud services (AWS/Azure)',
        'Strong problem-solving skills',
        'Excellent communication skills'
      ],
      benefits: [
        'Competitive salary and benefits',
        'Flexible work hours',
        'Remote work options',
        'Professional development opportunities',
        'Health insurance',
        'Paid time off'
      ],
      posted: '2 days ago',
      urgent: true
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Pune',
      type: 'Full-time',
      experience: '3+ years',
      salary: '₹8-15 LPA',
      description: 'Join our design team to create beautiful and intuitive user interfaces for our products.',
      requirements: [
        '3+ years of experience in UI/UX design',
        'Proficiency in Figma, Adobe Creative Suite',
        'Strong portfolio of design projects',
        'Understanding of user-centered design principles',
        'Experience with responsive design'
      ],
      benefits: [
        'Creative work environment',
        'Latest design tools and software',
        'Collaborative team culture',
        'Professional growth opportunities',
        'Health and wellness benefits'
      ],
      posted: '1 week ago',
      urgent: false
    },
    {
      id: 3,
      title: 'Digital Marketing Manager',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '₹10-18 LPA',
      description: 'Lead our digital marketing efforts and drive growth through innovative marketing strategies.',
      requirements: [
        '4+ years of digital marketing experience',
        'Proven track record of successful campaigns',
        'Experience with SEO, SEM, and social media marketing',
        'Strong analytical skills',
        'Experience with marketing automation tools'
      ],
      benefits: [
        'Remote work flexibility',
        'Performance-based bonuses',
        'Marketing budget autonomy',
        'Conference and training opportunities',
        'Great work-life balance'
      ],
      posted: '3 days ago',
      urgent: true
    },
    {
      id: 4,
      title: 'Business Development Executive',
      department: 'Sales',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '2+ years',
      salary: '₹6-12 LPA',
      description: 'Help us grow our business by identifying new opportunities and building client relationships.',
      requirements: [
        '2+ years of business development experience',
        'Strong communication and negotiation skills',
        'Experience in B2B sales',
        'Ability to work independently',
        'Goal-oriented mindset'
      ],
      benefits: [
        'Attractive commission structure',
        'Company car allowance',
        'Travel opportunities',
        'Sales training programs',
        'Career advancement potential'
      ],
      posted: '5 days ago',
      urgent: false
    }
  ];

  const companyCulture = [
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Work with talented individuals who support and inspire each other'
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description: 'Continuous learning and career advancement paths'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and remote work options'
    },
    {
      icon: Award,
      title: 'Recognition & Rewards',
      description: 'Celebrate achievements and outstanding performance'
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0]
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setSubmitMessage('Thank you for your application! We will review it and get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        message: '',
        resume: null
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-secondary/80"></div>
        
        {/* Glass Morphism Overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>
        
        {/* Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("/bg-pattern.svg")',
            backgroundSize: '100px 100px'
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our <span className="text-red-400">Team</span>
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Build your career with us and be part of something amazing.
            </p>
            
            {/* Career Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-200">Team Members</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-gray-200">Years in Business</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white">1000+</div>
                <div className="text-sm text-gray-200">Projects Completed</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white">4.8⭐</div>
                <div className="text-sm text-gray-200">Employee Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We believe in creating an environment where everyone can thrive and make a difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyCulture.map((culture, index) => (
              <motion.div
                key={culture.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary bg-opacity-10 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <culture.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{culture.title}</h3>
                <p className="text-gray-600">{culture.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600">
              Explore our current job opportunities and find your perfect role.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                        <span className="flex items-center space-x-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.department}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4" />
                          <span>{job.salary}</span>
                        </span>
                      </div>
                    </div>
                    {job.urgent && (
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">
                        Urgent
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 mb-4">{job.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {req}
                        </li>
                      ))}
                      {job.requirements.length > 3 && (
                        <li className="text-sm text-primary">+{job.requirements.length - 3} more requirements</li>
                      )}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Posted {job.posted}</span>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Apply for a Position</h2>
              <p className="text-xl text-gray-600">
                Don't see a perfect fit? Send us your resume and we'll keep you in mind for future opportunities.
              </p>
            </div>

            {submitMessage ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Application Received!</h3>
                <p className="text-green-700 mb-6">{submitMessage}</p>
                <button
                  onClick={() => setSubmitMessage('')}
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                      Position Applied For *
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    >
                      <option value="">Select a position</option>
                      {jobOpenings.map((job) => (
                        <option key={job.id} value={job.title}>{job.title}</option>
                      ))}
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="e.g., 3+ years"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                    Resume/CV *
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter / Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                    placeholder="Tell us why you're interested in this position..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Application'}</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Careers;
