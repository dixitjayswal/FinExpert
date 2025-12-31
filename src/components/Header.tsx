import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowUpRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string }[];
}

const navItems: NavItem[] = [
  { 
    name: 'Home', 
    href: '/',
    hasDropdown: false,
  },
  { 
    name: 'Pages', 
    href: '/about',
    hasDropdown: true,
    dropdownItems: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Testimonials', href: '/testimonials' },
      { name: 'FAQ', href: '/faq' },
    ]
  },
  { 
    name: 'Services', 
    href: '/services/corporate-finance',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Corporate Finance', href: '/services/corporate-finance' },
      { name: 'Investment Banking', href: '/services/investment-banking' },
      { name: 'Wealth Management', href: '/services/wealth-management' },
      { name: 'Tax Consulting', href: '/services/tax-consulting' },
    ]
  },
  { 
    name: 'Portfolio', 
    href: '/portfolio',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Portfolio Grid', href: '/portfolio' },
      { name: 'Portfolio Single', href: '/portfolio/1' },
    ]
  },
  { 
    name: 'Blog', 
    href: '/blog',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Blog Standard', href: '/blog' },
      { name: 'Blog Single', href: '/blog/1' },
    ]
  },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const renderNavLink = (href: string, children: React.ReactNode, className: string, onClick?: () => void) => {
    const isExternal = href.startsWith('http');
    const isHashLink = href.includes('#');
    
    if (isExternal) {
      return <a href={href} className={className} onClick={onClick}>{children}</a>;
    }
    
    if (isHashLink && !href.startsWith('/')) {
      return <a href={href} className={className} onClick={onClick}>{children}</a>;
    }
    
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-background/95 backdrop-blur-md shadow-elegant py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
              <ArrowUpRight className="w-6 h-6 text-primary" />
            </div>
            <span className={`font-playfair text-2xl font-bold ${isScrolled || !isHomePage ? 'text-primary' : 'text-primary-foreground'}`}>
              FINXPERT
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {renderNavLink(
                item.href,
                <>
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  )}
                </>,
                `flex items-center gap-1 px-4 py-2 font-inter text-sm font-medium transition-colors ${
                  isScrolled || !isHomePage
                    ? 'text-foreground hover:text-accent' 
                    : 'text-primary-foreground/90 hover:text-primary-foreground'
                }`,
                () => handleNavClick()
              )}
              
              {/* Dropdown Menu */}
              <AnimatePresence>
                {item.hasDropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-0 min-w-[200px] bg-background border border-border rounded-md shadow-xl overflow-hidden z-50"
                  >
                    <div className="py-2">
                      {item.dropdownItems?.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.href}
                          onClick={handleNavClick}
                          className="block px-5 py-3 text-sm text-foreground hover:bg-muted hover:text-accent transition-colors font-inter"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </nav>

        {/* Right Side Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:flex items-center gap-4"
        >
          <Link to="/contact">
            <Button variant="cta" size="lg">
              Get In Touch
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <button className={`p-2 ${isScrolled || !isHomePage ? 'text-foreground' : 'text-primary-foreground'}`}>
            <Search className="w-5 h-5" />
          </button>
          <button className={`p-2 flex flex-col gap-1 ${isScrolled || !isHomePage ? 'text-foreground' : 'text-primary-foreground'}`}>
            <div className="w-6 h-0.5 bg-current"></div>
            <div className="w-4 h-0.5 bg-current ml-auto"></div>
          </button>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 ${isScrolled || !isHomePage ? 'text-primary' : 'text-primary-foreground'}`}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <nav className="container-wide py-6 flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => !item.hasDropdown && setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between font-inter text-foreground hover:text-accent py-3 transition-colors"
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="pl-4 border-l border-border ml-2">
                      {item.dropdownItems.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="cta" size="lg" className="mt-4 w-full">
                  Get In Touch
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
