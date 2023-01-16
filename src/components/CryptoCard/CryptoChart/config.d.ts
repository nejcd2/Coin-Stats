declare const _default: {
    datasets: {
        borderColor: string;
        borderCapStyle: string;
        borderJoinStyle: string;
        lineTension: number;
        xAxisId: string;
        yAxisID: string;
        pointRadius: number;
        pointHoverRadius: number;
        fill: boolean;
        showLine: boolean;
    };
    options: {
        legend: {
            display: boolean;
        };
        tooltip: {
            enabled: boolean;
        };
        scales: {
            yAxes: {
                id: string;
                display: boolean;
                type: string;
                gridLines: {
                    display: boolean;
                };
            }[];
            xAxes: {
                id: string;
                display: boolean;
                gridLines: {
                    display: boolean;
                };
            }[];
        };
        responsive: boolean;
    };
};
export default _default;
