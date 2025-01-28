import "./App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // run only once
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className="container pt-2">
      {/* <DataFetching data={data} isLoading={isLoading} /> */}
      <AdjustableTimer />
    </div>
  );
}

export default App;

function AdjustableTimer() {
  const [seconds, setSeconds] = useState(0);
  const [intervalMs, setIntervalsMs] = useState(1000);

  useEffect(() => {
    const interval =setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [intervalMs]);

  return (
    <div>
      <div> Sconds: {seconds}</div>
      <input
        type="numer"
        value={intervalMs}
        onChange={(e) => setIntervalsMs(Number(e.target.value))}
      />
      <label>Adjunst interval in ms</label>
    </div>
  );
}

function DataFetching({ data, isLoading }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
