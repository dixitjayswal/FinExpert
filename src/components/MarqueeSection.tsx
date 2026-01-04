import { motion } from 'framer-motion';

const MarqueeSection = () => {
    const content = [
        "Business Valuation",
        "Litigation Support",
        "Mergers & Acquisitions",
        "Forensic Accounting",
        "Expert Testimony",
        "Gift & Estate Tax",
        "Shareholder Disputes",
        "Matrimonial Dissolution",
        "Succession Planning",
        "Transaction Advisory"
    ];

    return (
        <div className="bg-primary text-primary-foreground py-6 overflow-hidden border-y border-white/10 z-20 relative">
            <div className="flex overflow-hidden group">
                <motion.div
                    className="flex gap-16 whitespace-nowrap group-hover:[animation-play-state:paused]"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear",
                    }}
                >
                    {/* Triplicate the content to ensure smooth seamless scrolling before reset */}
                    {[...content, ...content, ...content].map((item, index) => (
                        <span key={index} className="text-xl font-playfair font-medium tracking-wide flex items-center gap-16">
                            {item}
                            <span className="w-2 h-2 rounded-full bg-gold" />
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default MarqueeSection;
