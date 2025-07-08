
'use client'

import { motion } from 'framer-motion'
import { Play, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-orange-50">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-high-contrast">
              Развий бранда си с 
              <span className="gradient-text block">
                кратки видеа
              </span>
            </h1>
            <p className="text-xl text-medium-contrast mb-8 max-w-2xl">
              Аз съм Ивайло Стоянов и помагам на бизнеси да привличат нови клиенти чрез ангажиращо, 
              високоефективно видео съдържание за Instagram, TikTok и Facebook. Трансформирай своето 
              присъствие в социалните медии днес.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-orange text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg"
              >
                Започни сега <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-blue hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Play size={20} /> Виж работата ми
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-32 bg-gradient-to-r from-purple-200 to-orange-200 rounded-lg"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
