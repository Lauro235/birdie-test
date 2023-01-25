import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [quote, setQuote] = useState<string | undefined>(undefined);

  useEffect(
    () => {
      const fetchData = async () => {
        const data = await fetch("https://api.kanye.rest/")
        const {quote} = await data.json()
        setQuote(quote)
      }
      fetchData()
    }
    ,[]
  )

  console.log(quote);
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Portal</h1>
        <p>
          {quote}
        </p>
      </header>
    </div>
  );
}

export default App;
