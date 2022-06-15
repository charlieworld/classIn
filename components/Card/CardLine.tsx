import { ReactChildren, ReactChild } from 'react';
import { SubTitle } from '../Common/Typography';

export default function CardLine(props: { title: string, children: ReactChildren | ReactChild }) {
  const { title = '', children = null } = props;

  return (
    <div className="md:flex items-center">
      <SubTitle className="w-24 min-w-fit">{title}</SubTitle>
      {children}
    </div>
  );
}
