import { Video, TrendingUp, Smartphone, Megaphone } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  const skills = [
    { icon: Video, label: "Video Production" },
    { icon: TrendingUp, label: "Growth Strategy" },
    { icon: Smartphone, label: "Social Media" },
    { icon: Megaphone, label: "Brand Marketing" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1542728928-1413d1894ed1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Content creator in professional studio"
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Hi, I'm Your <span className="gradient-text">Video Content Expert</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 5 years of experience in social media marketing, I specialize in creating viral short-form content that drives real business results. My passion lies in helping brands tell their story through engaging videos that stop the scroll and convert viewers into loyal customers.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <skill.icon className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">{skill.label}</span>
                </motion.div>
              ))}
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-3">My Mission</h3>
              <p className="text-gray-600">
                To help businesses harness the power of short-form video content to build authentic connections with their audience and achieve sustainable growth across all social platforms.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
