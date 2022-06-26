import { ReactNode } from 'react';
import { nanoid } from 'nanoid'


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
      if (index < active) return <div key={nanoid()}>{iconActive}</div>;
      return <div key={nanoid()}>{icon}</div>;
    });
    return t;
  };

  return <div className="flex items-center mr-1 md:mr-2 mb-1 md:mb-0">{renderIcons()}</div>;
}
