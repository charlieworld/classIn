import styled from 'styled-components';
import Button from '../Button/Button';
import { FILTER_VALUE } from '../../hooks/useData';

const SHAPE = 'w-full max-w-6xl flex items-center place-content-between py-1';

const FilterButton = styled(Button)`
  font-weight: bold;
`;

export const FILTER = [
  {
    text: '所有評價',
    value: FILTER_VALUE.ALL,
  },
  {
    text: '人文通識評價',
    value: FILTER_VALUE.HUMANITIES,
  },
  {
    text: '自然通識評價',
    value: FILTER_VALUE.PHYSIC,
  },
  {
    text: '社會通識評價',
    value: FILTER_VALUE.SOCIAL,
  },
  {
    text: '歷史通識評價',
    value: FILTER_VALUE.HISTORY,
  },
  {
    text: '體育評價',
    value: FILTER_VALUE.SPORTS,
  },
];

export default function FilterBar(props: {
  className?: string;
  value: string;
  onChange: Function;
  children: JSX.Element;
}) {
  const {
    className = '',
    value = '',
    onChange = () => {},
    children = null,
  } = props;

  const renderButtons = () =>
    FILTER.map((b) => {
      let cClass = 'border-primary text-primary rounded-md mr-2';
      if (value === b.value) {
        cClass = 'border-primary rounded-md bg-primary mr-2 text-white';
      }

      const handleChange = () => {
        onChange(b.value);
      };

      return (
        <FilterButton customClass={cClass} key={b.value} onClick={handleChange}>
          {b.text}
        </FilterButton>
      );
    });

  return (
    <div className={`${SHAPE} ${className}`}>
      {renderButtons()}
      {children}
    </div>
  );
}
