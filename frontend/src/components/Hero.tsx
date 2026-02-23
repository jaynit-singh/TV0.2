import React from 'react';
import { ArrowRight, Play, CheckCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const features = [
    {
      name: 'Innovative Solutions',
      icon: CheckCircle,
    },
    {
      name: 'Expert Team',
      icon: CheckCircle,
    },
    {
      name: '24/7 Support',
      icon: CheckCircle,
    },
    {
      name: 'Cost Effective',
      icon: CheckCircle,
    }
  ];

  const stats = [
    { value: '100+', label: 'Projects Delivered' },
    { value: '24/7', label: 'Support' },
    { value: 'Secure', label: 'Architecture' },
    { value: 'Scalable', label: 'Solutions' }
  ];

  const techIcons = [
    { name: 'React', icon: CheckCircle },
    { name: 'Node.js', icon: CheckCircle },
    { name: 'MongoDB', icon: CheckCircle },
    { name: 'Cloud', icon: CheckCircle },
    { name: 'Mobile', icon: CheckCircle },
    { name: 'API', icon: CheckCircle }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      text: 'The VittaVardhan team delivered exceptional results on time and within budget.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'StartupHub',
      text: 'Their innovative approach to software development transformed our business.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Global Solutions',
      text: 'Professional, reliable, and always available when we need them.',
      rating: 5
    }
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-secondary/80"></div>
        
        {/* Glass Morphism Overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>
        
        {/* Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-6xl font-bold leading-tight mb-4"
            >
              Transforming Businesses with Smart Software Solutions
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto"
            >
              We build innovative digital experiences that drive growth and success for your business
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-red/90 transition-colors duration-200 shadow-lg"
              >
                Get Free Consultation
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-royal-blue text-royal-blue px-8 py-4 rounded-lg font-semibold hover:bg-royal-blue hover:text-white transition-colors duration-200"
              >
                View Our Services
                <Play className="inline-block ml-2 w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Features */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3 bg-tech-white/10 backdrop-blur-sm p-4 rounded-lg border border-tech-white/20 hover:bg-tech-white/20 transition-all duration-300"
                >
                  <feature.icon className="w-6 h-6 text-accent-red" />
                  <span className="text-tech-white font-medium">{feature.name}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="w-64 h-64 bg-gradient-to-br from-royal-blue/20 to-accent-red/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-tech-white/30 mx-auto"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-tech-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                  <CheckCircle className="w-8 h-8 text-royal-blue" />
                </div>
                <h4 className="text-xl font-bold text-tech-white mb-2">Professional & Clean</h4>
                <p className="text-sm text-tech-white/80">Modern design with powerful functionality</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute top-8 right-8 bg-tech-white/10 backdrop-blur-sm rounded-lg p-6 border border-tech-white/20 lg:w-80"
        >
          <h3 className="text-lg font-semibold text-tech-white mb-4">Why Choose Us</h3>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-royal-blue mb-1">{stat.value}</div>
                <div className="text-sm text-tech-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-8 right-8 bg-tech-white/10 backdrop-blur-sm rounded-lg p-6 border border-tech-white/20 lg:w-80"
        >
          <h3 className="text-lg font-semibold text-tech-white mb-4">Technologies We Use</h3>
          <div className="flex flex-wrap gap-2">
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/20 transition-all duration-200 border border-white/20"
              >
                <tech.icon className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                <p className="text-xs text-white font-medium">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="absolute bottom-8 left-8 bg-tech-white/10 backdrop-blur-sm rounded-lg p-6 border border-tech-white/20 lg:w-80"
        >
          <h3 className="text-lg font-semibold text-tech-white mb-4">Client Testimonials</h3>
          <div className="space-y-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="border-l border-accent-red pl-4"
              >
                <div className="text-sm text-tech-white/80 mb-2">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-xs text-tech-white/60">{testimonial.company}</div>
                </div>
                <p className="text-sm text-tech-white italic">"{testimonial.text}"</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-accent-red fill-current' : 'text-tech-white/30 fill-current'}`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
