import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-xl">B</span>
          </div>
          <span className="font-display font-bold text-xl text-foreground">Bilderp</span>
          <span className="ml-2 px-2 py-0.5 rounded-full gradient-free text-xs font-semibold text-accent-foreground">
            GRATUIT
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Funcționalități
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Prețuri
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="lg">
            Autentificare
          </Button>
          <Button variant="hero" size="lg">
            Înregistrare Gratuită
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-b border-border"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Funcționalități
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Prețuri
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Contact
            </a>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="outline" size="lg" className="w-full">
                Autentificare
              </Button>
              <Button variant="hero" size="lg" className="w-full">
                Înregistrare Gratuită
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
