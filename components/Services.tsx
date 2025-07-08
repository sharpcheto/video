
'use client'

import { motion } from 'framer-motion'
import { Video, Zap, Target, TrendingUp, Edit, Megaphone } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Video,
      title: 'Short-Form Video Creation',
      description: 'Custom-crafted videos optimized for Instagram Reels, TikTok, and Facebook that capture attention and drive engagement.',
      features: ['15-60 second videos', 'Trend-aware content', 'Brand-aligned messaging']
    },
    {
      icon: Edit,
      title: 'Video Editing & Post-Production',
      description: 'Professional editing services that transform raw footage into polished, engaging content ready for social media.',
      features: ['Color grading', 'Motion graphics', 'Sound design']
    },
    {
      icon: Target,
      title: 'Content Strategy',
      description: 'Data-driven content strategies that align with your brand goals and target audience preferences.',
      features: ['Audience analysis', 'Content planning', 'Trend forecasting']
    },
    {
      icon: TrendingUp,
      title: 'Social Media Growth',
      description: 'Comprehensive growth strategies designed to increase your follower count and boost engagement rates.',
      features: ['Hashtag optimization', 'Posting schedules', 'Community management']
    },
    {
      icon: Megaphone,
      title: 'Brand Storytelling',
      description: 'Compelling narratives that connect with your audience emotionally and build lasting brand relationships.',
      features: ['Brand voice development', 'Story arcs', 'Emotional connection']
    },
    {
      icon: Zap,
      title: 'Viral Marketing',
      description: 'Strategic approaches to create content with viral potential, maximizing reach and brand exposure.',
      features: ['Trend integration', 'Viral mechanics', 'Rapid response content']
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive video content solutions designed to elevate your brand 
            and drive meaningful engagement across all social media platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <service.icon className="text-primary-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
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
          <button className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition-colors duration-200">
            Get Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  )
}
