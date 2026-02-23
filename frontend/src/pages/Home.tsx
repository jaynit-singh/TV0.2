import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Clock, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';

const Home: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+', description: 'Trusted by businesses worldwide' },
    { icon: TrendingUp, label: 'Projects Completed', value: '1000+', description: 'Successfully delivered projects' },
    { icon: Award, label: 'Years Experience', value: '10+', description: 'Industry expertise and knowledge' },
    { icon: Clock, label: 'Support Available', value: '24/7', description: 'Always here to help you' },
  ];

  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      icon: '🌐',
      features: ['Responsive Design', 'Modern Frameworks', 'SEO Optimized']
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      icon: '�',
      features: ['React Native', 'Flutter', 'Cross-Platform']
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      icon: '☁️',
      features: ['AWS & Azure', 'Serverless', 'Auto-Scaling']
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence',
      icon: '�',
      features: ['SEO & SEM', 'Social Media', 'Content Marketing']
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      company: 'TechCorp Solutions',
      country: 'India',
      message: 'Outstanding development team! They delivered our complex project ahead of schedule with exceptional quality. Highly recommended!',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Global Enterprises',
      country: 'USA',
      message: 'Professional, reliable, and innovative. The VittaVardhan team transformed our business operations completely.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'Digital Innovations',
      country: 'Spain',
      message: 'Excellent communication and technical expertise. They understood our requirements perfectly and delivered beyond expectations.',
      rating: 5
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Stats Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url("/bg-pattern.svg")',
            backgroundSize: '100px 100px'
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is reflected in our track record of successful projects and satisfied clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/20 hover:border-primary/40">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                  <div className="text-sm text-gray-500 mt-2">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Comprehensive solutions designed to meet your business needs with excellence and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-primary"
              >
                <div className="text-6xl mb-6 text-center">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Real feedback from clients who have experienced our exceptional service and commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic text-lg">"{testimonial.message}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                    <p className="text-xs text-gray-500">{testimonial.country}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 italic">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their business with our innovative solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Home;
