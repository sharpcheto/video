import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Kim",
      role: "CEO, Fashion Forward",
      initials: "SK",
      content: "The video content created for our brand was absolutely game-changing. We saw a 400% increase in engagement within the first month. The creative approach and professional execution exceeded all expectations.",
      rating: 5,
    },
    {
      name: "Mike Johnson",
      role: "Owner, Local Eats",
      initials: "MJ",
      content: "Working with this video expert transformed our social media presence. The TikTok series went viral and brought in customers we never could have reached through traditional marketing.",
      rating: 5,
    },
    {
      name: "Amanda Rivera",
      role: "Marketing Director, TechFlow",
      initials: "AR",
      content: "The strategic approach to video content helped us build a community of engaged followers. Sales increased by 250% directly attributed to the social media campaigns.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            What Clients <span className="gradient-text">Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Don't just take my word for it. Here's what businesses say about working with me.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-indigo to-brand-pink rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
