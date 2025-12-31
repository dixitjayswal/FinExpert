import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const Team = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const teamMembers = [
    {
      name: 'Michael Anderson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      bio: '20+ years of experience in financial consulting and investment banking.',
    },
    {
      name: 'Sarah Mitchell',
      role: 'Chief Financial Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      bio: 'Expert in corporate finance and strategic financial planning.',
    },
    {
      name: 'David Chen',
      role: 'Head of Investment',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      bio: 'Specializes in portfolio management and wealth optimization.',
    },
    {
      name: 'Emily Roberts',
      role: 'Senior Tax Consultant',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      bio: 'Tax strategy expert with focus on corporate tax optimization.',
    },
    {
      name: 'James Wilson',
      role: 'Director of Operations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Oversees day-to-day operations and client relationship management.',
    },
    {
      name: 'Lisa Thompson',
      role: 'Wealth Advisor',
      image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=400&fit=crop',
      bio: 'Specializes in high-net-worth individual wealth management.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageBanner 
        title="Our Team" 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Pages', href: '/about' },
          { label: 'Our Team' }
        ]} 
      />

      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="text-accent font-inter font-semibold text-sm tracking-wider uppercase mb-4 block">
              Meet Our Experts
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Professional Team Members
            </h2>
            <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
              Our team of experienced professionals is dedicated to providing exceptional 
              financial consulting services tailored to your unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Icons */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors">
                      <Twitter className="w-5 h-5 text-primary" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </a>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-playfair font-bold text-primary mb-1">{member.name}</h3>
                  <span className="text-accent font-inter text-sm font-medium mb-3 block">{member.role}</span>
                  <p className="text-muted-foreground font-inter text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-foreground mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-primary-foreground/80 font-inter max-w-2xl mx-auto mb-8">
              We're always looking for talented individuals to join our team. 
              If you're passionate about finance and want to make a difference, we'd love to hear from you.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-4 rounded-lg font-inter font-semibold hover:bg-accent/90 transition-colors">
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
