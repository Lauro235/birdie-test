import './App.css';
// import { useEffect, useState } from 'react';
import { useState } from 'react';
import {createLabelArray, createDataArray} from './helper/chart'
import MyBar from './Components/Charts/Bar';
import { isNotObject } from './helper/isNotObject';
import { useFetch } from './hooks/useFetch'

/*
implement bar chart
https://react-chartjs-2.js.org/examples/vertical-bar-chart/
*/

function App() {
  const [events, setEvents] = useState<{[key: string]: number}>({});
  const [recipientJson, setRecipientJson] = useState<{[key: string]: string}>({})

  // useEffect(
  //   () => {
  //     const fetchData = async () => {
  //       const res = await fetch("http://localhost:8000/")
  //       const data = await res.json()
  //       setEvents(data)
  //     }
  //     fetchData()
  //   }
  //   ,[]
  //   )

  useFetch('http://localhost:8000/', setEvents)
  useFetch('http://localhost:8000/time', setRecipientJson)

  
    console.log(events);
    console.log(recipientJson);
      
    
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
