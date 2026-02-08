import { motion } from "framer-motion";
import { 
  BarChart3, 
  Users, 
  FileText, 
  Settings, 
  TrendingUp,
  Database,
  PieChart,
  Wallet,
  Package
} from "lucide-react";

const HeroIllustration = () => {
  const floatingItems = [
    { icon: BarChart3, x: "5%", y: "15%", delay: 0, size: "lg" },
    { icon: Users, x: "78%", y: "10%", delay: 0.2, size: "md" },
    { icon: FileText, x: "88%", y: "50%", delay: 0.4, size: "md" },
    { icon: Settings, x: "8%", y: "75%", delay: 0.6, size: "sm" },
    { icon: TrendingUp, x: "45%", y: "5%", delay: 0.3, size: "md" },
    { icon: Database, x: "70%", y: "80%", delay: 0.5, size: "sm" },
    { icon: PieChart, x: "25%", y: "70%", delay: 0.1, size: "md" },
    { icon: Wallet, x: "90%", y: "25%", delay: 0.7, size: "sm" },
    { icon: Package, x: "5%", y: "45%", delay: 0.35, size: "sm" },
  ];

  const sizeClasses = {
    sm: "w-11 h-11",
    md: "w-14 h-14",
    lg: "w-16 h-16",
  };

  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-7 h-7",
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      {/* Central glow - green */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/15 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-accent/10 rounded-full blur-2xl" />
      
      {/* Connection lines SVG */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="lineGradientGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(75, 70%, 50%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(75, 70%, 50%)" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Connecting curved lines */}
        <motion.path
          d="M 20 60 Q 120 100 200 80 T 380 40"
          stroke="url(#lineGradientGreen)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.path
          d="M 30 300 Q 100 250 200 280 T 350 320"
          stroke="url(#lineGradientGreen)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.7 }}
        />
        <motion.path
          d="M 360 100 Q 300 200 340 300"
          stroke="url(#lineGradientGreen)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.9 }}
        />
        <motion.path
          d="M 40 180 Q 100 200 160 180"
          stroke="url(#lineGradientGreen)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1.1 }}
        />
        <motion.path
          d="M 200 20 Q 200 100 200 180"
          stroke="url(#lineGradientGreen)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, delay: 1.3 }}
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
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              duration: 3 + index * 0.4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className={`${sizeClasses[item.size as keyof typeof sizeClasses]} rounded-2xl bg-primary shadow-lg border border-accent/30 flex items-center justify-center`}
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
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-52 md:w-64 bg-primary rounded-2xl shadow-2xl border border-accent/20 p-5 relative overflow-hidden"
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
          
          <div className="relative z-10">
            {/* Mini dashboard header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-free flex items-center justify-center shadow-md">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="h-2.5 w-20 bg-accent/30 rounded" />
                <div className="h-2 w-14 bg-accent/15 rounded mt-1.5" />
              </div>
            </div>
            
            {/* Mini chart bars */}
            <div className="flex items-end gap-2 h-20 mb-4 px-1">
              {[35, 55, 40, 75, 50, 85, 60].map((height, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t"
                  style={{ 
                    background: i === 5 
                      ? 'linear-gradient(to top, hsl(75, 70%, 50%), hsl(85, 65%, 55%))' 
                      : 'hsl(75, 70%, 50%, 0.3)'
                  }}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                />
              ))}
            </div>
            
            {/* Stats row */}
            <div className="flex gap-3">
              <div className="flex-1 bg-accent/10 rounded-xl p-3 border border-accent/20">
                <div className="flex items-center gap-1 mb-1">
                  <TrendingUp className="w-3 h-3 text-accent" />
                  <span className="text-[10px] text-accent font-semibold">+24%</span>
                </div>
                <div className="h-1.5 w-full bg-accent/20 rounded" />
              </div>
              <div className="flex-1 bg-accent/10 rounded-xl p-3 border border-accent/20">
                <div className="flex items-center gap-1 mb-1">
                  <Users className="w-3 h-3 text-accent" />
                  <span className="text-[10px] text-accent font-semibold">1.2k</span>
                </div>
                <div className="h-1.5 w-3/4 bg-accent/20 rounded" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative glowing dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-2 h-2 rounded-full bg-accent"
          style={{
            left: `${15 + i * 12}%`,
            top: `${25 + (i % 4) * 15}%`,
            boxShadow: '0 0 10px hsl(75, 70%, 50%, 0.6)'
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0.3, 0.7, 0.3], scale: 1 }}
          transition={{
            opacity: { duration: 2.5, repeat: Infinity, delay: i * 0.2 },
            scale: { duration: 0.3, delay: 1 + i * 0.1 }
          }}
        />
      ))}

      {/* Orbiting ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent shadow-lg" style={{ boxShadow: '0 0 15px hsl(75, 70%, 50%, 0.8)' }} />
      </motion.div>
    </div>
  );
};

export default HeroIllustration;
