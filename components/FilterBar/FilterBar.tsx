import styled from 'styled-components';
import Button from '../Button/Button';


const SHAPE = 'w-full flex items-center place-content-between py-1 px-10 bg-green-200';


export default function FilterBar(props: { className?: string}) {
  const { className = '' } = props;
  return (
    <div className={`${SHAPE} ${className}`}>
      <Button>test1</Button>
      <Button>test2</Button>
      <Button>test3</Button>
      <Button>test4</Button>
    </div>
  );
}
