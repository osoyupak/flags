import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Countries from "./Countries";


export default function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountries(response.data));
  }, []);
  

  const handleChange = (e) => {
    setSearch(e.target.value)
}


  
  return (
    <div className="container mt-3" style={{ maxWidth: "600px" }}>
      <SearchBar handleChange={handleChange} />

    <Countries countries={countries} search={search}/>
    </div>
  );
}
