import logoIcon from "@/assets/logo-icon.png";

interface LogoProps {
  showBadge?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ showBadge = false, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: {
      icon: "h-8 w-8",
      text: "text-xl",
    },
    md: {
      icon: "h-10 w-10",
      text: "text-2xl",
    },
    lg: {
      icon: "h-12 w-12",
      text: "text-3xl",
    },
  };

  return (
    <div className="flex items-center gap-2">
      <img 
        src={logoIcon} 
        alt="Bilderp Logo" 
        className={sizeClasses[size].icon}
      />
      <span className={`font-display font-bold ${sizeClasses[size].text}`}>
        <span className="text-foreground">Bild</span>
        <span className="text-primary">erp</span>
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
