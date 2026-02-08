import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Numele este obligatoriu").max(100, "Numele trebuie să aibă maxim 100 caractere"),
  email: z.string().trim().email("Adresa de email nu este validă").max(255, "Email-ul trebuie să aibă maxim 255 caractere"),
  message: z.string().trim().min(1, "Mesajul este obligatoriu").max(1000, "Mesajul trebuie să aibă maxim 1000 caractere"),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Mesaj trimis!",
      description: "Vă mulțumim pentru mesaj. Vă vom contacta în curând.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "contact@bilderp.ro" },
    { icon: Phone, label: "Telefon", value: "+40 123 456 789" },
    { icon: MapPin, label: "Locație", value: "București, România" },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contact</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            Hai să <span className="text-gradient">Vorbim</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ai întrebări sau vrei să discutăm despre nevoile tale? Trimite-ne un mesaj și îți vom răspunde cât mai curând.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border">
              <div className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Nume complet
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Ion Popescu"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1.5 ${errors.name ? 'border-destructive' : ''}`}
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Adresa de email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ion@exemplu.ro"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1.5 ${errors.email ? 'border-destructive' : ''}`}
                  />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Mesaj
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Scrie mesajul tău aici..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`mt-1.5 resize-none ${errors.message ? 'border-destructive' : ''}`}
                  />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  variant="free" 
                  size="lg" 
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Se trimite..."
                  ) : (
                    <>
                      Trimite Mesajul
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">Informații de Contact</h3>
              <p className="text-muted-foreground">
                Suntem aici să te ajutăm. Contactează-ne prin oricare din metodele de mai jos sau folosește formularul.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-foreground">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-2xl gradient-dark mt-8"
            >
              <h4 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                Program de Lucru
              </h4>
              <p className="text-primary-foreground/70 text-sm mb-3">
                Luni - Vineri: 09:00 - 18:00
              </p>
              <p className="text-primary-foreground/70 text-sm">
                Răspundem la mesaje în maxim 24 de ore în zilele lucrătoare.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
