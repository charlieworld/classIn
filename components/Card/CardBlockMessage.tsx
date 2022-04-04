import { dataInterface } from './Card';
import Heart from '../Icon/Heart';
import IconLine from '../Common/IconLine';

interface CardBlockMessageProps {
  data: dataInterface;
}
export default function CardBlockMessage(props: CardBlockMessageProps) {
  const { data = null } = props;

  if (!data) return null;

  const { lv_recommend, createDate, message } = data;

  return (
    <div className="w-2/5">
      <div className="flex items-center justify-between w-full">
        <IconLine
          active={lv_recommend}
          total={5}
          icon={<Heart />}
          iconActive={<Heart active />}
        />
        <div className="ml-4">{createDate}</div>
      </div>
      <pre className="w-full mt-2 whitespace-pre-wrap">{message || ''}</pre>
    </div>
  );
}
