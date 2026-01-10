import L from './Logo.module.css';

type LogoProps = {
  text?: string;
  src?: string;
  alt: string;
  showText?: boolean;
  onClick?: () => void;
};

export const Logo = ({ text, src, alt, showText = true, onClick }: LogoProps) => {
  return (
    <>
      <div className={L.container} onClick={onClick}>
        <div className={L.logo}>
          {src && <img className={L.img} src={src} alt={alt} />}
          {showText && text && <span>{text}</span>}
        </div>
      </div>
    </>
  );
};
