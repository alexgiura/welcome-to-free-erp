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
    title: "Inventory Management",
    description: "Track stock levels, automate reorders, and manage multiple warehouses with ease.",
  },
  {
    icon: BarChart3,
    title: "Financial Reports",
    description: "Generate comprehensive financial reports and gain insights into your business performance.",
  },
  {
    icon: Users,
    title: "HR & Payroll",
    description: "Manage employees, track attendance, and automate payroll processing seamlessly.",
  },
  {
    icon: FileText,
    title: "Invoicing",
    description: "Create professional invoices, track payments, and manage your accounts receivable.",
  },
  {
    icon: ShoppingCart,
    title: "Sales & CRM",
    description: "Manage leads, track opportunities, and close deals faster with integrated CRM.",
  },
  {
    icon: Settings,
    title: "Customizable",
    description: "Adapt the system to your unique workflows with flexible customization options.",
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
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Features</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            Everything You Need to <span className="text-gradient">Succeed</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From small startups to growing enterprises, our comprehensive ERP solution 
            provides all the tools you need — completely free.
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
