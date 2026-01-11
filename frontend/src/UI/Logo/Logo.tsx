import L from './Logo.module.css';

type LogoProps = {
  text?: string;
  src?: string;
  alt: string;
  showText?: boolean;
  onClick?: () => void;
  className?: string;
  fontSize?: string | number;
};

export const Logo = ({
  text,
  src,
  alt,
  showText = true,
  onClick,
  className,
  fontSize,
}: LogoProps) => {
  return (
    <>
      <div className={`${L.container} ${className}`} onClick={onClick}>
        <div className={L.logo}>
          {src && <img className={L.img} src={src} alt={alt} />}
          {showText && text && <span style={{ fontSize }}>{text}</span>}
        </div>
      </div>
    </>
  );
};
