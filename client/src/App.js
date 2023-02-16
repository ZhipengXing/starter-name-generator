import React, { useState, useEffect } from "react";

const App = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch("https://starter-name-generator-backend-mdcj.onrender.com/generate")
      .then((res) => res.json())
      .then((nme) => setName([nme]))
      .catch((error) => console.log(error));
  }, []);

  return <h1>{name}</h1>;
};

export default App;
