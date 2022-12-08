import React, { useState, useEffect } from 'react';

import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

import { Pie } from "react-chartjs-2"

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)



function PieChart({ budget }) {

    const getCategoryTotals = (expenses) => {

        const totalsList = []

        expenses.forEach(element => {
            const itemAlreadyExists = totalsList.find(item => item.category === element.category)

            //if item is not present, add the item
            if (!itemAlreadyExists) {
                totalsList.push({ category: element.category, value: element.value })
            } else {
                //if is present, add the amt 
                itemAlreadyExists.value += element.value
            }
        });

        return totalsList


    }

    const categoryList = getCategoryTotals(budget).map(x => x.category)
    const amtList = getCategoryTotals(budget).map(x => x.value)

    const [chartData, setChartData] = useState({
        datasets: [],
    })

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        console.log(categoryList)
        setChartData({
            labels: categoryList,
            datasets: [{
                label: '',
                data: amtList,
                borderColor: "rgb(53,162,235)",
                backgroundColor: [
                    'rgba(255, 99, 132,0.8)',
                    'rgba(54, 162, 235,0.8)',
                    'rgba(255, 205, 86,0.8)',
                    'rgba(6, 176, 15, 0.8)',
                    'rgba(6, 15, 176, 0.8)',
                    'rgba(250, 135, 5, 0.8)'

                ]
            }],

        });

        setChartOptions({
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'right'
                },
                title: {
                    display: true,
                    text: "Budget Categories"
                },
                datalabels: {
                    display: true,
                    align: 'left',
                    backgroundColor: '#ccc',
                    borderRadius: 3,
                    font: {
                        size: 18,
                    },
                },

            }

        });

    }, [budget])





    return (
        <div className='pie-chart'>

            <Pie options={chartOptions} data={chartData} className='pie' />

        </div>
    );
}

export default PieChart;