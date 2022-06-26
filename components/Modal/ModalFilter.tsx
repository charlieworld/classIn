import { MouseEventHandler, useState } from 'react';
import Modal from './Modal';
import { FILTER } from '../FilterBar/FilterBar';
import Button from '../Button/Button';

interface ModalFilterProps {
  onClose: MouseEventHandler<HTMLButtonElement>;
  onConfirm: MouseEventHandler<HTMLButtonElement> | Function;
  value: string;
}
export default function ModalFilter(props: ModalFilterProps) {
  const { onClose = () => {}, onConfirm = () => {}, value = '' } = props;
  const [val, setVal] = useState(value);
  const renderButtons = () =>
    FILTER.map((b) => {
      let cClass = 'border-primary text-primary rounded-md mr-2 mb-4';
      if (val === b.value) {
        cClass = 'border-primary rounded-md bg-primary mr-2 text-white mb-4';
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
      <div className="flex flex-col pt-10 px-10 items-center">
        {renderButtons()}
      </div>
    </Modal>
  )
}
