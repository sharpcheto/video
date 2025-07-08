
'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Мария Петрова',
      company: 'Fashion Forward Co.',
      rating: 5,
      text: 'Работата с Ивайло трансформира напълно нашето присъствие в социалните медии. Нашите показатели за ангажимент се увеличиха с 300% само за два месеца!',
      avatar: '/api/placeholder/80/80'
    },
    {
      name: 'Георги Христов',
      company: 'TechStart Inc.',
      rating: 5,
      text: 'Качеството на съдържанието и разбирането на нашия бранд бяха изключителни. Нашето видео за лансиране на продукта стана вирусно и привлече безброй нови клиенти.',
      avatar: '/api/placeholder/80/80'
    },
    {
      name: 'Елена Стоянова',
      company: 'Wellness Studio',
      rating: 5,
      text: 'Професионален, креативен и ориентиран към резултати. Видеата, създадени за нашите фитнес предизвикателства, ни помогнаха да нараснем от 5 хил. до 50 хил. последователи за 6 месеца.',
      avatar: '/api/placeholder/80/80'
    },
    {
      name: 'Димитър Николов',
      company: 'Местен ресторант',
      rating: 5,
      text: 'Нашите видеа с храна в TikTok и Instagram привлякоха толкова много нови клиенти, че трябваше да разширим района на доставка. Невероятна възвръщаемост на инвестицията!',
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-high-contrast">
            Истории за успех на клиенти
          </h2>
          <p className="text-xl text-medium-contrast max-w-3xl mx-auto">
            Не се доверявайте само на думите ми. Ето какво казват моите клиенти за 
            въздействието на професионалното видео съдържание върху техния бизнес.
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
                <Quote className="absolute -top-2 -left-2 text-blue-200" size={32} />
                <p className="text-medium-contrast text-lg leading-relaxed pl-6">
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
                  <h4 className="font-semibold text-high-contrast">{testimonial.name}</h4>
                  <p className="text-medium-contrast">{testimonial.company}</p>
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
          <div className="bg-gradient-to-r from-brand-blue to-brand-orange rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Готови ли сте да се присъедините към тези истории за успех?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Нека създадем видео съдържание, което носи реални резултати за вашия бизнес.
            </p>
            <button className="bg-white text-brand-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Започнете вашия проект
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
