import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiInstagram, SiTiktok, SiFacebook, SiYoutube } from "react-icons/si";

export function PortfolioSection() {
  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "Fashion Brand Campaign",
      description: "Increased brand awareness by 300% through engaging Instagram Reels showcasing product lifestyle content.",
      platform: "Instagram",
      icon: SiInstagram,
      stats: { views: "2.5M", likes: "45K", comments: "3.2K" },
      color: "text-pink-500",
    },
    {
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "Restaurant Chain Growth",
      description: "Viral TikTok series featuring behind-the-scenes kitchen content that drove 150% increase in foot traffic.",
      platform: "TikTok",
      icon: SiTiktok,
      stats: { views: "5.8M", likes: "120K", comments: "8.5K" },
      color: "text-gray-900",
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "Tech Startup Launch",
      description: "Facebook video series explaining complex tech concepts in simple terms, generating 500+ qualified leads.",
      platform: "Facebook",
      icon: SiFacebook,
      stats: { views: "1.2M", likes: "25K", comments: "500" },
      color: "text-blue-600",
    },
    {
      image: "https://images.unsplash.com/photo-1542728928-1413d1894ed1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "Fitness Brand Series",
      description: "Weekly workout series that built a community of 100K+ engaged followers and increased product sales by 200%.",
      platform: "Instagram",
      icon: SiInstagram,
      stats: { views: "3.1M", likes: "78K", comments: "100K" },
      color: "text-pink-500",
    },
    {
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "E-commerce Brand",
      description: "Product showcase videos that turned browsers into buyers, achieving 8% conversion rate from social traffic.",
      platform: "TikTok",
      icon: SiTiktok,
      stats: { views: "900K", likes: "35K", comments: "8%" },
      color: "text-gray-900",
    },
    {
      image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "B2B Service Company",
      description: "Educational video series positioning the brand as industry thought leaders, generating 50+ enterprise leads.",
      platform: "Facebook",
      icon: SiFacebook,
      stats: { views: "750K", likes: "15K", comments: "50+" },
      color: "text-blue-600",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            My <span className="gradient-text">Portfolio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            See how I've helped brands create viral content that drives real business results across social media platforms.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <item.icon className={`text-2xl ${item.color}`} />
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{item.stats.views} Views</span>
                  <span>{item.stats.likes} Likes</span>
                  <span>{item.stats.comments} {item.platform === "Facebook" ? "Leads" : "Comments"}</span>
                </div>
              </div>
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
          <p className="text-gray-600 mb-6">Want to see more examples of my work?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-all">
              <SiInstagram className="mr-2 h-4 w-4" />
              View Instagram
            </Button>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-all">
              <SiTiktok className="mr-2 h-4 w-4" />
              View TikTok
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-all">
              <SiFacebook className="mr-2 h-4 w-4" />
              View Facebook
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
