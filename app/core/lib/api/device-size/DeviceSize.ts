export default interface DeviceSize {
  moderateScale: (size: number, factor?: number) => number;
  scale: (size: number) => number;
  verticalScale: (size: number) => number;
}
