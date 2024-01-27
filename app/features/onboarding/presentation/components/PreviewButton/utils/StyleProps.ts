import Color from '@core/utils/enums/Color';
import { DimensionValue } from 'react-native';

interface StyleProps {
  color?: Color;
  backgroundColor?: Color;
  width?: DimensionValue | undefined;
}

export default StyleProps;
