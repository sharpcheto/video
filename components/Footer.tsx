
'use client'

import { motion } from 'framer-motion'
import { Instagram, Facebook, Play, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="text-3xl font-bold gradient-text mb-4">
              Ивайло Стоянов
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Трансформирам брандове чрез ангажиращо късо видео съдържание. 
              Нека създадем нещо невероятно заедно и издигнем вашето присъствие в социалните медии на следващото ниво.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:scale-110 transition-transform duration-200"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="bg-black p-3 rounded-full hover:scale-110 transition-transform duration-200"
              >
                <Play size={24} />
              </a>
              <a
                href="#"
                className="bg-blue-600 p-3 rounded-full hover:scale-110 transition-transform duration-200"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="bg-gray-700 p-3 rounded-full hover:scale-110 transition-transform duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6">Бързи връзки</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Начало</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">За мен</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">Услуги</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-white transition-colors duration-200">Портфолио</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Контакт</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Услуги</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-300">Кратки видеа</span></li>
              <li><span className="text-gray-300">Стратегия за съдържание</span></li>
              <li><span className="text-gray-300">Брандови истории</span></li>
              <li><span className="text-gray-300">Растеж в социалните медии</span></li>
              <li><span className="text-gray-300">Вирусен маркетинг</span></li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 Ивайло Стоянов. Всички права запазени.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-brand-blue hover:bg-blue-700 p-3 rounded-full transition-colors duration-200"
          >
            <ArrowUp size={20} />
          </button>
        </motion.div>
      </div>
    </footer>
  )
}
