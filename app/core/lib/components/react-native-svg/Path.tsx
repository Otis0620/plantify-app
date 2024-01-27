import { Path as ReactNativeSvgPath } from 'react-native-svg';

interface Props {
  d: string;
  fill?: string;
  fillOpacity?: number;
  stroke?: string;
  strokeWidth?: number;
  strokeOpacity?: number;
  strokeLinecap?: 'butt' | 'square' | 'round';
  strokeLinejoin?: 'miter' | 'bevel' | 'round';
  strokeDasharray?: number[];
  strokeDashoffset?: number;
}

const Path = (props: Props) => {
  return <ReactNativeSvgPath {...props} />;
};

export default Path;
