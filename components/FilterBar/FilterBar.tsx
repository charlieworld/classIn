import styled from 'styled-components';
import Button from '../Button/Button';
import SearchBar from './SearchBar';

const SHAPE =
  'w-full flex items-center place-content-between py-1';

const FilterButton = styled(Button)`
  font-weight: bold;
`;

const ORDER_BY = [
  {
    text: '推薦高至低',
    value: 'lv_recommend',
  },
  {
    text: '作業低至高',
    value: 'lvWork',
  },
  {
    text: '考試少至多',
    value: 'lvExamAmount',
  },
  {
    text: '收穫高至低',
    value: 'lvLearned',
  },
  {
    text: '有趣高至低',
    value: 'lvFun',
  },
  {
    text: '要求少至多',
    value: 'lvRequest',
  },
  {
    text: '時間新至舊',
    value: 'createDate',
  },
];

export default function FilterBar(props: {
  className?: string;
  value: string;
  onChange: Function;
}) {
  const { className = '', value, onChange } = props;

  const renderOrder = () =>
    ORDER_BY.map((b) => {
      let cClass = 'border-primary text-primary rounded-md';
      if (value === b.value) {
        cClass = 'border-primary rounded-sm bg-primary text-white';
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
      {renderOrder()}
      <SearchBar />
    </div>
  );
}
