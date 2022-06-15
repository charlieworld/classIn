import { HeartIcon } from '@heroicons/react/solid';

const IconHeartComponent = (props: {
  active?: boolean;
  customClass?: string;
}) => {
  const { active = false, customClass = '' } = props;
  const isActive = () => {
    if (active) return 'text-primary'
    return 'text-gray-200'
  }
  return <HeartIcon className={`h-4 w-4 md:h-6 md:w-6 ${isActive()} ${customClass}`} />;
};

export default IconHeartComponent;
