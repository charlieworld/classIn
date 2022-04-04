import styled from 'styled-components';
import { Title } from '../Common/Typography';
import CardBlockLvLeft from './CardBlockLvLeft';
import CardBlockLvRight from './CardBlockLvRight';
import CardBlockMessage from './CardBlockMessage';

export interface dataInterface {
  index: number;
  createDate: string;
  className: string;
  studyTime?: string;
  section?: string;
  teaher: string;
  classOpen?: string | null;
  classType?: string;
  ifHistory?: string;
  lvLearned: number;
  lvFun: number;
  lvWork: number;
  ifGroupReport: string;
  ifPersonalReport: string;
  ifOtherWork: string;
  lvExamAmount?: number;
  ifSmallExam?: string;
  ifMidExam?: string;
  ifFinalExam?: string;
  ifOtherExam?: string;
  lvTeachlear: number;
  lvRequest: number;
  lv_recommend: number;
  message?: string;
}

interface CardProps {
  data: dataInterface;
}

const CardWrapper = styled.div`
  padding: 1rem 0rem;
  border-bottom: rgb(229 231 235) solid 2px;
  display: flex;
`;

export default function Card(props: CardProps) {
  const { data } = props;

  if (!data) return null;

  const {
    index,
    className,
    studyTime,
    classOpen,
    section,
    classType,
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
    <CardWrapper>
      <div className="w-2/12 pr-2">
        <Title>{`# ${index}`}</Title>
        <div>{studyTime || ''}</div>
        <div>{classOpen || ''}</div>
        <div>{section || ''}</div>
        <div>{classType || ''}</div>
      </div>
      <CardBlockLvLeft data={data} />
      <CardBlockLvRight data={data} />
      <CardBlockMessage data={data} />
    </CardWrapper>
  );
}