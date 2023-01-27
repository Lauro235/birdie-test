import './App.css';
import { useEffect } from 'react';

function App() {
  // const [quote, setQuote] = useState<string | undefined>(undefined);

  useEffect(
    () => {
      const fetchData = async () => {
        const res = await fetch("http://localhost:8000/")
        const data = await res.json()
        console.log(data);
        
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
      </header>
    </div>
  );
}

export default App;
