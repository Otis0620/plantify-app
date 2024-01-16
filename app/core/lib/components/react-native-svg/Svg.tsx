import ReactNativeSvg from 'react-native-svg';

interface Props {
  height?: string | number;
  width?: string | number;
  viewBox?: string;
  fill?: string;
  stroke?: string;
  style?: object | object[];
  preserveAspectRatio?: string;
  children?: React.ReactNode;
}

const Svg = (props: Props) => {
  return <ReactNativeSvg {...props}>{props.children}</ReactNativeSvg>;
};

export default Svg;
