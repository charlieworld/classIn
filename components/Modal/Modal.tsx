import { ReactChild, ReactChildren, MouseEventHandler } from 'react';
import { XIcon } from '@heroicons/react/solid';
import Button from '../Button/Button';

interface ModalProps {
  onClose: MouseEventHandler<HTMLButtonElement>;
  onConfirm: Function;
  children: ReactChild | ReactChildren;
}
export default function Modal(props: ModalProps) {
  const { onClose = () => {}, onConfirm = () => {}, children = null } = props;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-50">
      <div className="flex h-10 p-2 justify-end">
        <button className="h-10 w-10" onClick={onClose}>
          <XIcon className="cursor-pointer text-black" />
        </button>
      </div>
      <div className="mb-14">
        {children}
      </div>
      <div className="absolute bottom-10 w-full px-10 flex justify-center">
        <Button
          customClass="rounded bg-black border-black text-white"
          onClick={onConfirm}
          full
        >
          確認
        </Button>
      </div>
    </div>
  );
}
