import { SparklesIcon } from '@heroicons/react/solid';

const IconSparklesComponent = (props: {
  active?: boolean;
  customClass?: string;
}) => {
  const { active = false, customClass = '' } = props;
  const isActive = () => {
    if (active) return 'text-primary'
    return 'text-gray-200'
  }
  return <SparklesIcon className={`h-4 w-4 md:h-6 md:w-6 ${isActive()} ${customClass}`} />;
};

export default IconSparklesComponent;
