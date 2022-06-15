import { dataInterface } from './Card';
import { Title } from '../Common/Typography';
import Sparkles from '../Icon/Sparkles';
import Clock from '../Icon/Clock';
import IconLine from '../Common/IconLine';
import CardLine from './CardLine';

interface CardBlockLvRightProps {
  data: dataInterface;
}
export default function CardBlockLvRight(props: CardBlockLvRightProps) {
  const { data = null } = props;

  if (!data) return null;

  const {
    teaher,
    lvTeachlear,
    lvRequest,
  } = data;

  return (
    <div className='w-4/12 lg:w-3/12 pr-2'>
        <Title>{teaher}</Title>
        <CardLine title="講課清晰">
          <IconLine
            active={lvTeachlear}
            total={5}
            icon={<Sparkles />}
            iconActive={<Sparkles active />}
          />
        </CardLine>
        <CardLine title="教師要求">
          <IconLine
            active={lvRequest}
            total={5}
            icon={<Clock />}
            iconActive={<Clock active />}
          />
        </CardLine>
      </div>
  );
}