import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, Target, BarChart3, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    number: '01',
    title: 'Corporate Finance',
    slug: 'corporate-finance',
    description: 'Strategic financial planning and management solutions for businesses of all sizes.',
  },
  {
    icon: BarChart3,
    number: '02',
    title: 'Investment Banking',
    slug: 'investment-banking',
    description: 'Expert advisory services for complex financial transactions and capital raising.',
  },
  {
    icon: Target,
    number: '03',
    title: 'Wealth Management',
    slug: 'wealth-management',
    description: 'Personalized wealth preservation and growth strategies for individuals and families.',
  },
  {
    icon: Shield,
    number: '04',
    title: 'Tax Consulting',
    slug: 'tax-consulting',
    description: 'Strategic tax planning and compliance services to optimize your financial position.',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding bg-muted">
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
              Our Services
            </span>
            <div className="h-px w-12 bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
          >
            What We Offer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate font-inter"
          >
            Comprehensive financial solutions tailored to your unique needs and goals.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 card-hover shadow-elegant cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-gold group-hover:text-primary transition-colors duration-300" />
                </div>
                <span className="font-playfair text-4xl font-bold text-muted-foreground/20">
                  {service.number}
                </span>
              </div>

              <h3 className="font-playfair text-xl font-semibold text-primary mb-3 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-slate font-inter text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <Link
                to={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-gold font-medium text-sm group/link"
              >
                Read More
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
