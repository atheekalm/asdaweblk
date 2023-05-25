import { CategoryScale, LinearScale } from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

type Props = {
  labels: string[];
  data: number[];
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
};

const defaultProps = {
  backgroundColor: 'rgba(255, 99, 132, 0.2)',
  borderColor: 'rgba(255, 99, 132, 1)',
  borderWidth: 1,
};

const VerticalBarChart: React.FC<Props> = ({
  labels,
  data,
  backgroundColor = defaultProps.backgroundColor,
  borderColor = defaultProps.borderColor,
  borderWidth = defaultProps.borderWidth,
}) => {
  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderColor,
        borderWidth,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        type: 'linear' as const,
      },
      x: {
        type: 'category' as const,
      },
    },
  };

  return (
    <Bar
      data={chartData}
      options={chartOptions}
      plugins={[CategoryScale, LinearScale]}
    />
  );
};

export default VerticalBarChart;
