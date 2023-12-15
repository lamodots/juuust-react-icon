/// <reference types="react" />
  import { ComponentType, SVGAttributes } from 'react';

  interface Props extends SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
  }

  type Icon = ComponentType<Props>;
  export const AlignVerticalJustifyCenter: Icon;
export const AlignVerticalDistributeStart: Icon;
export const AlignVerticalDistributeEnd: Icon;
export const AlignVerticalDistributeCenter: Icon;
export const AlignStartVertical: Icon;
export const AlignStartHorizontal: Icon;
export const AlignRight: Icon;
export const AlignLeft: Icon;
export const AlignJustify: Icon;
export const AlignHorizontalSpaceBetween: Icon;
export const AlignHorizontalSpaceAround: Icon;
export const AlignHorizontalJustifyStart: Icon;
export const AlignHorizontalJustifyEnd: Icon;
export const AlignHorizontalJustifyCenter: Icon;
export const AlignHorizontalDistributeStart: Icon;
export const AlignHorizontalDistributeEnd: Icon;
export const AlignHorizontalDistributeCenter: Icon;
export const AlignEndVertical: Icon;
export const AlignEndHorizontal: Icon;
export const AlignCenterVertical: Icon;
export const AlignCenterHorizontal: Icon;
export const AlignCenter: Icon;
export const AlertTriangle: Icon;
export const AlertOctagon: Icon;
export const AlertCircle: Icon;
export const Album: Icon;
export const AlarmPlus: Icon;
export const AlarmMinus: Icon;
export const AlarmClockOff: Icon;
export const AlarmClock: Icon;
export const AlarmCheck: Icon;
export const Airplay: Icon;
export const AirVent: Icon;
export const ActivitySquare: Icon;
export const Activity: Icon;
export const Accessibility: Icon;
