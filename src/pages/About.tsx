import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Target, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import { Button } from '@/components/ui/button';
import aboutImage from '@/assets/about-financial.jpg';

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const values = [
    { icon: Target, title: 'Our Mission', description: 'To provide exceptional financial consulting services that empower businesses and individuals to achieve their financial goals.' },
    { icon: Award, title: 'Our Vision', description: 'To be the most trusted and innovative financial consulting firm, recognized for delivering outstanding value to our clients.' },
    { icon: Users, title: 'Our Values', description: 'Integrity, Excellence, Innovation, and Client-Centricity guide everything we do at Finxpert.' },
  ];

  const milestones = [
    { year: '2008', title: 'Company Founded', description: 'Started with a vision to transform financial consulting.' },
    { year: '2012', title: 'Expansion Phase', description: 'Opened offices in 5 major cities across the country.' },
    { year: '2016', title: '1000+ Clients', description: 'Reached the milestone of serving over 1000 clients.' },
    { year: '2020', title: 'Digital Transformation', description: 'Launched digital-first consulting services.' },
    { year: '2024', title: 'Global Reach', description: 'Extended services to international markets.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageBanner 
        title="About Us" 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us' }
        ]} 
      />

      {/* About Content Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={aboutImage} 
                  alt="About Finxpert" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
              
              {/* Video Play Button */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center cursor-pointer shadow-gold">
                  <Play className="w-8 h-8 text-primary ml-1" />
                </div>
              </motion.div>

              {/* Experience Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-accent text-primary px-8 py-6 rounded-xl shadow-gold"
              >
                <div className="text-4xl font-playfair font-bold">16+</div>
                <div className="text-sm font-inter">Years Experience</div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-inter font-semibold text-sm tracking-wider uppercase mb-4 block">
                About Our Company
              </span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
                We're a Leading Financial Consulting Firm
              </h2>
              <p className="text-muted-foreground font-inter leading-relaxed mb-6">
                Founded in 2008, Finxpert has grown to become one of the most trusted names in financial consulting. 
                We combine deep industry expertise with innovative solutions to help our clients navigate complex 
                financial landscapes and achieve sustainable growth.
              </p>
              <p className="text-muted-foreground font-inter leading-relaxed mb-8">
                Our team of seasoned professionals brings decades of combined experience across corporate finance, 
                investment banking, wealth management, and tax consulting. We pride ourselves on delivering 
                personalized strategies that align with each client's unique goals and circumstances.
              </p>

              <div className="space-y-4 mb-8">
                {['Expert financial advisors with 16+ years experience', 'Customized solutions for every client', '24/7 dedicated support and consultation', 'Proven track record of success'].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-inter text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link to="/contact">
                <Button variant="cta" size="lg">
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="text-accent font-inter font-semibold text-sm tracking-wider uppercase mb-4 block">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary">
              Our Core Principles
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background p-8 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-muted-foreground font-inter leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="text-accent font-inter font-semibold text-sm tracking-wider uppercase mb-4 block">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary">
              Company Milestones
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-accent/30 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-muted p-6 rounded-xl inline-block">
                      <span className="text-accent font-playfair font-bold text-2xl">{milestone.year}</span>
                      <h3 className="text-xl font-playfair font-bold text-primary mt-2">{milestone.title}</h3>
                      <p className="text-muted-foreground font-inter mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-4 h-4 bg-accent rounded-full flex-shrink-0 hidden md:block relative z-10" />
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
