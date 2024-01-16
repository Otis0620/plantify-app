import DeviceSizeApi from './DeviceSizeApi';

describe('DeviceSizeApi', () => {
  let deviceSizeApi: DeviceSizeApi;

  beforeEach(() => {
    deviceSizeApi = DeviceSizeApi.getInstance();
  });

  it('should call moderateScale method with the correct arguments', () => {
    const size = 10;
    const factor = 2;
    const moderateScaleSpy = jest.spyOn(
      deviceSizeApi,
      'moderateScale',
    );

    deviceSizeApi.moderateScale(size, factor);

    expect(moderateScaleSpy).toHaveBeenCalledWith(size, factor);
  });

  it('should call scale method with the correct argument', () => {
    const size = 10;
    const scaleSpy = jest.spyOn(deviceSizeApi, 'scale');

    deviceSizeApi.scale(size);

    expect(scaleSpy).toHaveBeenCalledWith(size);
  });

  it('should call verticalScale method with the correct argument', () => {
    const size = 10;
    const verticalScaleSpy = jest.spyOn(
      deviceSizeApi,
      'verticalScale',
    );

    deviceSizeApi.verticalScale(size);

    expect(verticalScaleSpy).toHaveBeenCalledWith(size);
  });
});
