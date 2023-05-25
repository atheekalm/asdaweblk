import { BarElement, CategoryScale, Chart, Legend, LinearScale, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';


export const ResultSummaryOftheYearBarChart = () => {

    Chart.register(
        BarElement,
        Tooltip,
        Legend,
        CategoryScale,
        LinearScale,
        ChartDataLabels
    )


    const data = {
        labels: ['Bio-Science', 'Physics', 'Chemistry'],
        datasets: [
            {
                label: 'A',
                data: [50, 50, 96,2],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 1,
                labels: ['A', 'B', 'C', 'F'],                
            },
            {
                label: 'B',
                data: [50, 50, 50,2],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgb(255, 159, 64)',
                borderWidth: 1,
                labels: ['A', 'B', 'C', 'F'],                

            },
            {
                label: 'C',
                data: [50, 50, 50,2],
                backgroundColor: 'rgba(255, 205, 86, 0.2)',
                borderColor: 'rgb(255, 205, 86)',
                borderWidth: 1,
                labels: ['A', 'B', 'C', 'F'],                

            },
            {
                label: 'F',
                data: [50, 50, 50,2],
                backgroundColor: 'rgba(255, 205, 86, 0.2)',
                borderColor: 'rgb(255, 205, 86)',
                borderWidth: 1,
                labels: ['A', 'B', 'C', 'F'],                
            },
        ]
    };
    const options = {
        type: 'bar',
        data: data,
        responsive: true,
        plugins: {
            datalabels: {
                formatter: function (value: any, context: any) {
                    const index: number = context.datasetIndex;
                    switch (index) {
                        case 0:
                            return "A"
                        case 1:
                            return "B"
                        case 2:
                            return "C"
                        case 3:
                            return "F"
                        default:
                            break;
                    }
                }
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };


    return (
        <Bar
            // type="bar"
            data={data}
            options={options}
            plugins={[ChartDataLabels]}
        />
    )
}



