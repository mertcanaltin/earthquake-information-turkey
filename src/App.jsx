import React, { useState, useEffect } from "react";
import './App.css'
import Card from "./components/Card/Card";

function App() {
  let [fetchedData, updateFetchedData] = useState([]);
  let { result } = fetchedData;
  let api = `https://api.orhanaydogdu.com.tr/deprem/live.php`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  
  return (
    <>
      <p class="text-5xl text-center mt-10 dark:text-white">Son Depremler</p>
      <Card results={result} />
    </>
    )
}

export default App
