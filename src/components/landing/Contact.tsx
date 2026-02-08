import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Send } from "lucide-react";
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
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

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
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Mesaj trimis!",
      description: "Vă mulțumim pentru mesaj. Vă vom contacta în curând.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left side - Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
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
                className={`mt-1.5 bg-background ${errors.name ? 'border-destructive' : ''}`}
              />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <Label htmlFor="email" className="text-foreground font-medium">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="ion@exemplu.ro"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1.5 bg-background ${errors.email ? 'border-destructive' : ''}`}
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
                className={`mt-1.5 resize-none bg-background ${errors.message ? 'border-destructive' : ''}`}
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
          </motion.form>

          {/* Right side - Title & Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Contact
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              Ia legătura<br />cu noi
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md">
              Ai întrebări sau vrei să discutăm despre nevoile tale? Suntem aici să te ajutăm.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              <a
                href="mailto:contact@bilderp.ro"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground group-hover:text-accent transition-colors">contact@bilderp.ro</p>
                </div>
              </a>

              <a
                href="tel:+40123456789"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <p className="font-medium text-foreground group-hover:text-accent transition-colors">+40 123 456 789</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
