import {
  moderateScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

import DeviceSize from './DeviceSize';

class DeviceSizeApi implements DeviceSize {
  private static instance: DeviceSizeApi;

  private constructor() {
    // Private constructor to prevent instantiation outside the class
  }

  static getInstance(): DeviceSizeApi {
    if (!DeviceSizeApi.instance) {
      DeviceSizeApi.instance = new DeviceSizeApi();
    }
    return DeviceSizeApi.instance;
  }

  moderateScale(size: number, factor?: number): number {
    return moderateScale(size, factor);
  }

  scale(size: number): number {
    return scale(size);
  }

  verticalScale(size: number): number {
    return verticalScale(size);
  }
}

export default DeviceSizeApi;
