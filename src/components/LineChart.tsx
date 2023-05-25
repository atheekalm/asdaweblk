import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface Props {
    labels: string[];
    dataValues: number[];
    dataValues1?: number[];
    dataValues2?: number[];
    label: string;
}
export const LineChart: React.FC<Props> = (props) => {
    const { dataValues, labels, dataValues1, dataValues2 } = props;
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                display: false
            },
            title: {
                display: false,
                // text: 'Chart.js Line Chart',
            },
        },
    };

    const data = {
        labels,
        datasets: [
            {
                // label: label,
                data: dataValues,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                // label: label,
                data: dataValues1,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                // label: label,
                data: dataValues2,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },

        ],
    };
    return (
        <Line options={options} data={data} />
    )
}