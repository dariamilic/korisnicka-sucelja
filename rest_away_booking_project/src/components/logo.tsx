type LogoProps = {
  className?: string;
};

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <p className={`font-lato font-black text-4xl ${className}`}>
      <span className="text-brown-200">Rest</span>
      <span className="text-brand-text-strong text-gray-500">Away</span>
      <span className="text-gray-500">.</span>
    </p>
  );
};

export default Logo;
