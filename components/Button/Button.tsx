import { ReactChildren, ReactChild, MouseEventHandler } from 'react';

interface ButtonProps {
  children: ReactChild | ReactChildren;
  customClass?: string;
  hoverStyle?: string[];
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const BUTTON_SHAPE = 'border-2 px-2 py-1 w-32';


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
