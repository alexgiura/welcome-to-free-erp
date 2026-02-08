import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Gift, ArrowRight, Check } from "lucide-react";

const FreeBanner = () => {
  const benefits = [
    "Fără taxe ascunse",
    "Toate funcționalitățile incluse",
    "Membri de echipă nelimitați",
    "Suport comunitate 24/7",
    "Actualizări regulate",
    "Export date oricând",
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl gradient-dark p-8 md:p-12"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 mb-6">
                  <Gift className="w-5 h-5 text-accent" />
                  <span className="font-semibold text-accent">Gratuit pentru Totdeauna</span>
                </div>

                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                  De ce să Plătești când e{" "}
                  <span className="text-gradient-free">Gratuit?</span>
                </h2>

                <p className="text-primary-foreground/70 text-lg mb-8 max-w-lg">
                  Credem că instrumentele puternice de business nu ar trebui să coste o avere. 
                  Bilderp este 100% gratuit, pentru totdeauna — fără perioade de probă, fără carduri de credit, 
                  fără surprize.
                </p>

                <Button variant="free" size="xl" className="gap-2">
                  Începe Acum — E Gratuit
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Right Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-primary-foreground/10 rounded-xl px-4 py-3"
                  >
                    <div className="w-6 h-6 rounded-full gradient-free flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <span className="text-primary-foreground font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeBanner;
