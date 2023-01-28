import './App.css';
import { useEffect, useState } from 'react';
import {createLabelArray, createDataArray} from './helper/chart'

/*
implement bar chart
https://react-chartjs-2.js.org/examples/vertical-bar-chart/
*/

function App() {
  const [events, setEvents] = useState<{[key: string]: number}>({});

  useEffect(
    () => {
      const fetchData = async () => {
        const res = await fetch("http://localhost:8000/")
        const data = await res.json()
        console.log(data);
        setEvents(data)
      }
      fetchData()
    }
    ,[]
  )

  console.log(typeof events);
  console.log(createLabelArray(events));
  console.log(createDataArray(events));
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Portal</h1>
        <p>
          Text
        </p>
      </header>
    </div>
  );
}

export default App;
