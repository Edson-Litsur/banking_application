"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnuthChart = ({accounts}: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [1250, 2500, 3750],
                backgroundColor: ['#07476b6', '#2265d8', '#2f91fa']
            }
        ],
        labels: ['Bank 1', 'Bank', 'Bank 3']
    }

    // Making the Donut Big
    
  return <Doughnut 
    data={data} 
    options={{
        cutout: '60%',
        plugins: {
            legend: {
                display: false
            }
        }
    }}
    
  />
}

export default DoughnuthChart
