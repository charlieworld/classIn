import { ReactChildren, ReactChild } from 'react';

interface TagProps {
  className?: string;
  children: ReactChildren | ReactChild;
}
export default function Tag(props: TagProps) {
  const { className, children = null } = props;


  const orgClassName= 'flex items-center text-sm md:text-base justify-center px-2 py-1 bg-secondary rounded text-white leading-5 text-xs md:min-w-14 md:max-w-full	mb-1'

  return (
    <div className={`${orgClassName} ${className || ''}`}>
      {children}
    </div>
  );
}
