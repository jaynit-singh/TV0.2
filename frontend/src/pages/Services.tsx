import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Zap, Box, CheckCircle, ArrowRight, Phone, Mail, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'deliver',
      title: 'Deliver',
      icon: Truck,
      description: 'Reliable and timely delivery solutions for your business needs',
      longDescription: 'Our comprehensive delivery service ensures your packages reach their destination safely and on time. With real-time tracking and professional handling, we guarantee peace of mind for every shipment.',
      features: [
        'Same-day delivery available',
        'Real-time GPS tracking',
        'Professional handling',
        'Insurance coverage',
        '24/7 customer support',
        'Flexible scheduling options'
      ],
      benefits: [
        'Increased efficiency',
        'Cost-effective solutions',
        'Enhanced customer satisfaction',
        'Reduced delivery time',
        'Improved reliability'
      ],
      pricing: {
        basic: 'Starts at ₹299',
        standard: 'Starts at ₹499',
        premium: 'Starts at ₹799'
      }
    },
    {
      id: 'bring',
      icon: Package,
      title: 'Bring',
      description: 'Comprehensive logistics solutions to bring your products to market',
      longDescription: 'Complete supply chain management from warehouse to customer. Our bring service handles everything from inventory management to last-mile delivery, ensuring your products reach market efficiently.',
      features: [
        'Warehouse management',
        'Inventory tracking',
        'Supply chain optimization',
        'Multi-modal transportation',
        'Custom clearance handling',
        'Return management'
      ],
      benefits: [
        'Streamlined operations',
        'Reduced overhead costs',
        'Better inventory control',
        'Faster time-to-market',
        'Scalable solutions'
      ],
      pricing: {
        basic: 'Starts at ₹999',
        standard: 'Starts at ₹1,999',
        premium: 'Custom pricing'
      }
    },
    {
      id: 'express',
      icon: Zap,
      title: 'Express',
      description: 'High-speed express services for urgent deliveries and shipments',
      longDescription: 'When speed is critical, our express service delivers. Priority handling, dedicated routes, and expedited processing ensure your urgent shipments arrive in record time.',
      features: [
        'Priority handling',
        'Dedicated delivery routes',
        'Express processing',
        'Urgent pickup service',
        'Real-time priority updates',
        'Guaranteed delivery windows'
      ],
      benefits: [
        'Fastest delivery times',
        'Priority service',
        'Time-sensitive solutions',
        'Emergency delivery options',
        'Critical shipment handling'
      ],
      pricing: {
        basic: 'Starts at ₹599',
        standard: 'Starts at ₹899',
        premium: 'Starts at ₹1,299'
      }
    },
    {
      id: 'package',
      icon: Box,
      title: 'Package',
      description: 'Complete packaging solutions tailored to your requirements',
      longDescription: 'Professional packaging services that protect your products during transit. From custom boxes to specialized packaging materials, we ensure your items are secure and presentable.',
      features: [
        'Custom packaging design',
        'Quality materials',
        'Eco-friendly options',
        'Branded packaging',
        'Protective packaging',
        'Bulk packaging solutions'
      ],
      benefits: [
        'Product protection',
        'Brand enhancement',
        'Cost-effective materials',
        'Environmental sustainability',
        'Professional appearance'
      ],
      pricing: {
        basic: 'Starts at ₹199',
        standard: 'Starts at ₹399',
        premium: 'Starts at ₹699'
      }
    }
  ];

  const processSteps = [
    { step: 1, title: 'Consultation', description: 'We understand your requirements and customize solutions' },
    { step: 2, title: 'Planning', description: 'Detailed planning and strategy development' },
    { step: 3, title: 'Execution', description: 'Professional implementation with quality assurance' },
    { step: 4, title: 'Support', description: 'Ongoing support and optimization' }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-red-400">Services</span>
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Comprehensive logistics and delivery solutions designed to meet 
              your business needs with excellence and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                  selectedService === service.id
                    ? 'border-primary shadow-xl'
                    : 'border-gray-200 hover:border-primary hover:shadow-lg'
                }`}
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
              >
                <div className="bg-primary bg-opacity-10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center mb-4">{service.description}</p>
                <div className="text-center">
                  <span className="text-primary font-medium">
                    {selectedService === service.id ? 'Show Less' : 'Learn More'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      {selectedService && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {services.filter(s => s.id === selectedService).map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="bg-primary bg-opacity-10 rounded-full p-3 w-16 h-16 flex items-center justify-center">
                          <service.icon className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                          <p className="text-primary font-medium">Premium Service</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.longDescription}</p>
                      
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                        <div className="space-y-3">
                          {service.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits</h3>
                        <div className="space-y-3">
                          {service.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Pricing Plans</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Basic</span>
                            <span className="font-bold text-gray-900">{service.pricing.basic}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Standard</span>
                            <span className="font-bold text-gray-900">{service.pricing.standard}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Premium</span>
                            <span className="font-bold text-gray-900">{service.pricing.premium}</span>
                          </div>
                        </div>
                        <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 mt-6">
                          Get Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures smooth and efficient service delivery from start to finish.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="bg-primary bg-opacity-10 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary/80"></div>
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your requirements and get a customized solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us Now</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200 inline-flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Services;
