
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-high-contrast">
            Да създадем нещо невероятно
          </h2>
          <p className="text-xl text-medium-contrast max-w-3xl mx-auto">
            Готови ли сте да трансформирате бранда си с ангажиращо видео съдържание? 
            Нека обсъдим вашия проект и създадем стратегия, която носи резултати.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-high-contrast">
              Свържете се с мен
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail className="text-brand-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-high-contrast">Имейл</h4>
                  <p className="text-medium-contrast">ivaylo@videocontent.bg</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center">
                  <Phone className="text-brand-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-high-contrast">Телефон</h4>
                  <p className="text-medium-contrast">+359 888 123 456</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPin className="text-brand-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-high-contrast">Местоположение</h4>
                  <p className="text-medium-contrast">София, България</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6">
              <h4 className="font-bold text-high-contrast mb-4">Гаранция за бърз отговор</h4>
              <p className="text-medium-contrast">
                Отговарям на всички запитвания в рамките на 24 часа. За спешни проекти, 
                можете да се свържете директно по телефон или SMS.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-medium-contrast mb-2">
                    Вашето име
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Иван Иванов"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-medium-contrast mb-2">
                    Имейл адрес
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="ivan@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-medium-contrast mb-2">
                  Име на компанията
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Вашата компания"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-medium-contrast mb-2">
                  Тип проект
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Изберете тип проект</option>
                  <option value="short-form-videos">Кратки видеа</option>
                  <option value="content-strategy">Стратегия за съдържание</option>
                  <option value="brand-storytelling">Брандови истории</option>
                  <option value="social-media-growth">Растеж в социалните медии</option>
                  <option value="other">Друго</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-medium-contrast mb-2">
                  Детайли за проекта
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Разкажете ми за вашия проект, цели и времеви рамки..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg"
              >
                Изпрати съобщение <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
