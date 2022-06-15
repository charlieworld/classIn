import { dataInterface } from './Card';
import { Title } from '../Common/Typography';
import Sparkles from '../Icon/Sparkles';
import Clock from '../Icon/Clock';
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
    <div className='w-5/12 lg:w-3/12 pr-2'>
        <Title>{className}</Title>
        <CardLine title="收穫多少">
          <IconLine
            active={lvLearned}
            total={5}
            icon={<Sparkles />}
            iconActive={<Sparkles active />}
          />
        </CardLine>
        <CardLine title="課程有趣">
          <IconLine
            active={lvFun}
            total={5}
            icon={<Sparkles />}
            iconActive={<Sparkles active />}
          />
        </CardLine>
        <CardLine title="作業量">
          <IconLine
            active={lvWork}
            total={5}
            icon={<Clock />}
            iconActive={<Clock active />}
          />
        </CardLine>
        {ifOtherWork && ifOtherWork !== '無' ? (
          <div className="flex items-center mt-2 md:mt-0 text-sm md:text-base">
            <Tag>{ifOtherWork === '有' ? '有其他作業' : ifOtherWork}</Tag>
          </div>
        ) : null}
        <CardLine title="考試量">
          <IconLine
            active={lvExamAmount}
            total={5}
            icon={<Clock />}
            iconActive={<Clock active />}
          />
        </CardLine>
        <div className="md:flex mt-2 md:mt-0 items-center">
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