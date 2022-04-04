import { dataInterface } from './Card';
import { Title } from '../Common/Typography';
import Dot from '../Icon/Dot';
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
    <div className='w-1/5 pr-1'>
        <Title>{teaher}</Title>
        <CardLine title="講課清晰">
          <IconLine
            active={lvTeachlear}
            total={5}
            icon={<Dot />}
            iconActive={<Dot active />}
          />
        </CardLine>
        <CardLine title="教師要求">
          <IconLine
            active={lvRequest}
            total={5}
            icon={<Dot secondary />}
            iconActive={<Dot secondary active />}
          />
        </CardLine>
      </div>
  );
}