import { motion } from "framer-motion";
import { Code2, Wrench, Clock, Puzzle } from "lucide-react";

const CustomDevelopment = () => {
  return (
    <section id="custom" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Personalizare
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-6">
              Ai nevoie de ceva <span className="text-gradient">Unic?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              ERP-ul nostru este complet personalizabil pentru a se potrivi fluxurilor tale unice de lucru. 
              Fie că ai nevoie de module specifice, integrări sau funcționalități complet noi — 
              te avem acoperit.
            </p>
            <p className="text-muted-foreground mb-8">
              Aplicația de bază este <span className="font-semibold text-accent">100% gratuită</span>. 
              Singurul cost? Dezvoltarea personalizată când ai nevoie de ea.
            </p>

            {/* Features list */}
            <div className="space-y-4">
              {[
                { icon: Puzzle, text: "Arhitectură modulară — adaugă doar ce ai nevoie" },
                { icon: Wrench, text: "Integrări personalizate cu instrumentele tale existente" },
                { icon: Code2, text: "Funcționalități adaptate pentru fluxul tău de lucru" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-card rounded-3xl p-8 md:p-10 shadow-elevated border border-border overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Tarif Dezvoltare</p>
                    <p className="font-display text-2xl font-bold">Lucru Personalizat</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-5xl md:text-6xl font-bold text-gradient">30€</span>
                    <span className="text-muted-foreground text-xl">/oră</span>
                  </div>
                  <p className="text-muted-foreground mt-2">
                    Doar când soliciți funcționalități personalizate
                  </p>
                </div>

                <div className="h-px bg-border my-6" />

                <div className="space-y-3">
                  <p className="font-semibold text-foreground mb-4">Ce este inclus:</p>
                  {[
                    "Dezvoltare module personalizate",
                    "Integrări cu terți",
                    "Personalizări UI/UX",
                    "Suport prioritar în timpul dezvoltării",
                    "Proprietatea codului — e al tău",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground mt-6 pt-6 border-t border-border">
                  💡 Fără taxe lunare, fără abonamente — plătești doar pentru orele de dezvoltare când ai nevoie de lucru personalizat.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomDevelopment;
