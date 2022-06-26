import { MouseEventHandler, useState } from 'react';
import Modal from './Modal';
import { ORDER_BY } from '../OrderByBar/OrderByBar';
import Button from '../Button/Button';

interface ModalOrderProps {
  onClose: MouseEventHandler<HTMLButtonElement>;
  onConfirm: MouseEventHandler<HTMLButtonElement> | Function;
  value: string;
}
export default function ModalOrder(props: ModalOrderProps) {
  const { onClose = () => {}, onConfirm = () => {}, value = '' } = props;
  const [val, setVal] = useState(value);
  const renderButtons = () =>
    ORDER_BY.map((b) => {
      let cClass = 'border-secondary text-secondary rounded-md mr-2 mb-4';
      if (val === b.value) {
        cClass = 'border-secondary rounded-md bg-secondary mr-2 text-white mb-4';
      }

      const handleChange = () => {
        setVal(b.value);
      };

      return (
        <Button customClass={cClass} full key={b.value} onClick={handleChange}>
          {b.text}
        </Button>
      );
    });

  const handleConfirm = () => {
    onConfirm(val);
  }

  return(
    <Modal onClose={onClose} onConfirm={handleConfirm}>
      <div className="flex flex-col pt-6 px-10 items-center">
        {renderButtons()}
      </div>
    </Modal>
  )
}
