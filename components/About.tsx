
'use client'

import { motion } from 'framer-motion'
import { Camera, Heart, Award, Users } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: Camera, number: '500+', label: 'Създадени видеа' },
    { icon: Users, number: '100+', label: 'Доволни клиенти' },
    { icon: Award, number: '50М+', label: 'Общо гледания' },
    { icon: Heart, number: '1М+', label: 'Ангажименти' }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-high-contrast">
            За мен
          </h2>
          <p className="text-xl text-medium-contrast max-w-3xl mx-auto">
            Аз съм страстен създател на видео съдържание с експертиза в изработката на завладяващи 
            кратки видеа, които увеличават ангажимента и превръщат зрителите в клиенти.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl p-8">
              <img
                src="/api/placeholder/400/500"
                alt="Profile"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-high-contrast">
              Превръщам идеите във вирусно съдържание
            </h3>
            <p className="text-medium-contrast text-lg leading-relaxed">
              С години опит в социалните медии и видеопродукцията, разбирам какво кара 
              съдържанието да стане вирусно. Комбинирам креативното разказване с 
              стратегии, базирани на данни, за да помогна на брандовете да се открояват 
              в претъпканото пространство на социалните медии.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-medium-contrast">Експерт в Instagram Reels, TikTok и Facebook видео съдържание</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-medium-contrast">Специализиран в разказването на брандове и ангажиране на аудитория</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-medium-contrast">Доказан успех в увеличаване на видимостта на брандове</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-brand-blue" size={32} />
              </div>
              <div className="text-3xl font-bold text-high-contrast mb-2">{stat.number}</div>
              <div className="text-medium-contrast">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
