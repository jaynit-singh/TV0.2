import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Globe, TrendingUp, Award, Users, Search, Filter } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';

const Clients: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const clients = [
    {
      id: 1,
      name: 'TechCorp Solutions',
      industry: 'Technology',
      logo: '💻',
      description: 'Leading software development company specializing in enterprise solutions.',
      location: 'Bangalore, India',
      employees: '500-1000',
      website: 'www.techcorp.com',
      testimonial: 'The Vitta Vardhan has been instrumental in our digital transformation journey. Their expertise and dedication are unmatched.',
      rating: 5,
      projects: 12,
      years: 4,
      featured: true
    },
    {
      id: 2,
      name: 'Global Finance Ltd',
      industry: 'Banking',
      logo: '🏦',
      description: 'International banking and financial services provider.',
      location: 'Mumbai, India',
      employees: '1000+',
      website: 'www.globalfinance.com',
      testimonial: 'Exceptional service and innovative solutions. They helped us streamline our operations significantly.',
      rating: 5,
      projects: 8,
      years: 3,
      featured: true
    },
    {
      id: 3,
      name: 'HealthPlus Medical',
      industry: 'Healthcare',
      logo: '🏥',
      description: 'Comprehensive healthcare provider with multiple hospitals and clinics.',
      location: 'Delhi, India',
      employees: '200-500',
      website: 'www.healthplus.com',
      testimonial: 'Their healthcare management system has revolutionized our patient care processes.',
      rating: 5,
      projects: 6,
      years: 2,
      featured: false
    },
    {
      id: 4,
      name: 'EduSmart Academy',
      industry: 'Education',
      logo: '🎓',
      description: 'Online education platform offering courses across various disciplines.',
      location: 'Pune, India',
      employees: '50-100',
      website: 'www.edusmart.com',
      testimonial: 'The learning platform they built for us has increased student engagement by 200%.',
      rating: 5,
      projects: 4,
      years: 2,
      featured: false
    },
    {
      id: 5,
      name: 'RetailMax Stores',
      industry: 'Retail',
      logo: '🛍️',
      description: 'Chain of retail stores with presence across major cities.',
      location: 'Hyderabad, India',
      employees: '1000+',
      website: 'www.retailmax.com',
      testimonial: 'Their inventory management solution has transformed our retail operations.',
      rating: 5,
      projects: 10,
      years: 5,
      featured: true
    },
    {
      id: 6,
      name: 'LogisticsPro',
      industry: 'Logistics',
      logo: '🚚',
      description: 'End-to-end logistics and supply chain solutions provider.',
      location: 'Chennai, India',
      employees: '200-500',
      website: 'www.logisticspro.com',
      testimonial: 'Outstanding logistics solutions that helped us reduce delivery times by 40%.',
      rating: 5,
      projects: 7,
      years: 3,
      featured: false
    },
    {
      id: 7,
      name: 'FoodieDelights',
      industry: 'Food & Beverage',
      logo: '🍕',
      description: 'Restaurant chain and food delivery service.',
      location: 'Mumbai, India',
      employees: '100-200',
      website: 'www.foodiedelights.com',
      testimonial: 'Their delivery app solution has boosted our online orders significantly.',
      rating: 5,
      projects: 3,
      years: 1,
      featured: false
    },
    {
      id: 8,
      name: 'GreenEnergy Co',
      industry: 'Renewable Energy',
      logo: '🌱',
      description: 'Solar and renewable energy solutions provider.',
      location: 'Gujarat, India',
      employees: '50-100',
      website: 'www.greenenergy.com',
      testimonial: 'Innovative solutions that helped us optimize our energy management systems.',
      rating: 5,
      projects: 5,
      years: 2,
      featured: false
    }
  ];

  const industries = [
    { id: 'all', label: 'All Industries', count: clients.length },
    { id: 'Technology', label: 'Technology', count: clients.filter(c => c.industry === 'Technology').length },
    { id: 'Banking', label: 'Banking', count: clients.filter(c => c.industry === 'Banking').length },
    { id: 'Healthcare', label: 'Healthcare', count: clients.filter(c => c.industry === 'Healthcare').length },
    { id: 'Education', label: 'Education', count: clients.filter(c => c.industry === 'Education').length },
    { id: 'Retail', label: 'Retail', count: clients.filter(c => c.industry === 'Retail').length },
    { id: 'Logistics', label: 'Logistics', count: clients.filter(c => c.industry === 'Logistics').length }
  ];

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Globe, label: 'Countries', value: '25+' },
    { icon: TrendingUp, label: 'Success Rate', value: '98%' },
    { icon: Award, label: 'Awards', value: '15+' }
  ];

  const featuredClients = clients.filter(client => client.featured);

  const filteredClients = clients.filter(client => {
    const matchesIndustry = selectedIndustry === 'all' || client.industry === selectedIndustry;
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesIndustry && matchesSearch;
  });

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
              Our <span className="text-red-400">Clients</span>
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Trusted by leading companies across various industries worldwide.
            </p>
            
            {/* Client Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-200">Happy Clients</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white">25+</div>
                <div className="text-sm text-gray-200">Countries</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-gray-200">Industries</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white">5⭐</div>
                <div className="text-sm text-gray-200">Avg Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-primary bg-opacity-10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Partnerships</h2>
            <p className="text-xl text-gray-600">
              Some of our most successful client relationships and collaborations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredClients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{client.logo}</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{client.name}</h3>
                        <span className="text-sm text-primary font-medium">{client.industry}</span>
                      </div>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                      Featured
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{client.description}</p>

                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="flex items-start space-x-2">
                      <Quote className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <p className="text-gray-700 italic text-sm">{client.testimonial}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Globe className="w-4 h-4" />
                        <span>{client.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{client.employees}</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{client.projects} Projects</span>
                      <span>{client.years} Years</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(client.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedIndustry === industry.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {industry.label} ({industry.count})
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search clients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* All Clients Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredClients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300"
              >
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="text-2xl">{client.logo}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm">{client.name}</h3>
                        <span className="text-xs text-primary">{client.industry}</span>
                      </div>
                    </div>
                    {client.featured && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-1 py-0.5 rounded">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 text-xs mb-3 line-clamp-2">{client.description}</p>

                  <div className="text-xs text-gray-500 space-y-1 mb-3">
                    <div className="flex items-center space-x-1">
                      <Globe className="w-3 h-3" />
                      <span>{client.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{client.employees}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t text-xs">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <span>{client.projects} projects</span>
                      <span>•</span>
                      <span>{client.years} years</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(client.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredClients.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No clients found matching your criteria.</p>
            </div>
          )}
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
              Join Our Growing Client Family
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Discover how we can help transform your business with innovative solutions 
              and exceptional service.
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Become Our Client
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Clients;
