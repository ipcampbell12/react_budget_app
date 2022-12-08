import React, { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

import { Bar } from "react-chartjs-2"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)



function BarChart({ income, expenses }) {

    const [chartData, setChartData] = useState({
        datasets: [],
    })

    const [chartOptions, setChartOptions] = useState({});


    useEffect(() => {
        setChartData({
            labels: ['Income', 'Expenses'],
            datasets: [{
                label: "Income vs Expenses",
                data: [income, expenses],
                borderColor: "rgb(53,162,235)",
                backgroundColor: [
                    "rgb(40, 185, 181)",
                    "rgba(255, 80, 73, 0.8)"
                ]
            },
            ],
        });
        setChartOptions({
            responsive: true,
            plugins: {
                legend: {
                    position: "top"
                },
                title: {
                    display: true,
                    text: "Income vs. Expenses"
                }

            }
        })
    }, [income, expenses])


    return (
        <div className='bar-chart'>
            <Bar options={chartOptions} data={chartData} />
        </div>
    );
}

export default BarChart;