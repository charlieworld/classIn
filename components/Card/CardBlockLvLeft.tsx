import { dataInterface } from './Card';
import { Title, SubTitle } from '../Common/Typography';
import Dot from '../Icon/Dot';
import IconLine from '../Common/IconLine';
import CardLine from './CardLine';
import Tag from '../Common/Tag';

interface CardBlockLvLeftProps {
  data: dataInterface;
}
export default function CardBlockLvLeft(props: CardBlockLvLeftProps) {
  const { data = null } = props;

  if (!data) return null;

  const {
    className,
    lvLearned,
    lvFun,
    lvWork,
    ifOtherWork,
    lvExamAmount,
    ifSmallExam,
    ifMidExam,
    ifFinalExam,
    ifOtherExam,
  } = data;

  return (
    <div className='w-72 pr-1'>
        <Title>{className}</Title>
        <CardLine title="收穫多少">
          <IconLine
            active={lvLearned}
            total={5}
            icon={<Dot />}
            iconActive={<Dot active />}
          />
        </CardLine>
        <CardLine title="課程有趣">
          <IconLine
            active={lvFun}
            total={5}
            icon={<Dot />}
            iconActive={<Dot active />}
          />
        </CardLine>
        <CardLine title="作業量">
          <IconLine
            active={lvWork}
            total={5}
            icon={<Dot secondary />}
            iconActive={<Dot active secondary />}
          />
        </CardLine>
        {ifOtherWork && ifOtherWork !== '無' ? (
          <div className="flex items-center">
            <Tag>{ifOtherWork === '有' ? '有其他作業' : ifOtherWork}</Tag>
          </div>
        ) : null}
        <CardLine title="考試量">
          <IconLine
            active={lvExamAmount}
            total={5}
            icon={<Dot secondary />}
            iconActive={<Dot active secondary />}
          />
        </CardLine>
        <div className="flex items-center">
          {ifSmallExam && <Tag className="mr-1">小考</Tag>}
          {ifMidExam && <Tag className="mr-1">期中考</Tag>}
          {ifFinalExam && <Tag className="mr-1">期末考</Tag>}
          {ifOtherExam && ifOtherExam !== '無' ? (
            <Tag>{ifOtherExam === '有' ? '有其他考試' : ifOtherExam}</Tag>
          ) : null}
        </div>
      </div>
  );
}