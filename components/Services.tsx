
'use client'

import { motion } from 'framer-motion'
import { Video, Zap, Target, TrendingUp, Edit, Megaphone } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Video,
      title: 'Създаване на кратки видеа',
      description: 'Персонализирани видеа, оптимизирани за Instagram Reels, TikTok и Facebook, които привличат внимание и увеличават ангажимента.',
      features: ['15-60 секундни видеа', 'Съдържание следващо тенденциите', 'Съобщения съобразени с бранда']
    },
    {
      icon: Edit,
      title: 'Монтаж и постпродукция',
      description: 'Професионални услуги по монтаж, които превръщат суровия материал в изполиран, ангажиращ контент готов за социални медии.',
      features: ['Цветова корекция', 'Motion graphics', 'Звуков дизайн']
    },
    {
      icon: Target,
      title: 'Стратегия за съдържание',
      description: 'Стратегии за съдържание, базирани на данни, които се съобразяват с целите на бранда и предпочитанията на целевата аудитория.',
      features: ['Анализ на аудитория', 'Планиране на съдържание', 'Прогнозиране на тенденции']
    },
    {
      icon: TrendingUp,
      title: 'Растеж в социалните медии',
      description: 'Цялостни стратегии за растеж, предназначени да увеличат броя на последователите и да подобрят нивото на ангажимент.',
      features: ['Оптимизация на хаштагове', 'Графици за публикуване', 'Управление на общността']
    },
    {
      icon: Megaphone,
      title: 'Разказване на брандови истории',
      description: 'Завладяващи наративи, които се свързват емоционално с аудиторията и изграждат трайни брандови отношения.',
      features: ['Развитие на гласа на бранда', 'Сюжетни линии', 'Емоционална връзка']
    },
    {
      icon: Zap,
      title: 'Вирусен маркетинг',
      description: 'Стратегически подходи за създаване на съдържание с вирусен потенциал, максимизиращи обхвата и експозицията на бранда.',
      features: ['Интеграция на тенденции', 'Вирусни механики', 'Бързо съдържание за отговор']
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-high-contrast">
            Моите услуги
          </h2>
          <p className="text-xl text-medium-contrast max-w-3xl mx-auto">
            Цялостни решения за видео съдържание, предназначени да издигнат бранда ви 
            и да генерират значим ангажимент във всички социални медии платформи.
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
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <service.icon className="text-brand-blue" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-high-contrast">
                {service.title}
              </h3>
              <p className="text-medium-contrast mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                    <span className="text-medium-contrast">{feature}</span>
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
          <button className="bg-brand-orange text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors duration-200 shadow-lg">
            Получи персонализирана оферта
          </button>
        </motion.div>
      </div>
    </section>
  )
}
