import React from 'react';
import {Svg, Path} from 'react-native-svg';

export default function RightArrowSvg({size = 1, color}) {
  return (
    <Svg
      width="20"
      height="15"
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6238 1C12.6238 0.45 12.0838 0 11.4238 0H1.82378C1.16378 0 0.623779 0.45 0.623779 1V7C0.623779 7.55 1.16378 8 1.82378 8H11.4238C12.0838 8 12.6238 7.55 12.6238 7V1ZM11.4235 1L6.62349 3.495L1.82349 1H11.4235ZM6.62349 4.5001L1.82349 2.0001V7.0001H11.4235V2.0001L6.62349 4.5001Z"
        fill={color || '#25221B'}
        fillOpacity="0.5"
      />
    </Svg>
  );
}
