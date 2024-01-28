import { DimensionValue } from 'react-native';

import Color from '~core/utils/enums/Color';

interface StyleProps {
  color?: Color;
  backgroundColor?: Color;
  width?: DimensionValue | undefined;
}

export default StyleProps;
