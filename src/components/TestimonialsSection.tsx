import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'CEO, TechVentures',
    content: 'Finxpert transformed our financial strategy completely. Their expertise in investment management helped us achieve a 40% growth in our portfolio within the first year.',
    rating: 5,
    image: 'SM',
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Entrepreneur',
    content: 'The personalized approach and attention to detail sets Finxpert apart. They truly understand the unique needs of each client and deliver exceptional results.',
    rating: 5,
    image: 'DC',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'CFO, GlobalTrade Inc',
    content: 'Working with Finxpert has been a game-changer for our retirement planning. Their team provided clear, actionable strategies that gave us peace of mind.',
    rating: 5,
    image: 'ER',
  },
  {
    id: 4,
    name: 'Michael Thompson',
    role: 'Real Estate Investor',
    content: 'The level of professionalism and expertise at Finxpert is unmatched. They helped me diversify my investments and minimize risks effectively.',
    rating: 5,
    image: 'MT',
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-background overflow-hidden">
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
              Testimonials
            </span>
            <div className="h-px w-12 bg-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        {/* Testimonials Slider */}
        <div ref={ref} className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Quote Icon */}
            <div className="absolute -top-8 left-8 z-10">
              <Quote className="w-16 h-16 text-gold/20" />
            </div>

            {/* Card */}
            <div className="bg-muted rounded-3xl p-8 md:p-12 relative">
              <div className="relative z-10">
                {/* Content */}
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="font-inter text-lg md:text-xl text-foreground leading-relaxed mb-8">
                    "{testimonials[currentIndex].content}"
                  </p>

                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center text-primary font-semibold">
                      {testimonials[currentIndex].image}
                    </div>

                    <div>
                      <h4 className="font-playfair text-lg font-semibold text-primary">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-slate text-sm">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="ml-auto flex gap-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-gold hover:border-gold hover:text-primary transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'w-8 bg-gold' : 'bg-border'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-gold hover:border-gold hover:text-primary transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
