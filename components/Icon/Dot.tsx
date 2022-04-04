const IconDotComponent = (props: {
  active?: boolean;
  customClass?: string;
  secondary?: boolean;
}) => {
  const { active = false, customClass = '', secondary } = props;
  const isActive = () => {
    if (!active) return 'bg-gray-200';
    if (secondary) return 'bg-secondary';
    return 'bg-primary';
  };
  return (
    <div
      className={`h-4 w-4 border-1 border-transparent	rounded-full ${isActive()} ${customClass}`}
    />
  );
};

export default IconDotComponent;
