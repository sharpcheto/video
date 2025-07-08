import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Brand with{" "}
              <span className="text-brand-amber">Short-Form Video</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              I help businesses skyrocket their growth through engaging Instagram, TikTok, and Facebook content that converts viewers into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-brand-amber hover:bg-brand-amber/80 text-black px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all"
              >
                Start Your Growth Journey
              </Button>
              <Button
                onClick={() => scrollToSection("portfolio")}
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all"
              >
                View My Work
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-gray-200">Videos Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50M+</div>
                <div className="text-sm text-gray-200">Views Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">200%</div>
                <div className="text-sm text-gray-200">Avg. Growth Rate</div>
              </div>
            </div>
          </motion.div>
          <div className="hidden lg:block">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Video production workspace"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.div>
    </section>
  );
}
