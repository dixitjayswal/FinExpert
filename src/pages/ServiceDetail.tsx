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
  '409a-valuation': {
    title: 'IRC Section 409A Valuation',
    description: 'Compliance valuations for stock options and equity-based compensation.',
    longDescription: 'We provide defensible outcomes for IRC 409A valuations. Our reports are designed to withstand scrutiny from auditors and the IRS, ensuring your stock option plans are compliant and your employees are protected.',
    features: [
      'Common Stock Valuation',
      'Defensible Reporting',
      'Audit Support',
      'Regular Updates',
    ],
    benefits: [
      'IRS Compliance',
      'Audit Readiness',
      'Employee Confidence',
      'Fast Turnaround',
    ],
    image: '/assets/services/valuation.jpg',
  },
  'business-valuation': {
    title: 'Business Valuation',
    description: 'Valuations for tax, transaction, litigation, and financial reporting purposes.',
    longDescription: 'Anchor Business Valuations provides independent and objective business valuation services for a variety of purposes. Whether you are buying or selling a business, planning your estate, or involved in a dispute, we deliver credible valuation reports.',
    features: [
      'Estate & Gift Tax',
      'Mergers & Acquisitions',
      'Buy-Sell Agreements',
      'Financial Reporting',
    ],
    benefits: [
      'Objective Analysis',
      'Certified Experts',
      'Comprehensive Reports',
      'Strategic Insight',
    ],
    image: '/assets/services/business.jpg',
  },
  'healthcare-valuations': {
    title: 'Healthcare Valuations',
    description: 'Specialized valuation services for medical practices and healthcare facilities.',
    longDescription: 'Our team specializes in the unique challenges of healthcare valuations. We understand the regulatory environment, reimbursement models, and operational complexities that drive value in the healthcare sector.',
    features: [
      'Medical Practice Valuation',
      'ASC & Hospital Valuation',
      'Stark Law Compliance',
      'Physician Compensation',
    ],
    benefits: [
      'Industry Expertise',
      'Regulatory Compliance',
      'Fair Market Value Opinions',
      'Transaction Support',
    ],
    image: '/assets/services/healthcare.jpg',
  },
  'mergers-acquisitions': {
    title: 'Mergers & Acquisitions',
    description: 'Consulting for buy-side and sell-side transactions to maximize value.',
    longDescription: 'We assist business owners and investors through the complex M&A process. From deal structuring and due diligence to valuation and negotiation support, we help you achieve your transaction goals.',
    features: [
      'Deal Structuring',
      'Due Diligence',
      'Valuation Analysis',
      'Negotiation Support',
    ],
    benefits: [
      'Maximized Value',
      'Reduced Risk',
      'Smooth Transaction Process',
      'Expert Guidance',
    ],
    image: '/assets/services/mergers.jpg',
  },
  'litigation-support': {
    title: 'Litigation Support',
    description: 'Expert witness testimony, marital dissolution, economic damages, and lost profits analysis.',
    longDescription: 'We provide robust litigation support services, including expert testimony and consulting. Our experts differ complex financial concepts into clear, compelling arguments for triers of fact.',
    features: [
      'Expert Testimony',
      'Marital Dissolution',
      'Economic Damages',
      'Lost Profits Analysis',
    ],
    benefits: [
      'Credible Testimony',
      'Clear Communication',
      'Defensible Opinions',
      'Case Strategy Support',
    ],
    image: '/assets/services/litigation.jpg',
  },
  'estate-gift-tax': {
    title: 'Estate & Gift Tax',
    description: 'Valuations for estate planning, gifting, and tax reporting requirements.',
    longDescription: 'We work closely with estate planning attorneys and tax professionals to provide valuations for estate and gift tax purposes. Our reports are prepared in accordance with IRS guidelines to minimize audit risk.',
    features: [
      'Estate Tax Valuation',
      'Gift Tax Valuation',
      'Discount Studies',
      'IRS Audit Support',
    ],
    benefits: [
      'Tax Compliance',
      'Audit Protection',
      'Wealth Preservation',
      'Peace of Mind',
    ],
    image: '/assets/services/estate.jpg',
  },
  'shareholder-disputes': {
    title: 'Shareholder Disputes',
    description: 'Resolution support for business divorce and shareholder disagreement cases.',
    longDescription: 'Shareholder disputes can be contentious and complex. We provide objective valuation and financial analysis to help resolve disputes regarding buyouts, dissenters\' rights, and oppression claims.',
    features: [
      'Business Divorce',
      'Dissenting Shareholder Actions',
      'Buyout Valuation',
      'Mediation Support',
    ],
    benefits: [
      'Objective Assesment',
      'Dispute Resolution',
      'Fair Outcomes',
      'Litigation Readiness',
    ],
    image: '/assets/services/dispute.jpg',
  },
  'quality-of-earnings': {
    title: 'Quality of Earnings',
    description: 'Detailed analysis of earnings quality for potential buyers or lenders.',
    longDescription: 'A Quality of Earnings (QofE) report provides a deeper dive into a company\'s financial performance than a standard audit. We analyze the sustainability and accuracy of earnings to support investment decisions.',
    features: [
      'EBITDA Adjustments',
      'Revenue Recognition Analysis',
      'Working Capital Analysis',
      'Customer Concentration',
    ],
    benefits: [
      'Informed Decision Making',
      'Risk Identification',
      'Purchase Price Justification',
      'Deal Confidence',
    ],
    image: '/assets/services/earnings.jpg',
  },
  'lending-valuations': {
    title: 'Lending Valuations',
    description: 'Valuations for underwriting and SBA lending purposes.',
    longDescription: 'We provide independent valuations for lenders to support loan underwriting. Our reports meet SOP requirements for SBA 7(a) loans and other commercial lending standards.',
    features: [
      'SBA 7(a) Valuations',
      'Collateral Valuation',
      'Underwriting Support',
      'Fast Turnaround',
    ],
    benefits: [
      'SOP Compliance',
      'Lender Confidence',
      'Quick Closing',
      'Risk Mitigation',
    ],
    image: '/assets/services/lending.jpg',
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
            <Button variant="default">Return Home</Button>
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
                        className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${s.slug === slug
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
                    href="tel:+12399193092"
                    className="flex items-center gap-3 text-gold hover:text-gold/80 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>239.919.3092</span>
                  </a>
                  <a
                    href="mailto:Info@AnchorBVFS.com"
                    className="flex items-center gap-3 text-gold hover:text-gold/80 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Info@AnchorBVFS.com</span>
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
