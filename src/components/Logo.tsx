import logoIcon from "@/assets/logo-icon.png";

interface LogoProps {
  showBadge?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ showBadge = false, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: {
      icon: "h-5",
      text: "text-xl",
    },
    md: {
      icon: "h-6",
      text: "text-2xl",
    },
    lg: {
      icon: "h-7",
      text: "text-3xl",
    },
  };

  return (
    <div className="flex items-center gap-1">
      <img 
        src={logoIcon} 
        alt="Bilderp Logo" 
        className={sizeClasses[size].icon}
      />
      <span className={`font-display font-bold ${sizeClasses[size].text}`}>
        <span className="text-foreground">Bild</span>
        <span className="text-secondary">erp</span>
      </span>
      {showBadge && (
        <span className="ml-2 px-2 py-0.5 rounded-full gradient-free text-xs font-semibold text-accent-foreground">
          GRATUIT
        </span>
      )}
    </div>
  );
};

export default Logo;
