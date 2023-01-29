import './App.css';
import { useEffect, useState } from 'react';
import {createLabelArray, createDataArray} from './helper/chart'
import MyBar from './Components/Charts/Bar';
import { isNotObject } from './helper/isObject';

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Portal</h1>
        <p>
          Text
        </p>
        {
          isNotObject(events) === false &&
          <MyBar eventLabels={createLabelArray(events)} eventData={createDataArray(events)} />
        }
      </header>
    </div>
  );
}

export default App;
