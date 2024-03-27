
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ data, label, value }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    const labels = data.map(item => item[label]);
    const values = data.map(item => item[value]);
    

    const randomPastelColor = () => {
      const r = Math.floor(Math.random() * 155) + 100;
      const g = Math.floor(Math.random() * 155) + 100;
      const b = Math.floor(Math.random() * 155) + 100;
      return `rgb(${r}, ${g}, ${b})`;
    };

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: value.charAt(0).toUpperCase() + value.slice(1), 
            data: values,
            borderColor: randomPastelColor(),
            backgroundColor: 'transparent',
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: label.charAt(0).toUpperCase() + label.slice(1), 
            },
          },
          y: {
            display: true,
            beginAtZero: true,
            title: {
              display: true,
              text: value.charAt(0).toUpperCase() + value.slice(1), 
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, label, value]); 

  return (
    <div className="max-w-screen-xl mx-auto">
      <canvas ref={chartRef} style={{ width: '100%', height: '500px' }} />
    </div>
  );
};

export default LineChart;
