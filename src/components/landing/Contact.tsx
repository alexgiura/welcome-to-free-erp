import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Send } from "lucide-react";
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
        <div className="max-w-xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contact</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
              Hai să <span className="text-gradient">Vorbim</span>
            </h2>
            
            {/* Phone number */}
            <motion.a
              href="tel:+40123456789"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 text-lg font-semibold text-accent hover:text-accent/80 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +40 123 456 789
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border"
          >
            <div className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-foreground font-medium">
                  Nume
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
                  Email
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
                  rows={4}
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
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
