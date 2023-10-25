import { useState } from "react";
import Berke from "./Components/Berke.jsx";
import Deneme from "./Components/Deneme.jsx";
import { useEffect } from "react";

function App() {
  const [status,SetStatus] = useState("deneme");
  useEffect(()=>{
      SetStatus("Deneme2")
  },[])
  
  return (
    
    <div className="App">
      {status}
    </div>
  );
}

export default App;
