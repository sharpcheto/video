import { Video, TrendingUp, Rocket, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ServicesSection() {
  const services = [
    {
      icon: Video,
      title: "Short-Form Video Production",
      description: "High-quality, engaging videos optimized for Instagram Reels, TikTok, and Facebook Stories that capture attention and drive action.",
      features: [
        "Script writing & storyboarding",
        "Professional filming & editing",
        "Platform-specific optimization",
      ],
      gradient: "from-brand-indigo to-brand-pink",
    },
    {
      icon: TrendingUp,
      title: "Social Media Strategy",
      description: "Comprehensive content strategies that align with your brand goals and maximize reach across all social platforms.",
      features: [
        "Content calendar planning",
        "Hashtag research & trends",
        "Analytics & optimization",
      ],
      gradient: "from-brand-pink to-brand-amber",
    },
    {
      icon: Rocket,
      title: "Brand Growth Consulting",
      description: "Strategic guidance to help your brand build authentic connections and achieve sustainable growth through video content.",
      features: [
        "Brand positioning & messaging",
        "Audience analysis & targeting",
        "Growth strategy development",
      ],
      gradient: "from-brand-amber to-brand-indigo",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            How I Help Brands <span className="gradient-text">Grow</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From concept to viral success, I provide comprehensive video content solutions that drive engagement and convert viewers into customers.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`bg-gradient-to-br ${service.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            onClick={scrollToContact}
            className="bg-brand-indigo hover:bg-brand-indigo/80 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all"
          >
            Let's Discuss Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
