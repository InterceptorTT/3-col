import './App.css';
import "./scss/main.scss";
import Sedan from "./components/sedan";
import Luxury from "./components/luxury";
import Suv from "./components/suv";



function App() {

  return (
    <>
       <div className="container flex-center">
        <Sedan className="sedan"/>
        <Luxury />
        <Suv />
       </div>
    </>
  )
}

export default App
