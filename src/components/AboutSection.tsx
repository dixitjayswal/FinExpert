import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import aboutImage from '@/assets/about-financial.jpg';

const features = [
  'Expert Financial Planning',
  'Investment Management',
  'Risk Assessment & Mitigation',
  'Retirement Planning Solutions',
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-background overflow-hidden">
      <div className="container-wide">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elegant-lg">
              <img
                src={aboutImage}
                alt="Financial consulting team"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-gold rounded-full flex items-center justify-center shadow-gold hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                </button>
              </div>
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-primary rounded-2xl p-6 shadow-elegant-lg"
            >
              <div className="text-center">
                <span className="font-playfair text-5xl font-bold text-gold">25+</span>
                <p className="text-primary-foreground font-inter text-sm mt-1">
                  Years Experience
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-inter text-sm font-medium tracking-widest uppercase">
                About Us
              </span>
            </div>

            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              We Are The Leader In
              <br />
              <span className="text-gold">Financial</span> Consulting
            </h2>

            <p className="text-slate font-inter leading-relaxed mb-8">
              With over 25 years of experience, we've helped thousands of clients achieve their financial goals. Our team of certified experts provides personalized strategies tailored to your unique situation and objectives.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-foreground font-inter text-sm font-medium">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            <Button variant="default" size="xl">
              Discover More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
