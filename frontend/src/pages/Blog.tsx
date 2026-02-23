import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, Search, Clock, ArrowRight, Heart, MessageCircle, Share2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatAssistant from '../components/ChatAssistant';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the future of web development, from AI integration to edge computing and beyond.",
      content: "Full blog content would go here...",
      author: "Vitta Vardhan",
      category: "Technology",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "🚀",
      tags: ["Web Development", "AI", "Future Tech"],
      likes: 245,
      comments: 18,
      featured: true
    },
    {
      id: 2,
      title: "Importance of Investing More in Branding",
      excerpt: "Discover why strategic branding is crucial for business growth and how it impacts customer perception and loyalty.",
      content: "Full blog content would go here...",
      author: "Marketing Team",
      category: "Business",
      date: "2021-12-14",
      readTime: "7 min read",
      image: "🎨",
      tags: ["Branding", "Marketing", "Business Strategy"],
      likes: 189,
      comments: 23,
      featured: true
    },
    {
      id: 3,
      title: "Mobile-First Design: Creating Responsive Experiences",
      excerpt: "Learn the principles of mobile-first design and how to create exceptional user experiences across all devices.",
      content: "Full blog content would go here...",
      author: "Design Team",
      category: "Design",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "📱",
      tags: ["Mobile Design", "UX", "Responsive"],
      likes: 156,
      comments: 12,
      featured: false
    },
    {
      id: 4,
      title: "Cloud Computing: Transforming Business Operations",
      excerpt: "How cloud computing is revolutionizing the way businesses operate and scale in the digital age.",
      content: "Full blog content would go here...",
      author: "Tech Team",
      category: "Technology",
      date: "2024-01-05",
      readTime: "8 min read",
      image: "☁️",
      tags: ["Cloud", "Business", "Innovation"],
      likes: 203,
      comments: 15,
      featured: false
    },
    {
      id: 5,
      title: "The Psychology of User Experience Design",
      excerpt: "Understanding the psychological principles that drive effective UX design and user engagement.",
      content: "Full blog content would go here...",
      author: "UX Team",
      category: "Design",
      date: "2023-12-28",
      readTime: "10 min read",
      image: "🧠",
      tags: ["UX Psychology", "Design", "User Behavior"],
      likes: 178,
      comments: 20,
      featured: false
    },
    {
      id: 6,
      title: "Digital Marketing Strategies for 2024",
      excerpt: "Essential digital marketing strategies that will help your business thrive in the competitive online landscape.",
      content: "Full blog content would go here...",
      author: "Marketing Team",
      category: "Marketing",
      date: "2023-12-20",
      readTime: "6 min read",
      image: "📈",
      tags: ["Digital Marketing", "Strategy", "Growth"],
      likes: 267,
      comments: 31,
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Posts', count: blogPosts.length },
    { id: 'Technology', label: 'Technology', count: blogPosts.filter(p => p.category === 'Technology').length },
    { id: 'Business', label: 'Business', count: blogPosts.filter(p => p.category === 'Business').length },
    { id: 'Design', label: 'Design', count: blogPosts.filter(p => p.category === 'Design').length },
    { id: 'Marketing', label: 'Marketing', count: blogPosts.filter(p => p.category === 'Marketing').length }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
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
              Our <span className="text-red-400">Blog</span>
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Insights, trends, and expert opinions from our team of professionals.
            </p>
            
            {/* Blog Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white">150+</div>
                <div className="text-sm text-gray-200">Articles</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-sm text-gray-200">Readers</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white">100+</div>
                <div className="text-sm text-gray-200">Topics</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-200">Updates</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Posts</h2>
            <p className="text-gray-600">Must-read articles from our experts</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                  <span className="text-6xl">{post.image}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-primary bg-opacity-10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <button className="text-primary hover:text-blue-700 font-medium flex items-center space-x-1">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300"
              >
                <div className="h-40 bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                  <span className="text-5xl">{post.image}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-primary bg-opacity-10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-gray-500">
                      <div className="flex items-center space-x-1 hover:text-red-500 cursor-pointer">
                        <Heart className="w-4 h-4" />
                        <span className="text-xs">{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1 hover:text-blue-500 cursor-pointer">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-xs">{post.comments}</span>
                      </div>
                      <div className="flex items-center space-x-1 hover:text-green-500 cursor-pointer">
                        <Share2 className="w-4 h-4" />
                      </div>
                    </div>
                    <button className="text-primary hover:text-blue-700 font-medium text-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No posts found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Blog;
