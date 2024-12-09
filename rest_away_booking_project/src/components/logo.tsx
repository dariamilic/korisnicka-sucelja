type LogoProps = {
  theme?: "light" | "dark";
  className?: string;
};

const Logo = ({ theme = "light", className = "" }: LogoProps) => {
  return (
    <p className={`font-lato font-black ${className}`}>
      {theme === "light" ? (
        <>
          <span className="text-brand-primary">Rest</span>
          <span className="text-brand-text-strong">Away</span>
          <span className="text-brand-primary">.</span>
        </>
      ) : (
        <>
          <span className="text-brand-stroke-weak">Rest</span>
          <span className="text-brand-stroke-strong">Away</span>
          <span className="text-brand-stroke-weak">.</span>
        </>
      )}
    </p>
  );
};

export default Logo;