import React from 'react';
import {Svg, Path} from 'react-native-svg';

export default function HambugerSvg({size = 1, color, ...props}) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <Path
        id="Path_2790"
        data-name="Path 2790"
        d="M0,0H24V24H0Z"
        fill="none"
      />
      <Path
        id="Path_2791"
        data-name="Path 2791"
        d="M16,18v2H5V18Zm5-7v2H3V11ZM19,4V6H8V4Z"
        fill={color || '#232332'}
      />
    </Svg>
  );
}
