import { MouseEventHandler } from 'react';
import Button from '../Button/Button';


interface LoadMoreProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}
export default function LoadMore(props: LoadMoreProps) {
  const { onClick = () => {} } = props;

  return <div className="flex items-center justify-center m-8">
    <Button customClass="rounded border-primary text-primary" onClick={onClick}>
      看更多
    </Button>
  </div>;
}
