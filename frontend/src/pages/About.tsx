import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Lightbulb, Heart, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To provide innovative solutions that empower businesses to achieve their full potential through technology and excellence.'
    },
    {
      icon: Lightbulb,
      title: 'Vision',
      description: 'To be the global leader in business solutions, recognized for our innovation, reliability, and customer-centric approach.'
    },
    {
      icon: Heart,
      title: 'Values',
      description: 'Integrity, Innovation, Excellence, and Customer Success are at the core of everything we do.'
    }
  ];

  const team = [
    {
      name: 'Vitta Vardhan',
      role: 'Founder & CEO',
      description: 'Visionary leader with 15+ years of experience in business transformation and technology innovation.',
      image: 'VV'
    },
    {
      name: 'Raj Sharma',
      role: 'CTO',
      description: 'Technology expert specializing in scalable solutions and digital transformation strategies.',
      image: 'RS'
    },
    {
      name: 'Priya Patel',
      role: 'COO',
      description: 'Operations excellence expert ensuring smooth delivery and client satisfaction across all projects.',
      image: 'PP'
    },
    {
      name: 'Amit Kumar',
      role: 'Head of Sales',
      description: 'Business development specialist with a proven track record of building lasting client relationships.',
      image: 'AK'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '10+', label: 'Years Experience' },
    { number: '50+', label: 'Team Members' }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary/80"></div>
        
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-primary">The Vitta Vardhan</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a team of passionate professionals dedicated to transforming businesses 
              through innovative solutions and exceptional service. Our journey began with a 
              simple mission: to help businesses thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary bg-opacity-10 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <value.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-3xl font-bold text-primary mb-2">{achievement.number}</h3>
                  <p className="text-gray-600">{achievement.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the talented individuals who drive our success and share our passion for excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-primary to-blue-600 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">From Vision to Reality</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  The Vitta Vardhan was founded with a clear vision: to bridge the gap between 
                  traditional business practices and modern technological solutions. Our journey 
                  began in a small office with a big dream - to empower businesses to reach their 
                  full potential.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Over the years, we've grown from a startup to a trusted partner for hundreds 
                  of businesses worldwide. Our commitment to excellence, innovation, and customer 
                  success has remained unchanged throughout our journey.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we continue to push boundaries, embrace new technologies, and deliver 
                  solutions that make a real difference in our clients' businesses and lives.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-8 shadow-2xl">
                  <div className="bg-white rounded-xl p-6">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="text-gray-600 font-medium">Trusted & Certified</p>
                        <p className="text-sm text-gray-500">ISO 9001:2015 Certified</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default About;
