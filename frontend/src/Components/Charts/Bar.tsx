import { Chart as ChartJS, ArcElement, Tooltip, CategoryScale, LinearScale, BarElement } from 'chart.js'
import { Bar } from 'react-chartjs-2'

import bar from './MyBar.module.css'

ChartJS.register(ArcElement, Tooltip, CategoryScale, LinearScale, BarElement )

// interface EventProps extends BarElement

function MyBar(eventLabels: string[], eventData: number[]) {
  const data = {
    labels: eventLabels,
    datasets: [{
      data: eventData,
      backgroundColor: [
        '#333',
        '#234',
        '#765',
        '#ace',
        '#37b',
        '#66d',
        '#3a5'
      ],
    }]
  }
  
  return (
      <div className={bar.container}>
        <Bar options={{
          responsive: true,
          // maintainAspectRatio: false,
        }} data={data}/>
      </div>
  )
}

export default MyBar