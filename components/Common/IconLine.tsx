import styled from 'styled-components';
import { ReactNode } from 'react';

const Wrapper = styled.div`
  div {
    margin-right: 0.5rem;
  }
`;

interface DotLineProps {
  active: number;
  total: number;
  icon: ReactNode;
  iconActive: ReactNode;
}
export default function IconLine(props: DotLineProps) {
  const { active = 0, total = 5, icon = null, iconActive = null } = props;

  if (!icon) return null;

  const renderIcons = () => {
    if (!icon) return null;

    const tArr = Array(total).fill(0);

    const t = tArr.map((_, index) => {
      if (index < active) return <>{iconActive}</>;
      return <>{icon}</>;
    });
    return t;
  };

  return <Wrapper className="flex items-center ">{renderIcons()}</Wrapper>;
}
