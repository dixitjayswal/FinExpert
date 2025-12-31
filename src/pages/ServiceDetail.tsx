import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Phone, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import { Button } from '@/components/ui/button';

const servicesData: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  image: string;
}> = {
  'corporate-finance': {
    title: 'Corporate Finance',
    description: 'Strategic financial planning and management solutions for businesses.',
    longDescription: 'Our corporate finance services help businesses optimize their financial structure, manage capital effectively, and achieve sustainable growth. We provide comprehensive solutions tailored to your specific business needs and industry requirements.',
    features: [
      'Financial Planning & Analysis',
      'Capital Structure Optimization',
      'Mergers & Acquisitions Advisory',
      'Debt & Equity Financing',
      'Risk Management Solutions',
      'Cash Flow Optimization',
    ],
    benefits: [
      'Improved financial performance and profitability',
      'Access to expert financial guidance',
      'Strategic growth planning and execution',
      'Enhanced decision-making capabilities',
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
  },
  'investment-banking': {
    title: 'Investment Banking',
    description: 'Expert advisory services for complex financial transactions.',
    longDescription: 'Our investment banking team provides world-class advisory services for mergers, acquisitions, and capital raising. We leverage our deep industry expertise and global network to deliver exceptional results for our clients.',
    features: [
      'M&A Advisory',
      'Capital Raising',
      'IPO Preparation',
      'Private Placements',
      'Strategic Advisory',
      'Valuation Services',
    ],
    benefits: [
      'Access to global capital markets',
      'Expert deal structuring and negotiation',
      'Comprehensive due diligence support',
      'Post-transaction integration assistance',
    ],
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800',
  },
  'wealth-management': {
    title: 'Wealth Management',
    description: 'Personalized wealth preservation and growth strategies.',
    longDescription: 'Our wealth management services are designed to help high-net-worth individuals and families preserve and grow their wealth across generations. We take a holistic approach to financial planning, considering all aspects of your financial life.',
    features: [
      'Investment Portfolio Management',
      'Estate Planning',
      'Tax Optimization',
      'Retirement Planning',
      'Risk Assessment',
      'Legacy Planning',
    ],
    benefits: [
      'Personalized investment strategies',
      'Tax-efficient wealth transfer',
      'Comprehensive financial planning',
      'Peace of mind for your family\'s future',
    ],
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800',
  },
  'tax-consulting': {
    title: 'Tax Consulting',
    description: 'Strategic tax planning and compliance services.',
    longDescription: 'Our tax consulting services help businesses and individuals navigate complex tax regulations while minimizing their tax burden legally. We stay current with tax law changes to provide proactive advice.',
    features: [
      'Tax Planning & Strategy',
      'Compliance & Reporting',
      'International Tax Services',
      'Transfer Pricing',
      'Tax Dispute Resolution',
      'R&D Tax Credits',
    ],
    benefits: [
      'Reduced tax liability',
      'Full regulatory compliance',
      'Strategic tax planning',
      'Expert representation in audits',
    ],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800',
  },
};

const allServices = Object.entries(servicesData).map(([slug, data]) => ({
  slug,
  title: data.title,
}));

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <PageBanner
          title="Service Not Found"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/' },
            { label: 'Not Found' },
          ]}
        />
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-slate mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/">
            <Button variant="gold">Return Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageBanner
        title={service.title}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: service.title },
        ]}
      />

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              {/* Services List */}
              <div className="bg-muted/30 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-display font-bold text-navy mb-6">Our Services</h3>
                <ul className="space-y-3">
                  {allServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/services/${s.slug}`}
                        className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                          s.slug === slug
                            ? 'bg-gold text-navy font-semibold'
                            : 'bg-white hover:bg-gold/10 text-slate hover:text-navy'
                        }`}
                      >
                        <span>{s.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Card */}
              <div className="bg-navy rounded-2xl p-6 text-white">
                <h3 className="text-xl font-display font-bold mb-4">Need Help?</h3>
                <p className="text-white/70 text-sm mb-6">
                  Contact us for a free consultation about our services.
                </p>
                <div className="space-y-4">
                  <a
                    href="tel:+15551234567"
                    className="flex items-center gap-3 text-gold hover:text-gold/80 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+1 (555) 123-4567</span>
                  </a>
                  <a
                    href="mailto:info@finance.com"
                    className="flex items-center gap-3 text-gold hover:text-gold/80 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>info@finance.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Featured Image */}
                <div className="rounded-2xl overflow-hidden mb-8">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>

                <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
                  {service.title}
                </h2>

                <p className="text-slate leading-relaxed mb-8">{service.longDescription}</p>

                {/* Features */}
                <div className="mb-12">
                  <h3 className="text-2xl font-display font-bold text-navy mb-6">What We Offer</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl"
                      >
                        <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-gold" />
                        </div>
                        <span className="text-navy font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-navy rounded-2xl p-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-6">Key Benefits</h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-navy" />
                        </div>
                        <span className="text-white/90">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-12 flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button className="btn-cta">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <a href="tel:+15551234567">
                    <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us Now
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
