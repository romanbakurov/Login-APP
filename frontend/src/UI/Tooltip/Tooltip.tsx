import S from './Tooltip.module.css';
import ReactDOM from 'react-dom';

type TooltipProps = {
  content: string;
  targetReact: DOMRect | null;
  visible: boolean;
};

export const Tooltip = ({ content, targetReact, visible }: TooltipProps) => {
  if (!visible || !targetReact) return null;

  return ReactDOM.createPortal(
    <div
      className={S.tooltip}
      style={{
        position: 'absolute',
        top: targetReact.top + targetReact.height / 2 + window.scrollY,
        left: targetReact.right + 8 + window.scrollX,
        transform: 'translateY(-50%)',
      }}
    >
      {content}
    </div>,
    document.body,
  );
};
