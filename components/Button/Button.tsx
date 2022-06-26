import { ReactChildren, ReactChild, MouseEventHandler } from 'react';

interface ButtonProps {
  children: ReactChild | ReactChildren;
  customClass?: string;
  hoverStyle?: string[];
  onClick?: MouseEventHandler<HTMLButtonElement> | Function;
  full?: boolean,
}




export default function ButtonComponent(props: ButtonProps) {
  const {
    children,
    customClass = '',
    hoverStyle = null,
    onClick = () => {},
    full = false,
  } = props;

  const getButtonClass = () => {
    if(full) {
      return 'border-2 px-4 py-3 w-full text-xl';
    }

    return 'border-2 px-2 py-1 w-32 text-base lg:text-base ';
  }

  const renderHoverStyle = () => {
    if (!hoverStyle) return '';
    return hoverStyle.map((item) => `hover:${item} `).join(' ');
  };

  return (
    <button
      className={`${getButtonClass()} ${renderHoverStyle()} ${customClass}`}
      onClick={() => { onClick() }}
    >
      {children}
    </button>
  );
}
