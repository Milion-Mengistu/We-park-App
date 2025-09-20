import QRCode from 'qrcode';

export interface RealQRParams {
  text: string;
  size?: number; // pixel size (width/height)
  margin?: number; // quiet zone modules
  darkColor?: string;
  lightColor?: string;
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
}

export async function generateRealQRSVG({
  text,
  size = 220,
  margin = 2,
  darkColor = '#000000',
  lightColor = '#FFFFFF',
  errorCorrectionLevel = 'M'
}: RealQRParams): Promise<string> {
  return await QRCode.toString(text, {
    type: 'svg',
    width: size,
    margin,
    color: {
      dark: darkColor,
      light: lightColor
    },
    errorCorrectionLevel
  });
}

export async function generateRealQRPNGDataURL({
  text,
  size = 220,
  margin = 2,
  darkColor = '#000000',
  lightColor = '#FFFFFF',
  errorCorrectionLevel = 'M'
}: RealQRParams): Promise<string> {
  return await QRCode.toDataURL(text, {
    width: size,
    margin,
    color: {
      dark: darkColor,
      light: lightColor
    },
    errorCorrectionLevel
  });
}
