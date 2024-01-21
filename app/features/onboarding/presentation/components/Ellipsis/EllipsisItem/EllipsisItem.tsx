import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '@core/enums/Colors';
import DeviceSizeApi from '@core/lib/api/device-size/DeviceSizeApi';
const deviceSizeApi = DeviceSizeApi.getInstance();

type Props = {
  active: boolean;
};

const EllipsisItem = ({ active }: Props) => {
  return (
    <View
      style={[styles.ellipsis, active ? styles.activeEllipsis : {}]}
    />
  );
};

const styles = StyleSheet.create({
  ellipsis: {
    borderRadius: 1000,
    width: deviceSizeApi.moderateScale(8),
    height: deviceSizeApi.moderateScale(8),
    marginHorizontal: deviceSizeApi.scale(3),
    backgroundColor: Colors.greyScale200,
  },

  activeEllipsis: {
    backgroundColor: Colors.primary900,
    width: deviceSizeApi.scale(26),
  },
});

export default EllipsisItem;
