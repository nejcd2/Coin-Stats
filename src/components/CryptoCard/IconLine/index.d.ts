import React from 'react';
export declare type IconLineProps = {
    icon: React.ReactNode;
    currencyShortName: string;
    trend: string;
    trendDirection: -1 | 0 | 1;
};
declare const IconLine: React.FC<IconLineProps>;
export default IconLine;
