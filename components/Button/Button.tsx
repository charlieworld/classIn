import styled from 'styled-components';
import { ReactChildren, ReactChild, MouseEventHandler } from 'react';

interface ButtonProps {
  children: ReactChild | ReactChildren;
  customClass?: string;
  hoverStyle?: string[];
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const BUTTON_SHAPE = 'border-2 rounded-3xl';

const Button = styled.button`
  padding: 0.2rem 0.5rem;
  width : 8rem;
`;

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
    <Button
      className={`${BUTTON_SHAPE} ${renderHoverStyle()} ${customClass}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
