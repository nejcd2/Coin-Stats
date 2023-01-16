import React from 'react';
import { TitleLineProps } from './TitleLine';
import { IconLineProps } from './IconLine';
import { CryptoChartProps } from './CryptoChart';
export declare type CryptoCardProps = {
    className?: string;
    currencyName: TitleLineProps['currencyName'];
    currencyPrice: TitleLineProps['currencyPrice'];
    icon: IconLineProps['icon'];
    currencyShortName: IconLineProps['currencyShortName'];
    trend: IconLineProps['trend'];
    trendDirection: IconLineProps['trendDirection'];
    chartColor?: CryptoChartProps['chartColor'];
    chartData: CryptoChartProps['chartData'];
};
declare const CryptoCard: React.FC<CryptoCardProps>;
export default CryptoCard;
