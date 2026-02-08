import { motion } from "framer-motion";
import { 
  BarChart3, 
  Users, 
  FileText, 
  Settings, 
  TrendingUp,
  Database,
  PieChart
} from "lucide-react";

const HeroIllustration = () => {
  const floatingItems = [
    { icon: BarChart3, x: "10%", y: "20%", delay: 0, size: "lg" },
    { icon: Users, x: "75%", y: "15%", delay: 0.2, size: "md" },
    { icon: FileText, x: "85%", y: "55%", delay: 0.4, size: "md" },
    { icon: Settings, x: "15%", y: "70%", delay: 0.6, size: "sm" },
    { icon: TrendingUp, x: "50%", y: "10%", delay: 0.3, size: "lg" },
    { icon: Database, x: "60%", y: "75%", delay: 0.5, size: "md" },
    { icon: PieChart, x: "30%", y: "60%", delay: 0.1, size: "lg" },
  ];

  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-18 h-18",
  };

  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-7 h-7",
    lg: "w-9 h-9",
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      
      {/* Connection lines SVG */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(75 70% 50%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(75 70% 50%)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* Connecting lines */}
        <motion.path
          d="M 40 80 Q 200 120 300 60"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.path
          d="M 60 280 Q 150 200 120 240"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        />
        <motion.path
          d="M 340 220 Q 280 180 240 300"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
        />
        <motion.path
          d="M 200 40 Q 220 150 300 60"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.1 }}
        />
        <motion.path
          d="M 120 240 Q 180 280 240 300"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.3 }}
        />
      </svg>

      {/* Floating icons */}
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: item.delay,
            type: "spring",
            stiffness: 200
          }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ 
              duration: 3 + index * 0.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className={`${sizeClasses[item.size as keyof typeof sizeClasses]} rounded-2xl bg-card shadow-elevated border border-border flex items-center justify-center backdrop-blur-sm`}
          >
            <item.icon className={`${iconSizes[item.size as keyof typeof iconSizes]} text-accent`} />
          </motion.div>
        </motion.div>
      ))}

      {/* Central dashboard card */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-48 md:w-56 bg-card rounded-2xl shadow-elevated border border-border p-4 backdrop-blur-sm"
        >
          {/* Mini dashboard header */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg gradient-free flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-accent-foreground" />
            </div>
            <div>
              <div className="h-2 w-16 bg-muted rounded" />
              <div className="h-1.5 w-10 bg-muted/60 rounded mt-1" />
            </div>
          </div>
          
          {/* Mini chart bars */}
          <div className="flex items-end gap-1.5 h-16 mb-3">
            {[40, 65, 45, 80, 55, 70, 90].map((height, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t gradient-free"
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              />
            ))}
          </div>
          
          {/* Stats row */}
          <div className="flex gap-2">
            <div className="flex-1 bg-muted/50 rounded-lg p-2">
              <div className="h-1.5 w-6 bg-accent rounded mb-1" />
              <div className="h-1 w-10 bg-muted rounded" />
            </div>
            <div className="flex-1 bg-muted/50 rounded-lg p-2">
              <div className="h-1.5 w-8 bg-accent rounded mb-1" />
              <div className="h-1 w-8 bg-muted rounded" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-2 h-2 rounded-full bg-accent/40"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0.4, 0.8, 0.4], scale: 1 }}
          transition={{
            opacity: { duration: 2, repeat: Infinity, delay: i * 0.3 },
            scale: { duration: 0.3, delay: 1 + i * 0.1 }
          }}
        />
      ))}
    </div>
  );
};

export default HeroIllustration;
