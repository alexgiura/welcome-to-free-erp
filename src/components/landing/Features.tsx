import { motion } from "framer-motion";
import {
  Package,
  BarChart3,
  Users,
  FileText,
  ShoppingCart,
  Settings,
} from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Gestiune Inventar",
    description: "Urmărește nivelurile stocurilor, automatizează reaprovizionarea și gestionează mai multe depozite cu ușurință.",
  },
  {
    icon: BarChart3,
    title: "Rapoarte Financiare",
    description: "Generează rapoarte financiare complete și obține informații despre performanța afacerii tale.",
  },
  {
    icon: Users,
    title: "HR & Salarizare",
    description: "Gestionează angajații, urmărește prezența și automatizează procesarea salariilor fără efort.",
  },
  {
    icon: FileText,
    title: "Facturare",
    description: "Creează facturi profesionale, urmărește plățile și gestionează conturile de încasat.",
  },
  {
    icon: ShoppingCart,
    title: "Vânzări & CRM",
    description: "Gestionează lead-uri, urmărește oportunități și închide vânzări mai rapid cu CRM integrat.",
  },
  {
    icon: Settings,
    title: "Personalizabil",
    description: "Adaptează sistemul la fluxurile tale de lucru unice cu opțiuni flexibile de personalizare.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Funcționalități</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            Tot ce ai nevoie pentru a <span className="text-gradient">Reuși</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            De la startup-uri mici la întreprinderi în creștere, soluția noastră ERP completă 
            oferă toate instrumentele de care ai nevoie — complet gratuit.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-primary/20"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
