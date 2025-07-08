
'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Fashion Forward Co.',
      rating: 5,
      text: 'Working with this video expert transformed our social media presence completely. Our engagement rates increased by 300% within just two months!',
      avatar: '/api/placeholder/80/80'
    },
    {
      name: 'Mike Chen',
      company: 'TechStart Inc.',
      rating: 5,
      text: 'The quality of content and understanding of our brand was exceptional. Our product launch video went viral and brought in countless new customers.',
      avatar: '/api/placeholder/80/80'
    },
    {
      name: 'Emma Rodriguez',
      company: 'Wellness Studio',
      rating: 5,
      text: 'Professional, creative, and results-driven. The videos created for our fitness challenges helped us grow from 5K to 50K followers in 6 months.',
      avatar: '/api/placeholder/80/80'
    },
    {
      name: 'David Thompson',
      company: 'Local Restaurant',
      rating: 5,
      text: 'Our food videos on TikTok and Instagram brought so many new customers that we had to expand our delivery radius. Amazing ROI!',
      avatar: '/api/placeholder/80/80'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients say about 
            the impact of professional video content on their businesses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 text-primary-200" size={32} />
                <p className="text-gray-700 text-lg leading-relaxed pl-6">
                  {testimonial.text}
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Let's create video content that drives real results for your business.
            </p>
            <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
