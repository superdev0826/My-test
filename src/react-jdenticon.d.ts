declare module 'react-jdenticon' {
  const Jdenticon: React.FC<{
    value: string;
    size?: string;
    padding?: number;
    bg?: string;
    fg?: string;
    hash?: string;
    style?: React.CSSProperties;
    className?: string;
    element?: keyof JSX.IntrinsicElements;
  }>;

  export default Jdenticon;
}
