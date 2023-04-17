interface DividerProps {
  vertical?: boolean;
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ vertical = false, className }) => {
  const baseClass = 'border border-grey-300';
  const verticalClass = vertical ? 'h-full' : 'w-full';
  const dividerClass = `${baseClass} ${verticalClass} ${className}`;

  return <div className={dividerClass} />;
};

export default Divider;
