import { motion } from "framer-motion";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 bg-muted/50 border-t border-border"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-muted-foreground max-w-md">
              Soluția ERP gratuită și open-source concepută pentru a ajuta afacerile 
              de toate dimensiunile să-și gestioneze operațiunile eficient.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Produs</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Funcționalități</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Prețuri</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentație</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Companie</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">Despre</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Suport</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bilderp. Toate drepturile rezervate.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Politica de Confidențialitate</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Termeni și Condiții</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
