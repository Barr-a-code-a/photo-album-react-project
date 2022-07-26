import "./App.css";
import AlbumItem from "./Components/AlbumItem";
import React, { useState, useEffect } from "react";

function App() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = "https://jsonplaceholder.typicode.com/photos";
      const res = await fetch(url);
      const data = await res.json();
      setApiData(data);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      {apiData.slice(20, 51).map((item) => (
        <AlbumItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default App;