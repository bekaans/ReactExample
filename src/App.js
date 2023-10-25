import Berke from "./Components/Berke.jsx";
import Deneme from "./Components/Deneme.jsx";

function App() {
  const denemelik = "wqdqfqwfwqgqg";
  const clickFunction = () =>{
    console.log("sen tıkladın");
  }
  return (
    
    <div className="App">
     <Berke props={denemelik}></Berke>
      <Deneme></Deneme>
    <button onClick={clickFunction}>clickkk</button>
    </div>
  );
}

export default App;
