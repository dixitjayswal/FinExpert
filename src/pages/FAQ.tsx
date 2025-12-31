import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';

const FAQ = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What services does Finxpert offer?',
      answer: 'Finxpert offers a comprehensive range of financial consulting services including Corporate Finance, Investment Banking, Wealth Management, Tax Consulting, Risk Assessment, and Strategic Planning. Our services are tailored to meet the unique needs of businesses and individuals seeking financial excellence.',
    },
    {
      question: 'How do I get started with Finxpert?',
      answer: 'Getting started is simple! You can contact us through our website, schedule a free consultation, or call our office directly. During the initial consultation, we\'ll discuss your financial goals, assess your current situation, and recommend the best services to meet your needs.',
    },
    {
      question: 'What makes Finxpert different from other financial consultants?',
      answer: 'Finxpert stands out through our personalized approach, experienced team of professionals with 16+ years of expertise, proven track record of success, and commitment to client satisfaction. We combine traditional financial wisdom with innovative solutions to deliver exceptional results.',
    },
    {
      question: 'Are your services suitable for small businesses?',
      answer: 'Absolutely! We serve clients of all sizes, from startups and small businesses to large corporations. Our flexible service packages are designed to accommodate various budgets and needs, ensuring every client receives the attention and expertise they deserve.',
    },
    {
      question: 'How are your fees structured?',
      answer: 'Our fees vary depending on the services required and the complexity of your financial situation. We offer transparent pricing with no hidden fees. During your initial consultation, we\'ll provide a detailed breakdown of costs so you can make an informed decision.',
    },
    {
      question: 'Do you offer virtual consultations?',
      answer: 'Yes, we offer both in-person and virtual consultations to accommodate our clients\' preferences and schedules. Our digital-first approach ensures you can access our expertise from anywhere in the world.',
    },
    {
      question: 'How long does a typical engagement last?',
      answer: 'The duration of our engagements varies based on the scope of services. Some projects, like tax filing, may be completed within weeks, while ongoing services like wealth management are continuous relationships. We\'ll provide timeline estimates during our initial discussions.',
    },
    {
      question: 'Is my financial information kept confidential?',
      answer: 'Absolutely. Client confidentiality is paramount at Finxpert. We adhere to strict privacy policies and industry regulations to ensure all your financial information is protected. Our team is bound by professional confidentiality agreements.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageBanner 
        title="Frequently Asked Questions" 
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Pages', href: '/about' },
          { label: 'FAQ' }
        ]} 
      />

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-accent font-inter font-semibold text-sm tracking-wider uppercase mb-4 block">
              Got Questions?
            </span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and how we can help 
              you achieve your financial goals.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-background hover:bg-muted/50 transition-colors"
                >
                  <span className="font-playfair font-bold text-lg text-primary pr-4">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-primary" />
                    ) : (
                      <Plus className="w-4 h-4 text-primary" />
                    )}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-muted-foreground font-inter leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="section-padding bg-muted">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground font-inter max-w-2xl mx-auto mb-8">
              Can't find the answer you're looking for? Our team is here to help. 
              Reach out to us and we'll get back to you as soon as possible.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-4 rounded-lg font-inter font-semibold hover:bg-accent/90 transition-colors">
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
