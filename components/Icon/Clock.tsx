import { ClockIcon } from '@heroicons/react/solid';

const IconClockComponent = (props: {
  active?: boolean;
  customClass?: string;
}) => {
  const { active = false, customClass = '' } = props;
  const isActive = () => {
    if (active) return 'text-secondary'
    return 'text-gray-200'
  }
  return <ClockIcon className={`h-6 w-6 ${isActive()} ${customClass}`} />;
};

export default IconClockComponent;
