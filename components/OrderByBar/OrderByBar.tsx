import styled from 'styled-components';
import Button from '../Button/Button';

const SHAPE =
  'w-full max-w-6xl flex items-center place-content-between py-1 bg-green-200';

const Title = styled.div`
  font-weight: bold;
`;

const OrderByButton = styled(Button)`
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

export default function OrderByBar(props: {
  className?: string;
  value: string;
  onChange: Function;
}) {
  const { className = '', value, onChange } = props;

  const renderOrder = () =>
    ORDER_BY.map((b) => {
      let cClass = 'border-secondary rounded-3xl';
      if (value === b.value) {
        cClass = 'border-secondary rounded-3xl bg-secondary text-white';
      }

      const handleChange = () => {
        onChange(b.value);
      };

      return (
        <OrderByButton
          customClass={cClass}
          key={b.value}
          onClick={handleChange}
        >
          {b.text}
        </OrderByButton>
      );
    });

  return (
    <div className={`${SHAPE} ${className}`}>
      <Title>排序依照：</Title>
      {renderOrder()}
    </div>
  );
}
