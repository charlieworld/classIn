import { ReactChildren, ReactChild, MouseEventHandler } from 'react';

interface ButtonProps {
  children: ReactChild | ReactChildren;
  customClass?: string;
  hoverStyle?: string[];
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const BUTTON_SHAPE = 'px-8 py-1 border-2 rounded';

export default function ButtonComponent(props: ButtonProps) {
  const {
    children,
    customClass = '',
    hoverStyle = null,
    onClick = () => {},
  } = props;

  const renderHoverStyle = () => {
    if (!hoverStyle) return '';
    return hoverStyle.map((item) => `hover:${item} `).join(' ');
  };

  return (
    <button
      className={`${BUTTON_SHAPE} ${renderHoverStyle()} ${customClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
