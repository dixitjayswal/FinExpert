import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const aboutImage = '/assets/owner.jpg';

const features = [
  'Business Valuation',
  'Litigation Support',
  'Merger & Acquisition',
  'Financial Consulting',
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 bg-background overflow-hidden">
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
                alt="Trisch Garthoeffner"
                className="w-full h-[600px] object-cover object-top"
              />
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-primary rounded-2xl p-6 shadow-elegant-lg"
            >
              <div className="text-center">
                <span className="font-playfair text-5xl font-bold text-gold">20+</span>
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
                About Founder
              </span>
            </div>

            <h2 className="font-playfair text-3xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">
              Trisch Garthoeffner, ABV, CVA, MAFF, EA
              <br />
              <span className="text-gold text-2xl md:text-2xl lg:text-3xl block mt-2">Chairman of the NACVA Standards Board</span>
            </h2>

            <p className="text-slate font-inter leading-relaxed mb-8">
              Anchor Business Valuations & Financial Services, LLC is a business valuation, litigation support and merger & acquisition transaction consulting firm. Anchor assists their clients through a broad capacity of services spanning from the determination of the value of a business to consultation on the financial implications and due diligence process of the sale, acquisition or investment in a company.
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
