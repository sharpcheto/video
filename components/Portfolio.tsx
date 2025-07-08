
'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Play } from 'lucide-react'

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: 'Fashion Brand Campaign',
      platform: 'Instagram Reels',
      views: '2.3M',
      engagement: '15.2%',
      thumbnail: '/api/placeholder/300/400'
    },
    {
      id: 2,
      title: 'Restaurant Promo',
      platform: 'TikTok',
      views: '1.8M',
      engagement: '18.7%',
      thumbnail: '/api/placeholder/300/400'
    },
    {
      id: 3,
      title: 'Tech Product Launch',
      platform: 'Facebook',
      views: '945K',
      engagement: '12.4%',
      thumbnail: '/api/placeholder/300/400'
    },
    {
      id: 4,
      title: 'Fitness Challenge',
      platform: 'Instagram Reels',
      views: '3.1M',
      engagement: '22.1%',
      thumbnail: '/api/placeholder/300/400'
    },
    {
      id: 5,
      title: 'Beauty Tutorial',
      platform: 'TikTok',
      views: '2.7M',
      engagement: '19.8%',
      thumbnail: '/api/placeholder/300/400'
    },
    {
      id: 6,
      title: 'Travel Destination',
      platform: 'Instagram Reels',
      views: '1.5M',
      engagement: '16.3%',
      thumbnail: '/api/placeholder/300/400'
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of my recent work that helped brands achieve incredible 
            engagement and reach millions of potential customers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 hover:bg-white/30 transition-colors duration-200">
                    <Play className="text-white" size={24} />
                  </button>
                </div>
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {item.platform}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span>{item.views} views</span>
                  <span>{item.engagement} engagement</span>
                </div>
                <button className="mt-4 text-primary-600 hover:text-primary-700 font-medium flex items-center space-x-1">
                  <span>View Project</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Want to see more of my work? Follow me on social media!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200"
            >
              Instagram
            </a>
            <a
              href="#"
              className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200"
            >
              TikTok
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200"
            >
              Facebook
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
