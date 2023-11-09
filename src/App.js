import { BrowserRouter, Route, Routes } from "react-router-dom";
import Remaster from "./Components/Remaster"
import Home from "./Components/Home"

function App() { 

  return (
    
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="detail" element={<Remaster/>}></Route>
      </Routes>
      </BrowserRouter>
      
   </>
 
  )
}test5

export default App;
