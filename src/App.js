import { useState } from "react";
import { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
function App() {
  const [status,SetStatus] = useState("deneme");
  useEffect(()=>{
      SetStatus("Deneme2")
  },[])
  
  return (
    
    <div className="App">
     <BsSearch/>
    </div>
  );
}

export default App;
