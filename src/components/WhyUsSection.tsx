import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Clock, Shield, HeartHandshake, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description: 'Cutting-edge strategies tailored to modern financial challenges.',
  },
  {
    icon: Clock,
    title: 'Time Efficiency',
    description: 'Quick turnaround times without compromising on quality.',
  },
  {
    icon: Shield,
    title: 'Secure Process',
    description: 'Your data and investments are protected with top-tier security.',
  },
  {
    icon: HeartHandshake,
    title: 'Client-Focused',
    description: 'Personalized attention and dedicated support for every client.',
  },
  {
    icon: Zap,
    title: 'Fast Execution',
    description: 'Swift implementation of strategies to capitalize on opportunities.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Certified professionals with decades of combined experience.',
  },
];

const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="why-us" className="section-padding bg-muted">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-inter text-sm font-medium tracking-widest uppercase">
              Why Choose Us
            </span>
            <div className="h-px w-12 bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
          >
            The Advantages We Bring
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate font-inter"
          >
            Experience the difference of working with a truly dedicated financial partner.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex gap-5 p-6 bg-card rounded-xl hover:shadow-elegant transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-gold group-hover:text-primary transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate font-inter text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
